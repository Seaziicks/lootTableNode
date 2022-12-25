import {classicalSpecialResponseError500, sendSpecialResponse} from "../../../routes";
import {
    IAddEffetMagiqueUlContentReq,
    IDeleteEffetMagiqueUlContentReq,
    IGetEffetMagiqueUlContentReq, IUpdateEffetMagiqueUlContentReq
} from "./effetMagiqueUlContent.model";
import {RequestHandler, Response} from "express";
import {IGetEffetMagiqueUlReq} from "../effetMagiqueUl.model";
import * as EffetMagiqueUlContentService from "./effetMagiqueUlContent.service";

/**
 * Get effet magique ul content from id
 *
 * @param req IGetEffetMagiqueUlContentReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueUlContentById: RequestHandler = async (req: IGetEffetMagiqueUlContentReq, res: Response) => {
    try {

        const effetMagiqueUlContent = await EffetMagiqueUlContentService.getEffetMagiqueUlContentById(req.params.idEffetMagiqueUlContent);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagiqueUlContent);
    } catch (error) {
        console.error('[effetMagiqueUlContent.controller][getEffetMagiqueUlContentById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
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
export const getAllUlContentForEffetMagiqueUl: RequestHandler = async (req: IGetEffetMagiqueUlReq, res: Response) => {
    try {

        const effetMagiqueUlContent = await EffetMagiqueUlContentService.getAllUlContentForEffetMagiqueUl(req.params.idEffetMagiqueUl);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueUlContent);
    } catch (error) {
        console.error('[effetMagiqueUlContent.controller][getAllUlContentForEffetMagiqueUl][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new ul content for an effet magique
 *
 * @param req IAddEffetMagiqueUlContentReq
 * @param res Express Response
 */
export const addEffetMagiqueUlContent: RequestHandler = async (req: IAddEffetMagiqueUlContentReq, res: Response) => {
    try {
        const result = await EffetMagiqueUlContentService.addEffetMagiqueUlContent(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagiqueUlContent.controller][addEffetMagiqueUlContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique ul content, based on id
 *
 * @param req IUpdateEffetMagiqueUlContentReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueUlContent: RequestHandler = async (req: IUpdateEffetMagiqueUlContentReq, res: Response) => {
    try {
        const result = await EffetMagiqueUlContentService.updateEffetMagiqueUlContent({ ...req.body, idEffetMagiqueUlContent: req.params.idEffetMagiqueUlContent });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagiqueUlContent.controller][updateEffetMagiqueUlContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Inserts a new item record based
 *
 * @param req IDeleteEffetMagiqueUlContentReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueUlContent: RequestHandler = async (req: IDeleteEffetMagiqueUlContentReq, res: Response) => {
    try {
        const result = await EffetMagiqueUlContentService.deleteEffetMagiqueUlContent(req.params.idEffetMagiqueUlContent);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[effetMagiqueUlContent.controller][deleteEffetMagiqueUlContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
