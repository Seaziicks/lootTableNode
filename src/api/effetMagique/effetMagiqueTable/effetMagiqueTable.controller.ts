import {RequestHandler, Response} from "express";
import * as EffetMagiqueTableService from "./effetMagiqueTable.services";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";
import {IGetEffetMagiqueReq} from "../effetMagique.model";
import {
    IAddEffetMagiqueTableReq,
    IDeleteEffetMagiqueTableReq,
    IGetEffetMagiqueTableReq, IUpdateEffetMagiqueTableReq
} from "./effetMagiqueTable.model";

/**
 * Get effet magique table from id
 *
 * @param req IGetEffetMagiqueTableReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueTableById: RequestHandler = async (req: IGetEffetMagiqueTableReq, res: Response) => {
    try {

        const effetMagiqueTable = await EffetMagiqueTableService.getEffetMagiqueTableById(req.params.idEffetMagiqueTable);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagiqueTable);
    } catch (error) {
        console.error('[effetMagiqueTable.controller][getEffetMagiqueTableById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all tables for an effet magique, by effet magique id
 *
 * @param req IGetEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllTableForEffetMagique: RequestHandler = async (req: IGetEffetMagiqueReq, res: Response) => {
    try {

        const effetMagiqueTable = await EffetMagiqueTableService.getAllTableForEffetMagique(req.params.idEffetMagique);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueTable);
    } catch (error) {
        console.error('[effetMagiqueTable.controller][getAllTableForEffetMagique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new table for an effet magique
 *
 * @param req IAddEffetMagiqueTableReq
 * @param res Express Response
 */
export const addEffetMagiqueTable: RequestHandler = async (req: IAddEffetMagiqueTableReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableService.addEffetMagiqueTable(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTable.controller][addEffetMagiqueTable][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Add a new complete table for an effet magique, with all corresponding titles and trs, and their own content
 *
 * @param req IAddEffetMagiqueTableReq
 * @param res Express Response
 */
export const addCompleteEffetMagiqueTable: RequestHandler = async (req: IAddEffetMagiqueTableReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableService.addCompleteEffetMagiqueTable(req.body);

        sendSpecialResponse(res,
            201,
            "Vous voulez vraiment m'encombrer avec tout ça ? ...",
            result);
    } catch (error) {
        console.error('[effetMagiqueTable.controller][addEffetMagiqueTable][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique table, based on id
 *
 * @param req IUpdateEffetMagiqueTableReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueTable: RequestHandler = async (req: IUpdateEffetMagiqueTableReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableService.updateEffetMagiqueTable({ ...req.body, idEffetMagiqueTable: req.params.idEffetMagiqueTable });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTable.controller][updateEffetMagiqueTable][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an table from effet magique, based on id
 *
 * @param req IDeleteEffetMagiqueTableReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueTable: RequestHandler = async (req: IDeleteEffetMagiqueTableReq, res: Response) => {
    try {
        const result = await EffetMagiqueTableService.deleteEffetMagiqueTable(req.params.idEffetMagiqueTable);

        sendSpecialResponse(res,
            200,
            "Si vous faisiez décoller une fusée avec ces données, ça aurait fini en Arianne 5 !",
            result);
    } catch (error) {
        console.error('[effetMagiqueTable.controller][deleteEffetMagiqueTable][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
