import {
    IAddEffetMagiqueUlReq,
    IDeleteEffetMagiqueUlReq,
    IGetEffetMagiqueUlReq,
    IUpdateEffetMagiqueUlReq
} from "./effetMagiqueUl.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";
import {RequestHandler,Response} from "express";
import {IGetEffetMagiqueReq} from "../effetMagique.model";
import * as EffetMagiqueUlService from "./effetMagiqueUl.services";

/**
 * Get effet magique ul from id
 *
 * @param req IGetEffetMagiqueUlReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueUlById: RequestHandler = async (req: IGetEffetMagiqueUlReq, res: Response) => {
    try {

        const effetMagiqueUl = await EffetMagiqueUlService.getEffetMagiqueUlById(req.params.idEffetMagiqueUl);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagiqueUl);
    } catch (error) {
        console.error('[effetMagiqueUl.controller][getEffetMagiqueUlById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all uls for an effet magique, by effet magique id
 *
 * @param req IGetEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllUlForEffetMagique: RequestHandler = async (req: IGetEffetMagiqueReq, res: Response) => {
    try {

        const effetMagiqueUl = await EffetMagiqueUlService.getAllUlForEffetMagique(req.params.idEffetMagique);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueUl);
    } catch (error) {
        console.error('[effetMagiqueUl.controller][getAllUlForEffetMagique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new ul for an effet magique
 *
 * @param req IAddEffetMagiqueUlReq
 * @param res Express Response
 */
export const addEffetMagiqueUl: RequestHandler = async (req: IAddEffetMagiqueUlReq, res: Response) => {
    try {
        const result = await EffetMagiqueUlService.addEffetMagiqueUl(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagiqueUl.controller][addEffetMagiqueUl][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Add a new complete ul for an effet magique, with all corresponding ul content
 *
 * @param req IAddEffetMagiqueUlReq
 * @param res Express Response
 */
export const addCompleteEffetMagiqueUl: RequestHandler = async (req: IAddEffetMagiqueUlReq, res: Response) => {
    try {
        const result = await EffetMagiqueUlService.addCompleteEffetMagiqueUl(req.body);

        sendSpecialResponse(res,
            201,
            "Vous voulez vraiment m'encombrer avec tout ça ? ...",
            result);
    } catch (error) {
        console.error('[effetMagiqueUl.controller][addCompleteEffetMagiqueUl][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique ul, based on id
 *
 * @param req IUpdateEffetMagiqueUlReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueUl: RequestHandler = async (req: IUpdateEffetMagiqueUlReq, res: Response) => {
    try {
        const result = await EffetMagiqueUlService.updateEffetMagiqueUl({ ...req.body, idEffetMagiqueUl: req.params.idEffetMagiqueUl });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagiqueUl.controller][updateEffetMagiqueUl][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an ul from effet magique, based on id
 *
 * @param req IDeleteEffetMagiqueUlReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueUl: RequestHandler = async (req: IDeleteEffetMagiqueUlReq, res: Response) => {
    try {
        const result = await EffetMagiqueUlService.deleteEffetMagiqueUl(req.params.idEffetMagiqueUl);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[effetMagiqueUl.controller][deleteEffetMagiqueUl][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
