import {Router} from "express";
import {
    addEffetMagiqueTableTitle, deleteEffetMagiqueTableTitle,
    getAllTableTitleForEffetMagiqueTable,
    getEffetMagiqueTableTitleById, updateEffetMagiqueTableTitle
} from "./effetMagiqueTableTitle.controller";
import EffetMagiqueTableTitleContentRoutes from "./effetMagiqueTableTitleContent/effetMagiqueTableTitleContent.routes";


const router = Router();

router.route('/:idEffetMagiqueTableTitle').get(getEffetMagiqueTableTitleById);
router.route('/getAllTableTitleForEffetMagiqueTable/:idEffetMagiqueTable').get(getAllTableTitleForEffetMagiqueTable);
router.route('/').post(addEffetMagiqueTableTitle);
router.route('/:idEffetMagiqueTableTitle').put(updateEffetMagiqueTableTitle);
router.route('/:idEffetMagiqueTableTitle').delete(deleteEffetMagiqueTableTitle);

router.use('/content', EffetMagiqueTableTitleContentRoutes);

export default router;
