import {Request, RequestHandler, Response} from "express";
import * as ProgressionService from "./progression.service";
import * as LevelService from "../level.service";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../../routes";
import {
    IAddProgressionReq,
    IDeleteProgressionReq,
    IGetProgressionForLevelReq,
    IUpdateProgressionReq
} from "./progression.model";

/**
 * Get all progressions for levels
 *
 * @param req IGetProgressionReq
 * @param res Express Response
 */
// @ts-ignore
export const getAllProgressions: RequestHandler = async (req: Request, res: Response) => {
    try {
        const progressions = await ProgressionService.getAllProgressions();

        sendSpecialResponse(res,
            200,
            "Vous avez devant vous le reste de votre vie. Et c'est déprimant.",
            progressions);
    } catch (error) {
        console.error('[progression.controller][getAllProgressions][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

/**
 * Get progression for a specific level
 *
 * @param req IGetProgressionForLevelReq
 * @param res Express Response
 */
// @ts-ignore
export const getProgressionForLevel: RequestHandler = async (req: IGetProgressionForLevelReq, res: Response) => {
    try {
        const progression = (await ProgressionService.getProgressionForLevel(req.params.niveau))[0];

        if (!progression) {
            sendSpecialResponse(res,
                400,
                "No progression defined for that level.",
                progression);
            return;
        }

        sendSpecialResponse(res,
            200,
            "Voilà comment vous êtes sensé vous développer. C'est pas fameux.",
            progression);
    } catch (error) {
        console.error('[progression.controller][getProgressionForLevel][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

/**
 * Add a new progression, for a level
 *
 * @param req IAddProgressionReq
 * @param res Express Response
 */
// @ts-ignore
export const addProgression: RequestHandler = async (req: IAddProgressionReq, res: Response) => {
    try {
        const existingProgression = (await ProgressionService.getProgressionForLevel(req.body.niveau));
        if (existingProgression.length > 0) {
            sendSpecialResponse(res,
                409,
                "Cette progression est déjà définie.",
                '');
            return
        }
        const result = await ProgressionService.addProgression(req.body);

        sendSpecialResponse(res,
            201,
            "Si vous pensez que ça peut les rendre meilleur, c'est illusoire !",
            result);
    } catch (error) {
        console.error('[progression.controller][getProgressionForLevel][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

/**
 * Update a progression, for a level
 *
 * @param req IUpdateProgressionReq
 * @param res Express Response
 */
// @ts-ignore
export const updateProgression: RequestHandler = async (req: IUpdateProgressionReq, res: Response) => {
    try {

        const result = await ProgressionService.updateProgression( {...req.body, niveau: req.params.niveau});

        sendSpecialResponse(res,
            200,
            "Ils n'en resteront pas moins des guignols !",
            result);
    } catch (error) {
        console.error('[progression.controller][updateProgression][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

/**
 * Delete a progression, for a level
 *
 * @param req IDeleteProgressionReq
 * @param res Express Response
 */
// @ts-ignore
export const deleteProgression: RequestHandler = async (req: IDeleteProgressionReq, res: Response) => {
    try {
        if (req.params.niveau < 2) {
            sendSpecialResponse(res,
                406,
                "You cannot delete progression for level 1, or lower.",
                '');
            return;
        }

        const highestLevel: number = (await LevelService.getHighestAffectedLevel())[0].highestLevel;
        if (highestLevel > req.params.niveau) {
            sendSpecialResponse(res,
                406,
                "You cannot delete this progression, someone has a level too high for that.",
                '');
            return;
        }

        const result = await ProgressionService.deleteProgression(req.params.niveau);

        const statistiques = await LevelService.getAllStatistiquesByLevel(req.params.niveau);
        const resultStatistiquesDeleted = await LevelService.deleteAllStatistiquesForLevel(req.params.niveau);

        const affectedPersonnagesWithThatSpecificLevel = await LevelService.getAllPersonnageOfThatLevel(req.params.niveau);
        for (let affectedPersonnage of affectedPersonnagesWithThatSpecificLevel) {
            await LevelService.convertLevelIntoNiveauEnAttente(affectedPersonnage.idPersonnage);
        }

        if (statistiques.length !== resultStatistiquesDeleted.affectedRows) {
            sendSpecialResponse(res,
                500,
                "Progression deletion ok, but incoherent state. Statistiques for that level ("+req.params.niveau+") still exists.",
                '');
            return;
        }

        sendSpecialResponse(res,
            200,
            "Ils n'avaient déjà pas d'avenir, c'est sadique de faire ça ! J'aime bien.",
            result);
    } catch (error) {
        console.error('[progression.controller][updateProgression][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};
