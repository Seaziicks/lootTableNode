import {Request, RequestHandler, Response} from "express";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";
import * as CompetenceService from "./competence.services";
import {
    IAddCompetenceReq,
    ICompetence, IDeleteCompetenceReq,
    IGetAllCompetencesForPersonnageReq,
    IGetCompetenceReq,
    IUpdateCompetenceReq
} from "./competence.model";
import * as CompetenceContenuService from "./competenceContenu/competenceContenu.services";
import {ICompetenceContenu} from "./competenceContenu/competenceContenu.model";
import * as PersonnageService from "../personnage/personnage.services";

// @ts-ignore
export const getAllCompleteCompetencesForPersonnageByidPersonnage: RequestHandler = async (req: IGetAllCompetencesForPersonnageReq, res: Response) => {
    try {
        // console.log(req.params.idPersonnage);
        const competences = await CompetenceService.getAllCompetencesForPersonnageByidPersonnage(req.params.idPersonnage);
        console.log(competences);

        for (let competence of competences) {
            competence.contenu = await CompetenceContenuService.getAllCompetenceContenusForCompetenceByidCompetence(competence.idCompetence);
            competence.optionnelle = Boolean(competence.optionnelle);
            competence.children = []
        }

        const finalTree: ICompetence[] = [];
        // It would have been a more optimised way to do it, but you never know how all competences have been created, in what order
        // for (let i = 0; i < competences.length; i++) {
        //     if (competences[i].idCompetenceParente !== null && i + 1 < competences.length) {
        //         for (let j = i + 1; j < competences.length; j++) {
        //             if (competences[j].idCompetence === competences[i].idCompetenceParente) {
        //                 competences[j].children.push(competences[i]);
        //             }
        //         }
        //     } else if (competences[i].idCompetenceParente === null) {
        //         finalTree.push(competences[i]);
        //     }
        // }

        // This is a safer way
        for (let competenceToFindParentFor of competences) {
            if (competenceToFindParentFor.idCompetenceParente !== null) {
                for (let potentialParent of competences) {
                    if (potentialParent.idCompetence === competenceToFindParentFor.idCompetenceParente) {
                        potentialParent.children.push(competenceToFindParentFor);
                    }
                }
            } else{
                finalTree.push(competenceToFindParentFor);
            }
        }

        sendSpecialResponse(res,
            200,
            "Et vous appelez ça des 'compétences' ? Ha ha ha ha !",
            finalTree);
    } catch (error) {
        console.log(error);
        console.error('[competence.controller][getAllCompetencesForPersonnageByidPersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

// @ts-ignore
export const getCompetenceById: RequestHandler = async (req: IGetCompetenceReq, res: Response) => {
    try {
        // console.log(req.params.idPersonnage);
        const competence = (await CompetenceService.getCompetenceById(req.params.idCompetence))[0];
        console.log(competence);

        competence.contenu = await CompetenceContenuService.getAllCompetenceContenusForCompetenceByidCompetence(competence.idCompetence);
        competence.optionnelle = Boolean(competence.optionnelle);

        sendSpecialResponse(res,
            200,
            "Comme si il allait savoir s'en servir.",
            competence);
    } catch (error) {
        console.log(error);
        console.error('[competence.controller][getAllCompetencesForPersonnageByidPersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

// @ts-ignore
export const getNumberOfAvailableCompetencePointForAllPersonnages: RequestHandler = async (req: IGetCompetenceReq, res: Response) => {
    try {
        // console.log(req.params.idPersonnage);
        const competence = await CompetenceService.getNumberOfAvailableCompetencePointForAllPersonnages();

        sendSpecialResponse(res,
            200,
            "Ha ha ha, mais pourquoi s'intéresser à ça ?",
            competence);
    } catch (error) {
        console.log(error);
        console.error('[competence.controller][getNumberOfAvailableCompetencePointForAllPersonnages][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

// @ts-ignore
export const getCompetencePointsAvailableForAPersonnageByidPersonnage: RequestHandler = async (req: IGetAllCompetencesForPersonnageReq, res: Response) => {
    try {
        const competence = await CompetenceService.getCompetencePointsAvailableForAPersonnageByidPersonnage(req.params.idPersonnage);

        sendSpecialResponse(res,
            200,
            "Même si il en avait une infinité, il ne saurait qu'en faire.",
            competence);
    } catch (error) {
        console.log(error);
        console.error('[competence.controller][getCompetencePointsAvailableForAPersonnageByidPersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching personnage by id");
    }
};

// @ts-ignore
export const addCompleteCompetence: RequestHandler = async (req: IAddCompetenceReq, res: Response) => {
    try {
        const result = await CompetenceService.addCompetence(req.body);

        const competenceContenus = req.body.contenu;
        for (let contenu of competenceContenus) {
            await CompetenceContenuService.addCompetenceContenu({ ...contenu, idCompetence: result.insertId });
        }

        sendSpecialResponse(res,
            200,
            "Vous lui donnez des choses dont il ne comprend même pas le sens. Il risque de se tuer avec ça !",
            result);
    } catch (error) {
        console.error('[personnage.controller][updatePersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
}

// @ts-ignore
export const updateCompetence: RequestHandler = async (req: IUpdateCompetenceReq, res: Response) => {
    try {
        const result = await CompetenceService.updateCompetence({ ...req.body, idCompetence: req.params.idCompetence });

        sendSpecialResponse(res,
            200,
            "Et vous pensez qu'il arrivera à le faire ? Bonne désillusion !",
            result);
    } catch (error) {
        console.error('[personnage.controller][updatePersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
}

// @ts-ignore
export const updateCompleteCompetence: RequestHandler = async (req: IUpdateCompetenceReq, res: Response) => {
    try {
        const result = await CompetenceService.updateCompetence({ ...req.body, idCompetence: req.params.idCompetence });

        for(let contenu of req.body.contenu) {
            await CompetenceContenuService.updateCompetenceContenu(contenu);
        }

        sendSpecialResponse(res,
            200,
            "Et vous pensez qu'il arrivera à le faire ? Bonne désillusion !",
            result);
    } catch (error) {
        console.error('[personnage.controller][updatePersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
}

// @ts-ignore
export const deleteCompetence: RequestHandler = async (req: IDeleteCompetenceReq, res: Response) => {
    try {
        const result = await CompetenceService.deleteCompetence(req.params.idCompetence);

        sendSpecialResponse(res,
            200,
            "En même temps, il ne savait rien faire de ses dix doigts.",
            result);
    } catch (error) {
        console.error('[personnage.controller][updatePersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
}
