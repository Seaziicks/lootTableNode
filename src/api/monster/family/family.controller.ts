import {Request, RequestHandler, Response} from "express";
import * as MonsterFamilyService from "./family.services";
import * as MonsterService from "../monster.services";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";
import {
    IAddMonsterFamilyReq,
    IDeleteMonsterFamilyReq,
    IGetMonsterFamilyReq,
    IUpdateMonsterFamilyReq
} from "./family.model";

/**
 * Get all monster families
 *
 * @param req IGetMonsterFamilyReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllMonsterFamilies: RequestHandler = async (req: Request, res: Response) => {
    try {

        const monsterFamilies = await MonsterFamilyService.getAllMonsterFamilies();

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            monsterFamilies);
    } catch (error) {
        console.error('[monsterFamily.controller][getAllMonsterFamilies][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all monster families, and all monsters associated
 *
 * @param req IGetMonsterFamilyReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllCompleteMonstersFamilies: RequestHandler = async (req: Request, res: Response) => {
    try {

        const monstersFamilies = await MonsterFamilyService.getAllMonsterFamilies();

        for (let family of monstersFamilies) {
            family.members = await MonsterService.getAllMonstersFromFamily(family.idFamilleMonstre);
        }

        monstersFamilies.push({idFamilleMonstre: -1, libelle: "", members: await MonsterService.getAllMonstersWithoutFamily()})

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            monstersFamilies);
    } catch (error) {
        console.error('[monsterFamily.controller][getAllCompleteMonstersFamilies][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get monster family from id
 *
 * @param req IGetMonsterFamilyReq
 * @param res Express Response
 */
// @ts-ignore
export const getMonsterFamilyById: RequestHandler = async (req: IGetMonsterFamilyReq, res: Response) => {
    try {

        const monsterFamily = (await MonsterFamilyService.getMonsterFamilyById(req.params.idFamilleMonstre))[0];

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            monsterFamily);
    } catch (error) {
        console.error('[monsterFamily.controller][getMonsterFamilyById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get completes monster families, from family id
 *
 * @param req IGetMonsterFamilyReq
 * @param res Express Response
 */
// @ts-ignore
export const getCompleteMonsterFamilyById: RequestHandler = async (req: IGetMonsterFamilyReq, res: Response) => {
    try {

        const monsterFamily = (await MonsterFamilyService.getMonsterFamilyById(req.params.idFamilleMonstre))[0];

        monsterFamily.members = await MonsterService.getAllMonstersFromFamily(monsterFamily.idFamilleMonstre);

        sendSpecialResponse(res,
            200,
            "Alors, ça vous plait ? Moi oui !",
            monsterFamily);
    } catch (error) {
        console.error('[monsterFamily.controller][getCompleteMonsterFamilyById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Add a new family for monsters
 *
 * @param req IAddMonsterFamilyReq
 * @param res Express Response
 */
export const addMonsterFamily: RequestHandler = async (req: IAddMonsterFamilyReq, res: Response) => {
    try {
        const result = await MonsterFamilyService.addMonsterFamily(req.body);

        sendSpecialResponse(res,
            201,
            "C'est toujours un plaisir de pimenter le jeu !",
            result);
    } catch (error) {
        console.error('[monsterFamily.controller][addMonsterFamily][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing monster family, based on id
 *
 * @param req IUpdateMonsterFamilyReq
 * @param res Express Response
 */
// @ts-ignore
export const updateMonsterFamilyById: RequestHandler = async (req: IUpdateMonsterFamilyReq, res: Response) => {
    try {
        const result = await MonsterFamilyService.updateMonsterFamilyById({ ...req.body, idFamilleMonstre: req.params.idFamilleMonstre });

        sendSpecialResponse(res,
            200,
            "J'espère que c'est pire qu'avant, sinon c'est pas marrant ! ",
            result);
    } catch (error) {
        console.error('[monsterFamily.controller][updateMonsterFamilyById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete a monster family, base on id
 *
 * @param req IDeleteMonsterFamilyReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteMonsterFamilyById: RequestHandler = async (req: IDeleteMonsterFamilyReq, res: Response) => {
    try {
        const result = await MonsterFamilyService.deleteMonsterFamilyById(req.params.idFamilleMonstre);

        sendSpecialResponse(res,
            200,
            "Ah, c'est bien dommage ça ...",
            result);
    } catch (error) {
        console.error('[monsterFamily.controller][deleteMonsterFamilyById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
