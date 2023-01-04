import {NextFunction, Request, Response} from "express";
import {TokenPayload, validateToken} from "../utils/jwt.utils";
import * as ItemService from "../item/item.services";
import {IGetItemReq} from "../item/item.model";

/**
 * middleware to check whether personnage has access to a specific information
 *
 * @param idPersonnage personnage id, to check if the information can be seen.
 */
export const isSameUser = (idPersonnage: number) => async (req: Request, res: Response, next: NextFunction) => {
    try {

        // verify token hasn't expired yet
        const decodedToken: TokenPayload = res.locals.token;
        console.log(decodedToken);

        if (decodedToken.idUser !== idPersonnage) {
            return res.status(403).json({ message: 'Unauthorized access.' });
        }

        res.locals.token = decodedToken;

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
        let jwt = req.headers.authorization;

        // verify request has token
        if (!jwt) {
            return res.status(401).json({ message: 'Invalid token ' });
        }

        // remove Bearer if using Bearer Authorization mechanism
        if (jwt.toLowerCase().startsWith('bearer')) {
            jwt = jwt.slice('bearer'.length).trim();
        }

        // verify token hasn't expired yet
        const decodedToken = await validateToken(jwt);
        const item = await ItemService.getItemById(req.params.idObjet);
        const ownerId = item[0].idPersonnage;

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
