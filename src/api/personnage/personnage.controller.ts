import {RequestHandler, Response} from "express";
import * as PersonnageService from "../personnage/personnage.services";
import {IGetPersonnageReq} from "./personnage.model";
import {IGetUserReq} from "../user/user.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";

/**
 * Get personnage record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getPersonnageById: RequestHandler = async (req: IGetPersonnageReq, res: Response) => {
    try {
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
 * Get personnage record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getPersonnageByUserId: RequestHandler = async (req: IGetUserReq, res: Response) => {
    try {
        const personnage = await PersonnageService.getPersonnageByUserId(req.params.id);

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
export const getPersonnagesAvailable: RequestHandler = async (req: Response, res: Response) => {
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
