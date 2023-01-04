import {
    IAddEffetMagiqueDecouvertReq,
    IDeleteEffetMagiqueDecouvertReq,
    IGetAllEffetMagiqueDecouvertReq, IGetEffetMagiqueDecouvertReq,
    IUpdateEffetMagiqueDecouvertReq
} from "./effetMagiqueDecouvert.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";
import {RequestHandler,Response} from "express";
import * as EffetMagiqueDecouvertService from "./effetMagiqueDecouvert.services";

/**
 * Get effet magique decouvert from id
 *
 * @param req IGetEffetMagiqueDecouvertReq
 * @param res Express Response
 */

// @ts-ignore
export const getEffetMagiqueDecouvertById: RequestHandler = async (req: IGetEffetMagiqueDecouvertReq, res: Response) => {
    try {

        const effetMagiqueDecouvert = (await EffetMagiqueDecouvertService.getEffetMagiqueDecouvertById(req.params.idEffetMagiqueDecouvert))[0];

        if (effetMagiqueDecouvert.idPersonnage !== res.locals.token.idPersonnage && !res.locals.token.isGameMaster && res.locals.token.isAdmin) {
            sendSpecialResponse(res,
                406,
                "Ce doit être la personne qui a écrite cette informations, pas vous !",
                '');
            return;
        }

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            effetMagiqueDecouvert);
    } catch (error) {
        console.error('[effetMagiqueDecouvert.controller][getEffetMagiqueDecouvert][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all effet magique decouvert for an item, by a personnage
 *
 * @param req IGetAllEffetMagiqueDecouvertReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllEffetMagiqueDecouvertForItemByAPersonnage: RequestHandler = async (req: IGetAllEffetMagiqueDecouvertReq, res: Response) => {
    try {

        const effetMagiqueDecouvert = await EffetMagiqueDecouvertService.getAllEffetMagiqueDecouvertForItemByAPersonnage(req.params.idPersonnage, req.params.idObjet);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueDecouvert);
    } catch (error) {
        console.error('[effetMagiqueDecouvert.controller][getAllEffetMagiqueDecouvertForItemByAPersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Get all effet magique decouvert for an item
 *
 * @param req IGetAllEffetMagiqueDecouvertReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllEffetMagiqueDecouvertForItem: RequestHandler = async (req: IGetAllEffetMagiqueDecouvertReq, res: Response) => {
    try {

        const effetMagiqueDecouvert = await EffetMagiqueDecouvertService.getAllEffetMagiqueDecouvertForItem(req.params.idObjet);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            effetMagiqueDecouvert);
    } catch (error) {
        console.error('[effetMagiqueDecouvert.controller][getAllEffetMagiqueDecouvertForItem][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new effet magique decouvert for an item by a personnage
 *
 * @param req IAddEffetMagiqueDecouvertReq
 * @param res Express Response
 */
// @ts-ignore
export const addEffetMagiqueDecouvert: RequestHandler = async (req: IAddEffetMagiqueDecouvertReq, res: Response) => {
    try {

        if (req.body.idPersonnage !== res.locals.token.idPersonnage && !res.locals.token.isGameMaster && res.locals.token.isAdmin) {
            sendSpecialResponse(res,
                406,
                "N'essayez pas de le bercer d'illusions ...",
                '');
            return;
        }

        const result = await EffetMagiqueDecouvertService.addEffetMagiqueDecouvert(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[effetMagiqueDecouvert.controller][addEffetMagiqueDecouvert][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique decouvert, based on id
 *
 * @param req IUpdateEffetMagiqueDecouvertReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueDecouvert: RequestHandler = async (req: IUpdateEffetMagiqueDecouvertReq, res: Response) => {
    try {

        const effetMagiqueDecouvert = (await EffetMagiqueDecouvertService.getEffetMagiqueDecouvertById(req.params.idEffetMagiqueDecouvert))[0];

        if (effetMagiqueDecouvert.idPersonnage !== res.locals.token.idPersonnage && !res.locals.token.isGameMaster && res.locals.token.isAdmin) {
            sendSpecialResponse(res,
                406,
                "Vous voulez modifier ses croyances ? Je ne vous en laisse pas le droit.",
                '');
            return;
        }

        const result = await EffetMagiqueDecouvertService.updateEffetMagiqueDecouvert({ ...req.body, idEffetMagiqueDecouvert: req.params.idEffetMagiqueDecouvert });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[effetMagiqueDecouvert.controller][updateEffetMagiqueDecouvert][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an effet magique decouvert, base on id
 *
 * @param req IDeleteEffetMagiqueDecouvertReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueDecouvert: RequestHandler = async (req: IDeleteEffetMagiqueDecouvertReq, res: Response) => {
    try {

        const effetMagiqueDecouvert = (await EffetMagiqueDecouvertService.getEffetMagiqueDecouvertById(req.params.idEffetMagiqueDecouvert))[0];

        if (effetMagiqueDecouvert.idPersonnage !== res.locals.token.idPersonnage && !res.locals.token.isGameMaster && res.locals.token.isAdmin) {
            sendSpecialResponse(res,
                406,
                "N'essayez pas de le bercer d'illusions ...",
                '');
            return;
        }
        const result = await EffetMagiqueDecouvertService.deleteEffetMagiqueDecouvert(req.params.idEffetMagiqueDecouvert);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[effetMagiqueDecouvert.controller][deleteEffetMagiqueDecouvert][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
