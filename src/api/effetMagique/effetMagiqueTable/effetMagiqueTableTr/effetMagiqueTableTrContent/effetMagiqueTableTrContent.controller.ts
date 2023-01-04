import {
    IAddEffetMagiqueTableTrContentReq,
    IDeleteEffetMagiqueTableTrContentReq,
    IGetEffetMagiqueTableTrContentReq, IUpdateEffetMagiqueTableTrContentReq
} from "./effetMagiqueTableTrContent.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../../../routes";
import {RequestHandler,Response} from "express";
import {IGetEffetMagiqueTableTrReq} from "../effetMagiqueTableTr.model";
import * as EffetMagiqueTableTrContentService from "./effetMagiqueTableTrContent.services";

/**
 * Get effet magique ul content from id
 *
 * @param req IGetEffetMagiqueTableTrContentReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueTableTrContentById: RequestHandler = async (req: IGetEffetMagiqueTableTrContentReq, res: Response) => {
    try {

        const effetMagiqueTableTrContent = await EffetMagiqueTableTrContentService.getEffetMagiqueTableTrContentById(req.params.idEffetMagiqueTableTrContent);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagiqueTableTrContent);
    } catch (error) {
        console.error('[effetMagiqueTableTrContent.controller][getEffetMagiqueTableTrContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all ul contents for an effet magique, by effet magique id
 *
 * @param req IGetEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllTrContentForEffetMagiqueTableTr: RequestHandler = async (req: IGetEffetMagiqueTableTrReq, res: Response) => {
    try {

        const effetMagiqueTableTrContent = await EffetMagiqueTableTrContentService.getAllTrContentForEffetMagiqueTableTr(req.params.idEffetMagiqueTableTr);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueTableTrContent);
    } catch (error) {
        console.error('[effetMagiqueTableTrContent.controller][getAllTrContentForEffetMagiqueTableTr][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new ul content for an effet magique
 *
 * @param req IAddEffetMagiqueTableTrContentReq
 * @param res Express Response
 */
export const addEffetMagiqueTableTrContent: RequestHandler = async (req: IAddEffetMagiqueTableTrContentReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTrContentService.addEffetMagiqueTableTrContent(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTrContent.controller][addEffetMagiqueTableTrContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique ul content, based on id
 *
 * @param req IUpdateEffetMagiqueTableTrContentReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueTableTrContent: RequestHandler = async (req: IUpdateEffetMagiqueTableTrContentReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTrContentService.updateEffetMagiqueTableTrContent({ ...req.body, idEffetMagiqueTableTrContent: req.params.idEffetMagiqueTableTrContent });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTrContent.controller][updateEffetMagiqueTableTrContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Inserts a new item record based
 *
 * @param req IDeleteEffetMagiqueTableTrContentReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueTableTrContent: RequestHandler = async (req: IDeleteEffetMagiqueTableTrContentReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTrContentService.deleteEffetMagiqueTableTrContent(req.params.idEffetMagiqueTableTrContent);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTrContent.controller][deleteEffetMagiqueTableTrContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
