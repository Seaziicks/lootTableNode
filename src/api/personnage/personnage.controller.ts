import {Request, RequestHandler, Response} from "express";
import * as PersonnageService from "../personnage/personnage.services";
import {IAddPersonnageReq, IDeletePersonnageReq, IGetPersonnageReq, IUpdatePersonnageReq} from "./personnage.model";
import {IGetUserReq} from "../user/user.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";
import Personnage from "../../../models/Personnage";

/**
 * Get all personnages
 *
 * @param req IGetPersonnageReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllPersonnages: RequestHandler = async (req: Request, res: Response) => {
    try {
        console.log(req.params.idPersonnage);
        const personnages = await PersonnageService.getAllPersonnages();

        sendSpecialResponse(res,
            200,
            "Ils sont tous là ! Même si tous ne servent à rien.",
            personnages);
    } catch (error) {
        console.error('[personnage.controller][getAllPersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

/**
 * Get personnage record based on id provided
 *
 * @param req IGetPersonnageReq
 * @param res Express Response
 */
// @ts-ignore
export const getPersonnageById: RequestHandler = async (req: IGetPersonnageReq, res: Response) => {
    try {
        // console.log(req.params.idPersonnage);
        const personnage = await PersonnageService.getPersonnageById(req.params.idPersonnage);

        sendSpecialResponse(res,
            200,
            "Bien le bonjour, voyageur. Je vous envoie un de mes meilleurs soldats !",
            personnage[0]);
    } catch (error) {
        console.error('[personnage.controller][getPersonnageById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

/**
 * Get personnage record based on id provided, with statistics
 *
 * @param req IGetPersonnageReq
 * @param res Express Response
 */
// @ts-ignore
export const getPersonnageWithStatistiquesById: RequestHandler = async (req: IGetPersonnageReq, res: Response) => {
    try {
        const personnage = await Personnage.getPersonnageWithStatistiquesFromIdPersonnage(req.params.idPersonnage);

        sendSpecialResponse(res,
            200,
            "Regardez ces muscles, ce cerveau, ces reflexes ! Tout est décevant ...",
            personnage);
    } catch (error) {
        console.error('[personnage.controller][getPersonnageWithStatistiquesById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};


/**
 * Get all personnages with statistiques
 *
 * @param req IGetPersonnageReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllPersonnagesWithStatistics: RequestHandler = async (req: IGetPersonnageReq, res: Response) => {
    try {
        const personnage = await PersonnageService.getAllPersonnagesWithStatistics();

        sendSpecialResponse(res,
            200,
            "Voici la liste de tous nos zigoteaux, avec leurs 'biscotaux'.",
            personnage);
    } catch (error) {
        console.error('[personnage.controller][getAllPersonnagesWithStatistics][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

/**
 * Get personnage record based on id provided
 *
 * @param req IGetUserReq
 * @param res Express Response
 */
// @ts-ignore
export const getPersonnageByUserId: RequestHandler = async (req: IGetUserReq, res: Response) => {
    try {
        const personnage = await PersonnageService.getPersonnageByUserId(req.params.idUser);

        sendSpecialResponse(res,
            200,
            "Cette âme est rattachée à ... ça ... Bon courage !",
            personnage[0]);
    } catch (error) {
        console.error('[personnage.controller][getPersonnageByUserId][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by user id");
    }
};

/**
 * Get personnages not affected to users
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getPersonnagesAvailable: RequestHandler = async (req: Request, res: Response) => {
    try {

        const personnages = await PersonnageService.getPersonnagesAvailable();
        console.log(personnages);

        res.status(200).json({
            status: 200,
            status_message: "Voilà un catalogue de nos meilleurs specimens encore disponibles.",
            data: personnages
        });
    } catch (error) {
        console.error('[personnage.controller][getPersonnagesAvailable][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnages");
    }
}

/**
 * Find if a personnage name is already used
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const personnageNameAvailable: RequestHandler = async (req: Request, res: Response) => {
    try {

        const personnage = (await PersonnageService.personnageNameExists(req.params.personnageName))[0];
        // console.log(personnage);

        !personnage ?
            sendSpecialResponse(res, 200, "Oh, ce serait un nouveau costume ?", '')
        :
            sendSpecialResponse(res, 409, "Cet avatar est déjà ... Hum ... Utilisé.", '');
        // console.log(personnage);

    } catch (error) {
        console.error('[personnage.controller][personnageNameAvailable][Error]', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnages");
    }
}

/**
 * Add a personnage
 *
 * @param req IAddPersonnageReq
 * @param res Express Response
 */
// @ts-ignore
export const addPersonnage: RequestHandler = async (req: IAddPersonnageReq, res: Response) => {
    try {
        const result = await PersonnageService.addPersonnage(req.body);

        sendSpecialResponse(res,
            201,
            "Vous êtes sûr de vouloir le prendre avec vous ? Eh bah bon courage.",
            result.affectedRows > 0);
    } catch (error) {
        console.error('[personnage.controller][addPersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new personnage");
    }
};

/**
 * Update an existing personnage, based on id
 *
 * @param req IUpdatePersonnageReq
 * @param res Express Response
 */
// @ts-ignore
export const updatePersonnage: RequestHandler = async (req: IUpdatePersonnageReq, res: Response) => {
    try {
        const result = await PersonnageService.updatePersonnage({ ...req.body, idPersonnage: req.params.idPersonnage });

        sendSpecialResponse(res,
            200,
            "Je me disais, aussi.",
            result);
    } catch (error) {
        console.error('[personnage.controller][updatePersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an personnage, base on id
 *
 * @param req IDeletePersonnageReq
 * @param res Express Response
 */
// @ts-ignore
export const deletePersonnage: RequestHandler = async (req: IDeletePersonnageReq, res: Response) => {
    try {
        const result = await PersonnageService.deletePersonnage(req.params.idPersonnage);

        sendSpecialResponse(res,
            200,
            "Ah, je vois que vous enlevez ce qui ne sert plus à rien.",
            result);
    } catch (error) {
        console.error('[personnage.controller][deletePersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
