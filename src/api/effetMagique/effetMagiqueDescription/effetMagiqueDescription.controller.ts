// Partie de Effet Magique Description
import {RequestHandler, Response} from "express";
import {
    IAddEffetMagiqueDescriptionReq, IDeleteEffetMagiqueDescriptionReq, IEffetMagiqueDescription,
    IGetEffetMagiqueDescriptionReq,
    IUpdateEffetMagiqueDescriptionReq
} from "./effetMagiqueDescription.model";
import {IGetEffetMagiqueReq} from "../effetMagique.model";
import * as EffetMagiqueDescriptionService from "./effetMagiqueDescription.service";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";
import * as EffetMagiqueUtils from "../../utils/effetMagique.utils";

/**
 * Get effet magique description from id
 *
 * @param req IGetEffetMagiqueDescriptionReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueDescriptionById: RequestHandler = async (req: IGetEffetMagiqueDescriptionReq, res: Response) => {
    try {

        const effetMagiqueDescription = await EffetMagiqueDescriptionService.getEffetMagiqueDescriptionById(req.params.idEffetMagiqueDescription);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagiqueDescription);
    } catch (error) {
        console.error('[effetMagiqueDescription.controller][getEffetMagiqueDescription][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all descriptions for an effet magique, by effet magique id
 *
 * @param req IGetEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllDescriptionForEffetMagique: RequestHandler = async (req: IGetEffetMagiqueReq, res: Response) => {
    try {

        const effetMagiqueDescription = await EffetMagiqueDescriptionService.getAllDescriptionForEffetMagique(req.params.idEffetMagique);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueDescription);
    } catch (error) {
        console.error('[effetMagiqueDescription.controller][getAllDescriptionForEffetMagique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new description for an effet magique
 *
 * @param req IAddEffetMagiqueDescriptionReq
 * @param res Express Response
 */
export const addEffetMagiqueDescription: RequestHandler = async (req: IAddEffetMagiqueDescriptionReq, res: Response) => {
    try {
        const result = await EffetMagiqueDescriptionService.addEffetMagiqueDescription(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagiqueDescription.controller][addEffetMagiqueDescription][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique description, based on id
 *
 * @param req IUpdateEffetMagiqueDescriptionReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueDescription: RequestHandler = async (req: IUpdateEffetMagiqueDescriptionReq, res: Response) => {
    try {
        const result = await EffetMagiqueDescriptionService.updateEffetMagiqueDescription({ ...req.body, idEffetMagiqueDescription: req.params.idEffetMagiqueDescription });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagiqueDescription.controller][updateEffetMagiqueDescription][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an effet magique description, base on id
 *
 * @param req IDeleteEffetMagiqueDescriptionReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueDescription: RequestHandler = async (req: IDeleteEffetMagiqueDescriptionReq, res: Response) => {
    try {

        const queryParams = req.query;
        const effetMagiqueDescription: IEffetMagiqueDescription = queryParams.EffetMagiqueDescription as unknown as IEffetMagiqueDescription;

        await EffetMagiqueUtils.updateTableAndUlPosition(effetMagiqueDescription);

        const result = await EffetMagiqueDescriptionService.deleteEffetMagiqueDescription(req.params.idEffetMagiqueDescription);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[effetMagiqueDescription.controller][deleteEffetMagiqueDescription][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
