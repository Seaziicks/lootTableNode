import {RequestHandler, Response} from "express";
import * as MonsterService from "./monster.services";
import {
    IAddMonsterReq,
    IDeleteMonsterReq, IGetAllMonstersForFamilyReq,
    IGetMonsterReq,
    IUpdateMonsterReq
} from "./monster.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";

/**
 * Get all monsters for a family
 *
 * @param req IGetAllMonstersForFamilyReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllMonstersFromFamily: RequestHandler = async (req: IGetAllMonstersForFamilyReq, res: Response) => {
    try {

        const monsters = await MonsterService.getAllMonstersFromFamily(req.params.idFamilleMonstre);

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            monsters);
    } catch (error) {
        console.error('[monster.controller][getAllMonster][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};


/**
 * Get a monster from id
 *
 * @param req IGetMonsterReq
 * @param res Express Response
 */
// @ts-ignore
export const getMonsterById: RequestHandler = async (req: IGetMonsterReq, res: Response) => {
    try {

        const monster = (await MonsterService.getMonsterById(req.params.idMonstre))[0];

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            monster);
    } catch (error) {
        console.error('[monster.controller][getMonsterById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Add a new monster
 *
 * @param req IAddMonsterReq
 * @param res Express Response
 */
export const addMonster: RequestHandler = async (req: IAddMonsterReq, res: Response) => {
    try {
        const result = await MonsterService.addMonster(req.body);

        sendSpecialResponse(res,
            201,
            "C'est toujours un plaisir de pimenter le jeu !",
            result);
    } catch (error) {
        console.error('[monster.controller][addMonster][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing monster, based on id
 *
 * @param req IUpdateMonsterReq
 * @param res Express Response
 */
// @ts-ignore
export const updateMonsterById: RequestHandler = async (req: IUpdateMonsterReq, res: Response) => {
    try {
        const result = await MonsterService.updateMonsterById({ ...req.body, idMonstre: req.params.idMonstre });

        sendSpecialResponse(res,
            200,
            "J'espère que c'est pire qu'avant, sinon c'est pas marrant ! ",
            result);
    } catch (error) {
        console.error('[monster.controller][updateMonsterById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete a monster, base on id
 *
 * @param req IDeleteMonsterReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteMonsterById: RequestHandler = async (req: IDeleteMonsterReq, res: Response) => {
    try {
        const result = await MonsterService.deleteMonsterById(req.params.idMonstre);

        sendSpecialResponse(res,
            200,
            "Ah, c'est bien dommage ça ...",
            result);
    } catch (error) {
        console.error('[monster.controller][deleteMonsterById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
