import {RequestHandler, Response} from "express";
import {IGetPersonnageReq, IPersonnage} from "../personnage.model";
import * as LevelService from "./level.services";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../../routes";
import {
    getNaturalManaFromPersonnageAndLevel,
    getNaturalVitalityFromPersonnageAndLevel,
    getNbStatistiquesForLevel,
    ILevelUpReq,
    IRemoveLevelReq,
    IUpdateWaitingLevelReq,
    Level
} from "./level.model";
import * as PersonnageService from "../personnage.services";
import {IProgression} from "./progression/progression.model";
import * as ProgressionService from "./progression/progression.services";
import Personnage from "../../../../models/Personnage";


/**
 * Get detailed levels, for a personnage, base on personnage id
 *
 * @param req IGetPersonnageReq
 * @param res Express Response
 */
// @ts-ignore
export const getDetailedLevelsForPersonnageFromPersonnageId: RequestHandler = async (req: IGetPersonnageReq, res: Response) => {
    try {
        const levels = await LevelService.getDetailedLevelsForPersonnageFromPersonnageId(req.params.idPersonnage);

        sendSpecialResponse(res,
            200,
            "Oh je vois que monsieur est un connaisseur ! Voici toutes les transactions sur vos statistiques.",
            levels);
    } catch (error) {
        console.log(error);
        console.error('[level.controller][getDetailedLevelsForPersonnageFromPersonnageId][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching detailed levels for personnage");
    }
};

/**
 * Update niveau en attente for personnage
 *
 * @param req IUpdateWaitingLevelReq
 * @param res Express Response
 */
// @ts-ignore
export const updateNiveauEnAttente: RequestHandler = async (req: IUpdateWaitingLevelReq, res: Response) => {
    try {
        const result = await LevelService.updateNiveauEnAttente(req.params.idPersonnage, req.body.levelGap);

        sendSpecialResponse(res,
            200,
            "On a changé quelque chose pour vous. Bon courage pour savoir quoi.",
            result);
    } catch (error) {
        console.log(error);
        console.error('[level.controller][updateNiveauEnAttente][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when update niveau en attente for personnage");
    }
};

/**
 * Add one niveau en attente for personnage
 *
 * @param req IUpdateWaitingLevelReq
 * @param res Express Response
 */
// @ts-ignore
export const addOneNiveauEnAttente: RequestHandler = async (req: IUpdateWaitingLevelReq, res: Response) => {
    try {
        const result = await LevelService.addOneNiveauEnAttente(req.params.idPersonnage);

        sendSpecialResponse(res,
            200,
            "Et 1 niveau pour la table n°" + req.params.idPersonnage +" , 1 !",
            result);
    } catch (error) {
        console.log(error);
        console.error('[level.controller][addOneNiveauEnAttente][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding one level to personnage");
    }
};

/**
 * Remove one niveau en attente for personnage
 *
 * @param req IUpdateWaitingLevelReq
 * @param res Express Response
 */
// @ts-ignore
export const removeOneNiveauEnAttente: RequestHandler = async (req: IUpdateWaitingLevelReq, res: Response) => {
    try {
        const result = await LevelService.removeOneNiveauEnAttente(req.params.idPersonnage);

        sendSpecialResponse(res,
            200,
            "Oupsy ! De toute façon, vous ne l'aviez même pas utilisé.",
            result);
    } catch (error) {
        console.log(error);
        console.error('[level.controller][removeOneNiveauEnAttente][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when removing one level for personnage");
    }
};

/**
 * Remove one niveau for personnage
 *
 * @param req IUpdateWaitingLevelReq
 * @param res Express Response
 */
// @ts-ignore
export const removeOneNiveau: RequestHandler = async (req: IRemoveLevelReq, res: Response) => {
    try {
        const personnage: IPersonnage = (await PersonnageService.getPersonnageById(req.params.idPersonnage))[0];

        let result;
        if (personnage.niveauEnAttente > 0) {
            result = await LevelService.removeOneNiveauEnAttente(req.params.idPersonnage);
        } else {
            if (personnage.niveau > 1) {
                result = await LevelService.removeOneNiveau(req.params.idPersonnage);
                result = await LevelService.deletePersonnageStatistiquesForLevel(req.params.idPersonnage, personnage.niveau);
            } else {
                sendSpecialResponse(res,
                    406,
                    "You cannot delete level 1, or any inferior level.",
                    '');
                return
            }
        }

        sendSpecialResponse(res,
            200,
            "Je crois que vous avez fait tomber quelque chose. Tant pis pour vous !",
            result);
    } catch (error) {
        console.log(error);
        console.error('[level.controller][removeOneNiveau][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when removing one level for personnage");
    }
};

/**
 * Handle level up for a personnage, with statistiques attribution.
 * This function does all requested verification that have been identified.
 *
 * @param req IUpdateWaitingLevelReq
 * @param res Express Response
 */
// @ts-ignore
export const levelUp: RequestHandler = async (req: ILevelUpReq, res: Response) => {
    try {
        const level = req.body as Level;
        const personnage: Personnage = (await Personnage.getPersonnageWithStatistiquesFromIdPersonnage(req.params.idPersonnage));

        if (personnage.niveauEnAttente < 1) {
            sendSpecialResponse(res,
                403,
                "This personnage has not reached this milestone. You have no right to stand here, with this request.",
                '');
            return
        }

        if (personnage.niveau + 1 !== level.niveau) {
            sendSpecialResponse(res,
                451,
                "He can progress, but not at that state. Ask again !",
                '');
            return
        }

        // We load data only here to avoid useless charge for database.
        const levelProgression: IProgression = (await ProgressionService.getProgressionForLevel(level.niveau))[0];
        if (levelProgression === undefined) {
            sendSpecialResponse(res,
                406,
                "That state has not be defined yet, come again later !",
                '');
            return
        }


        const nbStatistiquesSent: number = getNbStatistiquesForLevel(level);

        if ((!levelProgression.statistiques && nbStatistiquesSent !== 0)
            || (levelProgression.statistiques && levelProgression.nombreStatistiques !== nbStatistiquesSent && level.niveau !== 1)
            || (level.deVitalite > personnage.deVitaliteNaturelle || level.deMana > personnage.deManaNaturel)) {
            /**
             * If he tries to add statistique when it is not allowed.
             * Or if he tries to add too much statistiques.
             * Or sends to much vitality and/or mana for dice.
             */
            sendSpecialResponse(res,
                406,
                "You try to cheat, my good sir. But I'm better than you !",
                '');
            return
        }

        let levelToUseForLevelUp: Level;
        level.vitaliteNaturelle = getNaturalVitalityFromPersonnageAndLevel(personnage, level);
        level.manaNaturel = getNaturalManaFromPersonnageAndLevel(personnage, level);

        /**
         * Check that the personnage can increase his statistiques for that level.
         * Also check that this increase is in line with what is expected, no less no more.
         * Finally check that deMana and deVitalite are coherent.
         */
        if (levelProgression.statistiques) {
            levelToUseForLevelUp = level;
        } else {
            levelToUseForLevelUp = {
                idPersonnage: level.idPersonnage,
                niveau: level.niveau,
                intelligence: 0,
                force: 0,
                agilite: 0,
                constitution: 0,
                sagesse: 0,
                mana: 0,
                vitalite: 0,
                deVitalite: level.deVitalite,
                deMana: level.deMana,
                vitaliteNaturelle: level.vitaliteNaturelle,
                manaNaturel: level.manaNaturel
            };
        }

        const missingStatistiques = await LevelService.addAllLevelStatistiques(levelToUseForLevelUp);
        if(missingStatistiques.length > 0) {
            sendSpecialResponse(res,
                400,
                "Following statistique(s) are missing for that level : " + missingStatistiques.join(', '),
                '');
            return
        }

        await LevelService.levelUp(level.idPersonnage);
        sendSpecialResponse(res,
            200,
            personnage.nom + " gagne un niveau. Il reste quand même tout à fait inoffensif.",
            '');

    } catch (error) {
        console.log(error);
        console.error('[level.controller][levelUp][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when removing one level for personnage");
    }
};
