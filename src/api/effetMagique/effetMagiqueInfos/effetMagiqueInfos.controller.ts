import {RequestHandler, Response} from "express";
import * as EffetMagiqueInfosService from "./effetMagiqueInfos.services";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";
import {
    IAddEffetMagiqueInfoReq,
    IDeleteEffetMagiqueInfoReq,
    IGetEffetMagiqueInfoReq,
    IUpdateEffetMagiqueInfoReq
} from "./effetMagiqueInfos.model";
import {IGetEffetMagiqueReq} from "../effetMagique.model";

/**
 * Get effet magique infos from id
 *
 * @param req IGetEffetMagiqueInfoReq
 * @param res Express Response
 */
// @ts-ignore
export const getEffetMagiqueInfoById: RequestHandler = async (req: IGetEffetMagiqueInfoReq, res: Response) => {
    try {

        const effetMagiqueInfos = await EffetMagiqueInfosService.getEffetMagiqueInfosById(req.params.idEffetMagiqueInfos);

        sendSpecialResponse(res,
            200,
            "Je ne sais pas si ça vous sera utile, mais prenez le, ça m'en débarassera !",
            effetMagiqueInfos);
    } catch (error) {
        console.error('[effetMagiqueInfos.controller][getEffetMagiqueInfoById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all infos for an effet magique, by effet magique id
 *
 * @param req IGetEffetMagiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllInfosForEffetMagique: RequestHandler = async (req: IGetEffetMagiqueReq, res: Response) => {
    try {

        const effetMagiqueInfos = await EffetMagiqueInfosService.getAllInfosForEffetMagique(req.params.idEffetMagique);

        sendSpecialResponse(res,
            200,
            "Tout ça ?! Eh bien, ils ne savaient plus quoi écrire.",
            effetMagiqueInfos);
    } catch (error) {
        console.error('[effetMagiqueInfos.controller][getAllInfosForEffetMagique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new description for an effet magique
 *
 * @param req IAddEffetMagiqueInfoReq
 * @param res Express Response
 */
export const addEffetMagiqueInfos: RequestHandler = async (req: IAddEffetMagiqueInfoReq, res: Response) => {
    try {
        const result = await EffetMagiqueInfosService.addEffetMagiqueInfos(req.body);

        sendSpecialResponse(res,
            201,
            "C'est comme garder de vieux journaux locaux.",
            result);
    } catch (error) {
        console.error('[effetMagiqueInfos.controller][addEffetMagiqueInfos][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing effet magique description, based on id
 *
 * @param req IUpdateEffetMagiqueInfoReq
 * @param res Express Response
 */
// @ts-ignore
export const updateEffetMagiqueInfos: RequestHandler = async (req: IUpdateEffetMagiqueInfoReq, res: Response) => {
    try {
        const result = await EffetMagiqueInfosService.updateEffetMagiqueInfos({ ...req.body, idEffetMagiqueInfos: req.params.idEffetMagiqueInfos });

        sendSpecialResponse(res,
            200,
            "Si ça vous fait plaisir de corriger des idiotie par des inepties, faîtes vous plaisir !",
            result);
    } catch (error) {
        console.error('[effetMagiqueInfos.controller][updateEffetMagiqueInfos][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Inserts a new item record based
 *
 * @param req IDeleteEffetMagiqueInfoReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteEffetMagiqueInfos: RequestHandler = async (req: IDeleteEffetMagiqueInfoReq, res: Response) => {
    try {
        const result = await EffetMagiqueInfosService.deleteEffetMagiqueInfos(req.params.idEffetMagiqueInfos);

        sendSpecialResponse(res,
            200,
            "C'est pas trop tôt !",
            result);
    } catch (error) {
        console.error('[effetMagiqueInfos.controller][deleteEffetMagiqueInfos][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
