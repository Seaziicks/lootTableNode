import {Router} from "express";
import {
    addStatistique, deleteStatistique,
    getAllSummedStatistiquesForPersonnageFromPersonnageId,
    updateStatistique
} from "./statistique.controller";
import * as Auth from "../../middlewares/auth.middleware";


const router = Router();


router.route('/summed/:idPersonnage').get(getAllSummedStatistiquesForPersonnageFromPersonnageId);
// For what comes next, all arguments should be in the req.body part
router.route('/').post(Auth.authorize(Auth.AccessRights.ADMIN), addStatistique);
router.route('/').patch(Auth.authorize(Auth.AccessRights.ADMIN), updateStatistique);
router.route('/').delete(Auth.authorize(Auth.AccessRights.ADMIN), deleteStatistique);

export default router;
