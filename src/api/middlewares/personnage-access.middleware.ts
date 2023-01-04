import {NextFunction, Response} from "express";
import {TokenPayload} from "../utils/jwt.utils";
import * as ItemService from "../item/item.services";
import {IGetItemReq} from "../item/item.model";
import {IGetPersonnageReq} from "../personnage/personnage.model";
import {IUpdateUserReq} from "../user/user.model";

/**
 * middleware to check whether user has access to a specific information
 *
 * @param idUser user id, to check if the information can be seen.
 */
export const isSameUser = () => async (req: IUpdateUserReq, res: Response, next: NextFunction) => {
    try {

        const decodedToken: TokenPayload = res.locals.token;
        // console.log(decodedToken);

        if (decodedToken.idUser !== req.params.idUser && !decodedToken.isAdmin && !decodedToken.isGameMaster) {
            return res.status(403).json({ message: 'Unauthorized access.' });
        }

        // res.locals.token = decodedToken;

        next();
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Expired token' });
            return;
        }

        console.log(error);
        res.status(500).json({ message: 'Failed to authenticate user' });
    }
};

/**
 * middleware to check whether user can modify fake name or not
 */
export const isSameItemOwner = () => async (req: IGetItemReq, res: Response, next: NextFunction) => {
    try {

        const decodedToken : TokenPayload = res.locals.token;
        const item = (await ItemService.getItemById(req.params.idObjet))[0];
        const ownerId = item.idPersonnage;

        if (!(ownerId === decodedToken.personnage.idPersonnage) && !decodedToken.isAdmin && !decodedToken.isGameMaster) {
            return res.status(401).json({ message: 'No enough privileges to access endpoint' });
        }

        // res.locals.token = decodedToken;

        next();
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Expired token' });
            return;
        }

        console.log(error);
        res.status(500).json({ message: 'Failed to authenticate user' });
    }
};


/**
 * middleware to check whether personnage has access to a specific information
 *
 * @param idPersonnage personnage id, to check if the information can be seen.
 */
export const isSamePersonnage = () => async (req: IGetPersonnageReq, res: Response, next: NextFunction) => {
    try {

        const decodedToken: TokenPayload = res.locals.token;

        if (decodedToken.idPersonnage !== req.params.idPersonnage && !decodedToken.isGameMaster && !decodedToken.isAdmin) {
            return res.status(403).json({ message: 'Unauthorized access.' });
        }

        // res.locals.token = decodedToken;

        next();
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Expired token' });
            return;
        }

        console.log(error);
        res.status(500).json({ message: 'Failed to authenticate user' });
    }
};
