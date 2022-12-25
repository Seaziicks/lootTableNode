import {
    IAddEffetMagiqueTableTrReq,
    IDeleteEffetMagiqueTableTrReq,
    IGetEffetMagiqueTableTrReq,
    IUpdateEffetMagiqueTableTrReq
} from "./effetMagiqueTableTr.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../../routes";
import {RequestHandler,Response} from "express";
import {IGetEffetMagiqueTableReq} from "../effetMagiqueTable.model";
import * as EffetMagiqueTableTrService from "./effetMagiqueTableTr.service";

/**
 * Get effet magique table tr content from id
 *
 * @param req IGetEffetMagiqueTableTrReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueTableTrById: RequestHandler = async (req: IGetEffetMagiqueTableTrReq, res: Response) => {
    try {

        const effetMagiqueTableTr = await EffetMagiqueTableTrService.getEffetMagiqueTableTrById(req.params.idEffetMagiqueTableTr);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagiqueTableTr);
    } catch (error) {
        console.error('[effetMagiqueTableTr.controller][getEffetMagiqueTableTrById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all table tr contents for an effet magique table, by effet magique table id
 *
 * @param req IGetEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllTableTrForEffetMagiqueTable: RequestHandler = async (req: IGetEffetMagiqueTableReq, res: Response) => {
    try {

        const effetMagiqueTableTr = await EffetMagiqueTableTrService.getAllTableTrForEffetMagiqueTable(req.params.idEffetMagiqueTable);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueTableTr);
    } catch (error) {
        console.error('[effetMagiqueTableTr.controller][getAllTableTrForEffetMagiqueTable][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new table tr content for an effet magique table
 *
 * @param req IAddEffetMagiqueTableTrReq
 * @param res Express Response
 */
export const addEffetMagiqueTableTr: RequestHandler = async (req: IAddEffetMagiqueTableTrReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTrService.addEffetMagiqueTableTr(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTr.controller][addEffetMagiqueTableTr][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique table tr, based on id
 *
 * @param req IUpdateEffetMagiqueTableTrReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueTableTr: RequestHandler = async (req: IUpdateEffetMagiqueTableTrReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTrService.updateEffetMagiqueTableTr({ ...req.body, idEffetMagiqueTableTr: req.params.idEffetMagiqueTableTr });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTr.controller][updateEffetMagiqueTableTr][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an item table tr, base on id
 *
 * @param req IDeleteEffetMagiqueTableTrReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueTableTr: RequestHandler = async (req: IDeleteEffetMagiqueTableTrReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableTrService.deleteEffetMagiqueTableTr(req.params.idEffetMagiqueTableTr);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[effetMagiqueTableTr.controller][deleteEffetMagiqueTableTr][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
