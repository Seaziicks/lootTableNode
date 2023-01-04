import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";
import {RequestHandler,Response} from "express";
import * as CompetenceContenuService from "./competenceContenu.services";
import {IGetAllCompetenceContenuReq} from "./competenceContenu.model";

/**
 * Get competence contenu from id
 *
 * @param req IGetCompetenceContenuReq
 * @param res Express Response
 */

// @ts-ignore
export const getCompetenceContenuById: RequestHandler = async (req: IGetCompetenceContenuReq, res: Response) => {
    try {

        const competenceContenu = await CompetenceContenuService.getCompetenceContenuById(req.params.idCompetenceContenu);

        sendSpecialResponse(res,
            200,
            "Rarf ...",
            competenceContenu);
    } catch (error) {
        console.error('[competenceContenu.controller][getCompetenceContenu][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get all competence contenu, for a competence by idCompetence
 *
 * @param req IGetAllCompetenceContenuReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllCompetenceContenusForCompetenceByidCompetence: RequestHandler = async (req: IGetAllCompetenceContenuReq, res: Response) => {
    try {

        const competenceContenu = await CompetenceContenuService.getAllCompetenceContenusForCompetenceByidCompetence(req.params.idCompetence);

        sendSpecialResponse(res,
            200,
            "Au moins, vous saurez presque tout sur ce mystérieux effet.",
            competenceContenu);
    } catch (error) {
        console.error('[competenceContenu.controller][getAllCompetenceContenuForItemByAPersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
}

/**
 * Add a new competence contenu, for a competence
 *
 * @param req IAddCompetenceContenuReq
 * @param res Express Response
 */
// @ts-ignore
export const addCompetenceContenu: RequestHandler = async (req: IAddCompetenceContenuReq, res: Response) => {
    try {
        const result = await CompetenceContenuService.addCompetenceContenu(req.body);

        sendSpecialResponse(res,
            201,
            "Pas sûr que j'en avais besoin, mais si ça vous fait plaisir ... je vais le mettre là, hein !",
            result);
    } catch (error) {
        console.error('[competenceContenu.controller][addCompetenceContenu][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Update an existing competence contenu, based on id
 *
 * @param req IUpdateCompetenceContenuReq
 * @param res Express Response
 */
// @ts-ignore
export const updateCompetenceContenu: RequestHandler = async (req: IUpdateCompetenceContenuReq, res: Response) => {
    try {
        const result = await CompetenceContenuService.updateCompetenceContenu({ ...req.body, idCompetenceContenu: req.params.idCompetenceContenu });

        sendSpecialResponse(res,
            200,
            "Tout ça pour une typo ? Eh bah, je vous dis pas l'empreinte carbone de la faute !",
            result);
    } catch (error) {
        console.error('[competenceContenu.controller][updateCompetenceContenu][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete a competence contenu, base on id
 *
 * @param req IDeleteCompetenceContenuReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteCompetenceContenu: RequestHandler = async (req: IDeleteCompetenceContenuReq, res: Response) => {
    try {
        const result = await CompetenceContenuService.deleteCompetenceContenu(req.params.idCompetenceContenu);

        sendSpecialResponse(res,
            200,
            "En même temps, ça ne voulait rien dire.",
            result);
    } catch (error) {
        console.error('[competenceContenu.controller][deleteCompetenceContenu][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
