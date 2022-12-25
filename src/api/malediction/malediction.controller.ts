import {RequestHandler, Response} from "express";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";
import * as EffetMagiqueUtils from "../utils/effetMagique.utils";
import * as MaledictionService from "./malediction.service";
import {
    IAddMaledictionReq,
    IDeleteMaledictionReq,
    IGetMaledictionReq,
    IMalediction,
    IUpdateMaledictionReq
} from "./malediction.model";

/**
 * Get effet magique description from id
 *
 * @param req IGetMaledictionReq
 * @param res Express Response
 */
// @ts-ignore
export const getMaledictionById: RequestHandler = async (req: IGetMaledictionReq, res: Response) => {
    try {

        const effetMagiqueDescription = await MaledictionService.getMaledictionById(req.params.idMalediction);

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            effetMagiqueDescription);
    } catch (error) {
        console.error('[malediction.controller][getMalediction][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Add a new description for an effet magique
 *
 * @param req IAddMaledictionReq
 * @param res Express Response
 */
export const addMalediction: RequestHandler = async (req: IAddMaledictionReq, res: Response) => {
    try {
        const result = await MaledictionService.addMalediction(req.body);

        sendSpecialResponse(res,
            201,
            "C'est toujours un plaisir de pimenter le jeu !",
            result);
    } catch (error) {
        console.error('[malediction.controller][addMalediction][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique description, based on id
 *
 * @param req IUpdateMaledictionReq
 * @param res Express Response
 */
// @ts-ignore
export const updateMalediction: RequestHandler = async (req: IUpdateMaledictionReq, res: Response) => {
    try {
        const result = await MaledictionService.updateMalediction({ ...req.body, idMalediction: req.params.idMalediction });

        sendSpecialResponse(res,
            200,
            "J'espère que c'est pire qu'avant, sinon c'est pas marrant ! ",
            result);
    } catch (error) {
        console.error('[malediction.controller][updateMalediction][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an effet magique description, base on id
 *
 * @param req IDeleteMaledictionReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteMalediction: RequestHandler = async (req: IDeleteMaledictionReq, res: Response) => {
    try {
        const result = await MaledictionService.deleteMalediction(req.params.idMalediction);

        sendSpecialResponse(res,
            200,
            "Ah, c'est bien dommage ça ...",
            result);
    } catch (error) {
        console.error('[malediction.controller][deleteMalediction][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
