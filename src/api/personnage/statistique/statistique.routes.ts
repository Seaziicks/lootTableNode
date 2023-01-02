import {Router} from "express";
import {
    addStatistique, deleteStatistique,
    getAllSummedStatistiquesForPersonnageFromPersonnageId,
    updateStatistique
} from "./statistique.controller";


const router = Router();


router.route('/summed/:idPersonnage').get(getAllSummedStatistiquesForPersonnageFromPersonnageId);
// For what comes next, all arguments should be in the req.body part
router.route('/').post(addStatistique);
router.route('/').patch(updateStatistique);
router.route('/').delete(deleteStatistique);

export default router;
