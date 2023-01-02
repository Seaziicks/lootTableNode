import {Router} from "express";
import {
    getDetailedLevelsForPersonnageFromPersonnageId, levelUp, removeOneNiveau,
    addOneNiveauEnAttente,
    updateNiveauEnAttente
} from "./level.controller";
import ProgressionRoutes from "./progression/progression.routes";

const router = Router();

router.use('/progression', ProgressionRoutes);
router.route('/detailed/:idPersonnage').get(getDetailedLevelsForPersonnageFromPersonnageId);
router.route('/addOne/enAttente/:idPersonnage').post(addOneNiveauEnAttente);
router.route('/levelUp/:idPersonnage').post(levelUp);
router.route('/removeOne/:idPersonnage').patch(removeOneNiveau);
router.route('/enAttente/:idPersonnage').patch(updateNiveauEnAttente);

export default router;
