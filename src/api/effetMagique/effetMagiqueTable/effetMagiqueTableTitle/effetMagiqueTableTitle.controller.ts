import {
    IAddEffetMagiqueTableTitleReq,
    IDeleteEffetMagiqueTableTitleReq,
    IGetEffetMagiqueTableTitleReq,
    IUpdateEffetMagiqueTableTitleReq
} from "./effetMagiqueTableTitle.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../../routes";
import {RequestHandler,Response} from "express";
import {IGetEffetMagiqueTableReq} from "../effetMagiqueTable.model";
import * as EffetMagiqueTableTitleService from "./effetMagiqueTableTitle.services";

/**
 * Get effet magique table title content from id
 *
 * @param req IGetEffetMagiqueTableTitleReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueTableTitleById: RequestHandler = async (req: IGetEffetMagiqueTableTitleReq, res: Response) => {
    try {

        const effetMagiqueTableTitle = await EffetMagiqueTableTitleService.getEffetMagiqueTableTitleById(req.params.idEffetMagiqueTableTitle);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagiqueTableTitle);
    } catch (error) {
        console.error('[effetMagiqueTableTitle.controller][getEffetMagiqueTableTitleById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all table title contents for an effet magique table, by effet magique table id
 *
 * @param req IGetEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllTableTitleForEffetMagiqueTable: RequestHandler = async (req: IGetEffetMagiqueTableReq, res: Response) => {
    try {

        const effetMagiqueTableTitle = await EffetMagiqueTableTitleService.getAllTableTitleForEffetMagiqueTable(req.params.idEffetMagiqueTable);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueTableTitle);
    } catch (error) {
        console.error('[effetMagiqueTableTitle.controller][getAllTableTitleForEffetMagiqueTable][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new table title content for an effet magique table
 *
 * @param req IAddEffetMagiqueTableTitleReq
 * @param res Express Response
 */
export const addEffetMagiqueTableTitle: RequestHandler = async (req: IAddEffetMagiqueTableTitleReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTitleService.addEffetMagiqueTableTitle(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTitle.controller][addEffetMagiqueTableTitle][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique table title, based on id
 *
 * @param req IUpdateEffetMagiqueTableTitleReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueTableTitle: RequestHandler = async (req: IUpdateEffetMagiqueTableTitleReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTitleService.updateEffetMagiqueTableTitle({ ...req.body, idEffetMagiqueTableTitle: req.params.idEffetMagiqueTableTitle });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTitle.controller][updateEffetMagiqueTableTitle][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an item table title, base on id
 *
 * @param req IDeleteEffetMagiqueTableTitleReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueTableTitle: RequestHandler = async (req: IDeleteEffetMagiqueTableTitleReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTitleService.deleteEffetMagiqueTableTitle(req.params.idEffetMagiqueTableTitle);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTitle.controller][deleteEffetMagiqueTableTitle][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
