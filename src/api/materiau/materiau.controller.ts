import {RequestHandler, Response} from "express";
import {IAddMateriauReq, IDeleteMateriauReq, IGetMateriauReq, IUpdateMateriauReq} from "./materiau.model";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";
import * as MateriauService from './materiau.service';


/**
 * Get materiau by id
 *
 * @param req IGetMateriauReq
 * @param res Express Response
 */
// @ts-ignore
export const getMateriauById: RequestHandler = async (req: IGetMateriauReq, res: Response) => {
    try {

        const materiau = await MateriauService.getMateriauById(req.params.idMateriaux);

        sendSpecialResponse(res,
            200,
            "Regardez comme c'est magnifique !",
            materiau);
    } catch (error) {
        console.error('[materiau.controller][getMateriauById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all materiaux
 *
 * @param req IGetMateriauReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllMateriau: RequestHandler = async (req: IGetMateriauReq, res: Response) => {
    try {

        const materiaux = await MateriauService.getAllMateriaux();

        sendSpecialResponse(res,
            200,
            "Si vous arrivez à faire quelque chose avec tout ça, chapeau !",
            materiaux);
    } catch (error) {
        console.error('[materiau.controller][getAllMateriau][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Add a new materiau
 *
 * @param req IAddMateriauReq
 * @param res Express Response
 */
export const addMateriau: RequestHandler = async (req: IAddMateriauReq, res: Response) => {
    try {
        const result = await MateriauService.addMateriau(req.body);

        sendSpecialResponse(res,
            201,
            "Oh woaw ! Ça existe ce genre de choses ?!",
            result);
    } catch (error) {
        console.error('[materiau.controller][addMateriau][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing materiau, based on id
 *
 * @param req IUpdateMateriauReq
 * @param res Express Response
 */
// @ts-ignore
export const updateMateriau: RequestHandler = async (req: IUpdateMateriauReq, res: Response) => {
    try {
        const result = await MateriauService.updateMateriau({ ...req.body, idMateriaux: req.params.idMateriaux });

        sendSpecialResponse(res,
            200,
            "Je me disais, aussi.",
            result);
    } catch (error) {
        console.error('[materiau.controller][updateMateriau][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an materiau, base on id
 *
 * @param req IDeleteMateriauReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteMateriau: RequestHandler = async (req: IDeleteMateriauReq, res: Response) => {
    try {
        const result = await MateriauService.deleteMateriau(req.params.idMateriaux);

        sendSpecialResponse(res,
            200,
            "Ah, c'est bien dommage ça ...",
            result);
    } catch (error) {
        console.error('[materiau.controller][deleteMateriau][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
