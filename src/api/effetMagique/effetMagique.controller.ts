import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";
import {RequestHandler,Response} from "express";
import {
    IAddEffetMagiqueReq,
    IDeleteEffetMagiqueReq,
    IGetEffetMagiqueReq,
    IUpdateEffetMagiqueReq
} from "./effetMagique.model";
import {IGetItemReq} from "../item/item.model";
import * as EffetMagiqueService from "./effetMagique.service";

/**
 * Get effet magique from id
 *
 * @param req IGetEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueById: RequestHandler = async (req: IGetEffetMagiqueReq, res: Response) => {
    try {

        const effetMagique = await EffetMagiqueService.getEffetMagiqueById(req.params.idEffetMagique);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagique);
    } catch (error) {
        console.error('[effetMagique.controller][getEffetMagiqueById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

// @ts-ignore
export const getCompleteEffetMagiqueById: RequestHandler = async (req: IGetEffetMagiqueReq, res: Response) => {
    try {

        const effetMagique = await EffetMagiqueService.getCompleteEffetMagiqueById(req.params.idEffetMagique);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagique);
    } catch (error) {
        console.error('[effetMagique.controller][getCompleteEffetMagiqueById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};


/**
 * Get all effet magique for an item, by item id
 *
 * @param req IGetItemReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllEffetMagiqueForItem: RequestHandler = async (req: IGetItemReq, res: Response) => {
    try {

        const effetMagiques = await EffetMagiqueService.getAllEffetMagiqueForItem(req.params.idObjet);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiques);
    } catch (error) {
        console.error('[effetMagique.controller][getAllEffetMagiqueForItem][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

// @ts-ignore
export const getAllCompleteEffetMagiqueForItem: RequestHandler = async (req: IGetItemReq, res: Response) => {
    try {

        const effetMagiques = await EffetMagiqueService.getAllCompleteEffetMagiqueForItem(req.params.idObjet);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiques);
    } catch (error) {
        console.error('[effetMagique.controller][getAllCompleteEffetMagiqueForItem][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new effet magique for an item
 *
 * @param req IAddEffetMagiqueReq
 * @param res Express Response
 */
export const addEffetMagique: RequestHandler = async (req: IAddEffetMagiqueReq, res: Response) => {
    try {
        const result = await EffetMagiqueService.addEffetMagique(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagique.controller][addEffetMagique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Add a new complete effet magique for an item, with all corresponding informations
 *
 * @param req IAddEffetMagiqueReq
 * @param res Express Response
 */
export const addCompleteEffetMagique: RequestHandler = async (req: IAddEffetMagiqueReq, res: Response) => {
    try {
        const result = await EffetMagiqueService.addCompleteEffetMagique(req.body);

        sendSpecialResponse(res,
            201,
            "Vous voulez vraiment m'encombrer avec tout ça ? ...",
            result);
    } catch (error) {
        console.error('[effetMagique.controller][addCompleteEffetMagique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique ul, based on id
 *
 * @param req IUpdateEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagique: RequestHandler = async (req: IUpdateEffetMagiqueReq, res: Response) => {
    try {
        const result = await EffetMagiqueService.updateEffetMagique({ ...req.body, idEffetMagique: req.params.idEffetMagique });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagique.controller][updateEffetMagique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an ul from effet magique, based on id
 *
 * @param req IDeleteEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagique: RequestHandler = async (req: IDeleteEffetMagiqueReq, res: Response) => {
    try {
        const result = await EffetMagiqueService.deleteEffetMagique(req.params.idEffetMagique);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[effetMagique.controller][deleteEffetMagique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
