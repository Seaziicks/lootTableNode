import {Router} from "express";
import {
    addCompetenceContenu, deleteCompetenceContenu,
    getAllCompetenceContenusForCompetenceByidCompetence, updateCompetenceContenu
} from "./competenceContenu.controller";
import {getCompetenceById} from "../competence.controller";
import * as Auth from "../../middlewares/auth.middleware";

const router = Router();

router.route('/allForCompetence/:idCompetence').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getAllCompetenceContenusForCompetenceByidCompetence);
router.route('/:idCompetenceContenu').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getCompetenceById);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addCompetenceContenu);
router.route('/:idCompetenceContenu').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateCompetenceContenu);
router.route('/:idCompetenceContenu').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteCompetenceContenu);


export default router;
