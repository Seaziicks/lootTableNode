import {RequestHandler, Response} from "express";
import {IGetPersonnageReq} from "../personnage.model";
import * as StatistiqueService from "./statistique.service";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";
import {IAddStatistiqueReq, IDeleteStatistiqueReq, IUpdateStatistiqueReq} from "./statistique.model";


/**
 * Get personnage statistics, all summed, base on personnage id
 *
 * @param req IGetPersonnageReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllSummedStatistiquesForPersonnageFromPersonnageId: RequestHandler = async (req: IGetPersonnageReq, res: Response) => {
    try {
        const statistiques = await StatistiqueService.getAllSummedStatistiquesForPersonnageFromPersonnageId(req.params.idPersonnage);

        sendSpecialResponse(res,
            200,
            "Voici le résumé rapide de ce qu'il peut faire. Et on voit vite qu'il ne sera pas très utile.",
            statistiques);
    } catch (error) {
        console.log(error);
        console.error('[personnage.controller][getPersonnageWithDetailedStatistiquesById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

/**
 * Add a statistique
 *
 * @param req IAddStatistiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const addStatistique: RequestHandler = async (req: IAddStatistiqueReq, res: Response) => {
    try {
        const result = await StatistiqueService.addStatistique(req.body);

        sendSpecialResponse(res,
            201,
            "Même avec ça, il restera inutile.",
            result);
    } catch (error) {
        console.error('[statistique.controller][addStatistique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new statistique");
    }
};

/**
 * Update an existing statistique, based on id
 *
 * @param req IUpdateStatistiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const updateStatistique: RequestHandler = async (req: IUpdateStatistiqueReq, res: Response) => {
    try {
        const result = await StatistiqueService.updateStatistique(req.body);

        sendSpecialResponse(res,
            200,
            "Comme si ça allait changer quelque chose ...",
            result);
    } catch (error) {
        console.error('[statistique.controller][updateStatistique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Delete an statistique, base on id
 *
 * @param req IDeleteStatistiqueReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteStatistique: RequestHandler = async (req: IDeleteStatistiqueReq, res: Response) => {
    try {
        const result = await StatistiqueService.deleteStatistique(req.body);

        sendSpecialResponse(res,
            200,
            "De toute façon, il ne servait à rien, donc bon.",
            result);
    } catch (error) {
        console.error('[statistique.controller][deleteStatistique][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};
