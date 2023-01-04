import {RequestHandler, Response} from "express";
import * as DropChanceService from "./dropChance.services";
import {
    IAddDropChanceReq, IAddMultipleDropChanceReq,
    IDeleteDropChanceReq, IDeleteMultipleDropChancesReq, IGetAllDropChancesForMonsterReq,
    IGetDropChanceReq,
    IUpdateDropChanceReq, IUpdateMultipleDropChancesReq
} from "./dropChance.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";

/**
 * Get all dropChances for a family
 *
 * @param req IGetAllDropChancesForMonsterReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllDropChancesForMonsterByidMonstre: RequestHandler = async (req: IGetAllDropChancesForMonsterReq, res: Response) => {
    try {

        const dropChances = await DropChanceService.getAllDropChancesForMonsterByidMonstre(req.params.idMonstre);

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            dropChances);
    } catch (error) {
        console.error('[dropChance.controller][getAllDropChanceForMonsterByidMonstre][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};


/**
 * Get a dropChance from id
 *
 * @param req IGetDropChanceReq
 * @param res Express Response
 */
// @ts-ignore
export const getDropChanceByidMonstreAndRoll: RequestHandler = async (req: IGetDropChanceReq, res: Response) => {
    try {

        const dropChance = (await DropChanceService.getDropChanceByidMonstreAndRoll(req.params.idMonstre, req.params.roll))[0];

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            dropChance);
    } catch (error) {
        console.error('[dropChance.controller][getDropChanceById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Add a new dropChance
 *
 * @param req IAddDropChanceReq
 * @param res Express Response
 */
export const addDropChance: RequestHandler = async (req: IAddDropChanceReq, res: Response) => {
    try {
        const result = await DropChanceService.addDropChance(req.body);

        sendSpecialResponse(res,
            201,
            "C'est toujours un plaisir de pimenter le jeu !",
            result);
    } catch (error) {
        console.error('[dropChance.controller][addDropChance][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Add a new dropChance
 *
 * @param req IAddDropChanceReq
 * @param res Express Response
 */
export const addMultipleDropChances: RequestHandler = async (req: IAddMultipleDropChanceReq, res: Response) => {
    try {
        console.log(req);
        const result = await DropChanceService.addMultipleDropChances(req.body);
        console.log(result);

        sendSpecialResponse(res,
            201,
            "C'est toujours un plaisir de pimenter le jeu !",
            result);
    } catch (error) {
        console.error('[dropChance.controller][addMultipleDropChances][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing dropChance, based on id
 *
 * @param req IUpdateDropChanceReq
 * @param res Express Response
 */
// @ts-ignore
export const updateDropChanceByidMonstreAndRoll: RequestHandler = async (req: IUpdateDropChanceReq, res: Response) => {
    try {
        const result = await DropChanceService.updateDropChanceByidMonstreAndRoll({ ...req.body, idMonstre: req.params.idMonstre, roll: req.params.roll });

        sendSpecialResponse(res,
            200,
            "J'espère que c'est pire qu'avant, sinon c'est pas marrant ! ",
            result);
    } catch (error) {
        console.error('[dropChance.controller][updateDropChanceByidMonstreAndRoll][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing dropChance, based on id
 *
 * @param req IUpdateDropChanceReq
 * @param res Express Response
 */
// @ts-ignore
export const updateMultipleDropChancesByidMonstreAndRoll: RequestHandler = async (req: IUpdateMultipleDropChancesReq, res: Response) => {
    try {
        const result = await DropChanceService.updateMultipleDropChancesByidMonstreAndRoll(req.body);

        sendSpecialResponse(res,
            200,
            "J'espère que c'est pire qu'avant, sinon c'est pas marrant ! ",
            result);
    } catch (error) {
        console.error('[dropChance.controller][updateMultipleDropChancesByidMonstreAndRoll][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete a dropChance, base on id
 *
 * @param req IDeleteDropChanceReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteDropChanceByidMonstreAndRoll: RequestHandler = async (req: IDeleteDropChanceReq, res: Response) => {
    try {
        const result = await DropChanceService.deleteDropChanceByidMonstreAndRoll(req.params.idMonstre, req.params.roll);

        sendSpecialResponse(res,
            200,
            "Ah, c'est bien dommage ça ...",
            result);
    } catch (error) {
        console.error('[dropChance.controller][deleteDropChanceById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete a dropChance, base on id
 *
 * @param req IDeleteDropChanceReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteMultipleDropChancesByidMonstreAndMultipleRolls: RequestHandler = async (req: IDeleteMultipleDropChancesReq, res: Response) => {
    try {
        const rolls = [];
        for (let dropChance of req.body) {
            rolls.push(dropChance.roll);
        }
        // https://stackoverflow.com/questions/8899802/how-do-i-do-a-bulk-insert-in-mysql-using-node-js
        const result = await DropChanceService.deleteMultipleDropChancesByidMonstreAndMultipleRolls(req.params.idMonstre, rolls);

        sendSpecialResponse(res,
            200,
            "Ah, c'est bien dommage ça ...",
            result);
    } catch (error) {
        console.error('[dropChance.controller][deleteDropChanceById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
