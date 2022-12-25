import {
    IAddEffetMagiqueTableTitleContentReq,
    IDeleteEffetMagiqueTableTitleContentReq,
    IGetEffetMagiqueTableTitleContentReq,
    IUpdateEffetMagiqueTableTitleContentReq
} from "./effetMagiqueTableTitleContent.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../../../routes";
import {RequestHandler,Response} from "express";
import {IGetEffetMagiqueTableTitleReq} from "../effetMagiqueTableTitle.model";
import * as EffetMagiqueTableTitleContentService from "./effetMagiqueTableTitleContent.service";

/**
 * Get effet magique ul content from id
 *
 * @param req IGetEffetMagiqueTableTitleContentReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueTableTitleContentById: RequestHandler = async (req: IGetEffetMagiqueTableTitleContentReq, res: Response) => {
    try {

        const effetMagiqueTableTitleContent = await EffetMagiqueTableTitleContentService.getEffetMagiqueTableTitleContentById(req.params.idEffetMagiqueTableTitleContent);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagiqueTableTitleContent);
    } catch (error) {
        console.error('[effetMagiqueTableTitleContent.controller][getEffetMagiqueTableTitleContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
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
export const getAllTitleContentForEffetMagiqueTableTitle: RequestHandler = async (req: IGetEffetMagiqueTableTitleReq, res: Response) => {
    try {

        const effetMagiqueTableTitleContent = await EffetMagiqueTableTitleContentService.getAllTitleContentForEffetMagiqueTableTitle(req.params.idEffetMagiqueTableTitle);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueTableTitleContent);
    } catch (error) {
        console.error('[effetMagiqueTableTitleContent.controller][getAllTitleContentForEffetMagiqueTableTitle][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new ul content for an effet magique
 *
 * @param req IAddEffetMagiqueTableTitleContentReq
 * @param res Express Response
 */
export const addEffetMagiqueTableTitleContent: RequestHandler = async (req: IAddEffetMagiqueTableTitleContentReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTitleContentService.addEffetMagiqueTableTitleContent(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTitleContent.controller][addEffetMagiqueTableTitleContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique ul content, based on id
 *
 * @param req IUpdateEffetMagiqueTableTitleContentReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueTableTitleContent: RequestHandler = async (req: IUpdateEffetMagiqueTableTitleContentReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTitleContentService.updateEffetMagiqueTableTitleContent({ ...req.body, idEffetMagiqueTableTitleContent: req.params.idEffetMagiqueTableTitleContent });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTitleContent.controller][updateEffetMagiqueTableTitleContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Inserts a new item record based
 *
 * @param req IDeleteEffetMagiqueTableTitleContentReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueTableTitleContent: RequestHandler = async (req: IDeleteEffetMagiqueTableTitleContentReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTitleContentService.deleteEffetMagiqueTableTitleContent(req.params.idEffetMagiqueTableTitleContent);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTitleContent.controller][deleteEffetMagiqueTableTitleContent][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
