import {RequestHandler, Response} from "express";
import * as LootService from "./loot.services";
import {
    IGetLootReq,
    IUpdateLootReq
} from "./loot.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";

/**
 * Get all loots
 *
 * @param req IGetLootReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllLoots: RequestHandler = async (req: IGetLootReq, res: Response) => {
    try {

        const loots = await LootService.getAllLoots();

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            loots);
    } catch (error) {
        console.error('[loot.controller][getAllLoots][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};


/**
 * Get a loot from id
 *
 * @param req IGetLootReq
 * @param res Express Response
 */
// @ts-ignore
export const getLootById: RequestHandler = async (req: IGetLootReq, res: Response) => {
    try {

        const loot = (await LootService.getLootById(req.params.idLoot))[0];

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            loot);
    } catch (error) {
        console.error('[loot.controller][getLootById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Update an existing loot, based on id
 *
 * @param req IUpdateLootReq
 * @param res Express Response
 */
// @ts-ignore
export const updateLootById: RequestHandler = async (req: IUpdateLootReq, res: Response) => {
    try {
        const result = await LootService.updateLootById({ ...req.body, idLoot: req.params.idLoot });

        sendSpecialResponse(res,
            200,
            "J'espère que c'est pire qu'avant, sinon c'est pas marrant ! ",
            result);
    } catch (error) {
        console.error('[loot.controller][updateLootById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

