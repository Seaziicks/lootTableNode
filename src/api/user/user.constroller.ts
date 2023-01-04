import {Request, RequestHandler, Response} from "express";
import {IDeleteUserReq, IUpdateUserReq, IUserLoginReq} from "./user.model";
import * as UserService from "./user.services"
import {generateToken} from "../utils/jwt.utils";
import {IncorrectLoginInfoError, MissingLoginInfoError} from "../utils/customErrors";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";
import * as PersonnageService from "../personnage/personnage.services";
import {IPersonnage} from "../personnage/personnage.model";


/**
 * Get active item records
 *
 * @param req IUserLoginReq
 * @param res Express Response
 */
// @ts-ignore
export const userLogin: RequestHandler = async (req: IUserLoginReq, res: Response) => {
    try {
        const queryParams = req.query;
        if (!queryParams.username || !queryParams.password) {
            // throw new MissingLoginInfoError("Username ou mot de passe manquant.");
            sendSpecialResponse(res,
                403,
                "Désolé, connais pas !",
                "Username ou mot de passe manquant.");
            return
        }
        // console.log("username/password :", queryParams);
        const user = await UserService.getUserByUsernameAndPassword(queryParams.username as string, queryParams.password as string);
        // console.log("user :", user[0]);

        if (!user[0]) {
            // throw new IncorrectLoginInfoError("Username et/ou mot de passe incorrect(s).");
            sendSpecialResponse(res,
                403,
                "Désolé, connais pas !",
                "Username et/ou mot de passe incorrect(s).");
            return
        }

        const jwt = await generateToken(user[0]);
        // console.log(jwt);

        sendSpecialResponse(res,
            200,
            "Qui a demandé un token bien chaud, qui ?!",
            jwt);
    } catch (error) {
        if (error instanceof MissingLoginInfoError || error instanceof IncorrectLoginInfoError) {
            sendSpecialResponse(res,
                403,
                "Désolé, connais pas !",
                error.message);
            return
        }
        console.log(error);
        console.error('[user.controller][login][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Find if a personnage name is already used
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const isUsernameAvailable: RequestHandler = async (req: Request, res: Response) => {
    try {

        const user = (await UserService.usernameExists(req.params.username))[0];
        // console.log(user);

        !user ?
            sendSpecialResponse(res, 200, "Votre nom ne me dis rien ... Voulez-vous nous rejoindre ?", '')
            :
            sendSpecialResponse(res, 409, "Vous êtes déjà inscrit dans notre club privé.", '');
        // console.log(user);

    } catch (error) {
        console.error('[user.controller][usernameAvailable][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnages");
    }
}

/**
 * Add a user with a personnage
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const addUserWithPersonnage: RequestHandler = async (req: Request, res: Response) => {
    try {

        const personnageToAssociate: IPersonnage = req.body.personnage;

        if (!personnageToAssociate || !(personnageToAssociate.idPersonnage || personnageToAssociate.nom)) {
            sendSpecialResponse(res, 406, "Il manque votre incarnation. Vous n'êtes pas au bon bureau. Revenez avec le bon formulaire !", '');
            return;
        }

        const userExists = (await UserService.usernameExists(req.body.username))[0];
        // console.log(user);

        if (userExists) {
            sendSpecialResponse(res, 409, "Vous êtes déjà inscrit dans notre club privé.", '');
            return;
        }

        const personnageNameExists = (await PersonnageService.personnageNameExists(personnageToAssociate.nom))[0];
        const existingAvailablePersonnage = (await PersonnageService.getPersonnagesAvailable()).find(personnage => personnage.nom.toLowerCase() === personnageToAssociate.nom.toLowerCase());
        if (personnageNameExists && !existingAvailablePersonnage) {
            sendSpecialResponse(res, 406, "Vous ne pouvez prendre ce nom. Quelqu'un le porte déjà.", '');
            return;
        }

        let idPersonnage;
        if (existingAvailablePersonnage) {
            idPersonnage = existingAvailablePersonnage.idPersonnage;
        } else {
            idPersonnage = (await PersonnageService.addPersonnage(personnageToAssociate)).insertId;
        }

        req.body.idPersonnage = idPersonnage;

        await UserService.addUser(req.body);

        sendSpecialResponse(res, 201, "Alors comme ça vous voulez faire parti du Fight Club ?", '')
        // console.log(user);

    } catch (error) {
        console.error('[user.controller][addUserWithPersonnage][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnages");
    }
}

/**
 * Add a user, without a personnage
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const addUser: RequestHandler = async (req: Request, res: Response) => {
    try {

        const userExists = (await UserService.usernameExists(req.body.username))[0];
        // console.log(user);

        if (userExists) {
            sendSpecialResponse(res, 409, "Vous êtes déjà inscrit dans notre club privé.", '');
            return;
        }

        req.body.idPersonnage = null;

        await UserService.addUser(req.body);

        sendSpecialResponse(res, 201, "Pour l'instant, vous n'êtes que poudre aux yeux.", '')
        // console.log(user);

    } catch (error) {
        console.error('[user.controller][addUser][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnages");
    }
}

/**
 * Update user password from idUser
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const updateUserPassword: RequestHandler = async (req: IUpdateUserReq, res: Response) => {
    try {

        const userExists = (await UserService.getUserById(req.params.idUser))[0];
        // console.log(user);

        if (userExists) {
            sendSpecialResponse(res, 406, "This user does not exists", '');
            return;
        }

        await UserService.updateUserPassword(req.params.idUser, req.body.password);

        sendSpecialResponse(res, 201, "Valar Morghulis ! Ou Mellon ... Attendez, je ne sais plus ...", '')
        // console.log(user);

    } catch (error) {
        console.error('[user.controller][updateUserPassword][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnages");
    }
}

/**
 * Update user username from idUser
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const updateUserUsername: RequestHandler = async (req: IUpdateUserReq, res: Response) => {
    try {

        const userExists = (await UserService.getUserById(req.params.idUser))[0];
        // console.log(user);

        if (userExists) {
            sendSpecialResponse(res, 406, "This user does not exists", '');
            return;
        }

        await UserService.updateUserUsername(req.params.idUser, req.body.username);

        sendSpecialResponse(res, 201, "Valar Morghulis ! Ou Mellon ... Attendez, je ne sais plus ...", '')
        // console.log(user);

    } catch (error) {
        console.error('[user.controller][updateUserUsername][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnages");
    }
}

/**
 * Delete user base on idUser
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const deleteUser: RequestHandler = async (req: IDeleteUserReq, res: Response) => {
    try {

        const userExists = (await UserService.getUserById(req.params.idUser))[0];
        // console.log(user);

        if (userExists) {
            sendSpecialResponse(res, 406, "This user does not exists", '');
            return;
        }

        await UserService.deleteUser(req.params.idUser);

        sendSpecialResponse(res, 201, "Ah, bon bah ... Bon adishatz !", '')
        // console.log(user);

    } catch (error) {
        console.error('[user.controller][deleteUser][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnages");
    }
}
