import {Router} from "express";
import {
    addCompleteEffetMagiqueUl,
    addEffetMagiqueUl, deleteEffetMagiqueUl,
    getAllUlForEffetMagique,
    getEffetMagiqueUlById,
    updateEffetMagiqueUl
} from "./effetMagiqueUl.controller";
import EffetMagiqueUlContentRoutes from "./effetMagiqueUlContent/effetMagiqueUlContent.routes";

const router = Router();

router.route('/:idEffetMagiqueUl').get(getEffetMagiqueUlById);
router.route('/getAllUlForEffetMagique/:idEffetMagique').get(getAllUlForEffetMagique);
router.route('/').post(addEffetMagiqueUl);
router.route('/addCompleteEffetMagiqueUl').post(addCompleteEffetMagiqueUl);
router.route('/:idEffetMagiqueUl').put(updateEffetMagiqueUl);
router.route('/:idEffetMagiqueUl').delete(deleteEffetMagiqueUl);

router.use('/content', EffetMagiqueUlContentRoutes);

export default router;
