import {Router} from "express";
import {
    addCompleteCompetence,
    deleteCompetence,
    getAllCompleteCompetencesForPersonnageByidPersonnage,
    getCompetenceById,
    getCompetencePointsAvailableForAPersonnageByidPersonnage,
    getNumberOfAvailableCompetencePointForAllPersonnages,
    updateCompetence,
    updateCompleteCompetence
} from "./competence.controller";
import CompetenceContenuRoutes from "./competenceContenu/competenceContenu.routes";
import * as Auth from "../middlewares/auth.middleware";
import {isSamePersonnage} from "../middlewares/personnage-access.middleware";

const router = Router();

router.use('/contenu', CompetenceContenuRoutes);
router.route('/allForPersonnage/:idPersonnage').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getAllCompleteCompetencesForPersonnageByidPersonnage);
router.route('/pointsAvailable').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getNumberOfAvailableCompetencePointForAllPersonnages);
router.route('/pointsAvailable/:idPersonnage').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), isSamePersonnage, getCompetencePointsAvailableForAPersonnageByidPersonnage);
router.route('/:idCompetence').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getCompetenceById);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addCompleteCompetence);
router.route('/complete/:idCompetence').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateCompleteCompetence);
router.route('/:idCompetence').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateCompetence);
router.route('/:idCompetence').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteCompetence);

export default router;
