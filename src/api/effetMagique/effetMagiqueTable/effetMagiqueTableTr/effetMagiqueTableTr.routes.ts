import {Router} from "express";
import {
    addEffetMagiqueTableTr, deleteEffetMagiqueTableTr,
    getAllTableTrForEffetMagiqueTable,
    getEffetMagiqueTableTrById, updateEffetMagiqueTableTr
} from "./effetMagiqueTableTr.controller";
import EffetMagiqueTableTrContentRoutes from "./effetMagiqueTableTrContent/effetMagiqueTableTrContent.routes";

const router = Router();

router.route('/:idEffetMagiqueTableTr').get(getEffetMagiqueTableTrById);
router.route('/getAllTableTrForEffetMagiqueTable/:idEffetMagiqueTable').get(getAllTableTrForEffetMagiqueTable);
router.route('/').post(addEffetMagiqueTableTr);
router.route('/:idEffetMagiqueTableTr').put(updateEffetMagiqueTableTr);
router.route('/:idEffetMagiqueTableTr').delete(deleteEffetMagiqueTableTr);

router.use('/content', EffetMagiqueTableTrContentRoutes);

export default router;
