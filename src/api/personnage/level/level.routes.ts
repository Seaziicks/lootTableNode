import {Router} from "express";
import {
    getDetailedLevelsForPersonnageFromPersonnageId, levelUp, removeOneNiveau,
    addOneNiveauEnAttente,
    updateNiveauEnAttente
} from "./level.controller";
import ProgressionRoutes from "./progression/progression.routes";
import * as Auth from "../../middlewares/auth.middleware";
import {isSamePersonnage} from "../../middlewares/personnage-access.middleware";

const router = Router();

router.use('/progression', ProgressionRoutes);
router.route('/detailed/:idPersonnage').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getDetailedLevelsForPersonnageFromPersonnageId);
router.route('/levelUp/:idPersonnage').post(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), isSamePersonnage, levelUp);
router.route('/addOne/enAttente/:idPersonnage').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), addOneNiveauEnAttente);
router.route('/enAttente/:idPersonnage').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateNiveauEnAttente);
router.route('/removeOne/:idPersonnage').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), removeOneNiveau);

export default router;
