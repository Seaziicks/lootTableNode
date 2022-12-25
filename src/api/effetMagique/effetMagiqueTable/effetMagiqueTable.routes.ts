import {Router} from "express";

import EffetMagiqueTableTitleRoutes from "./effetMagiqueTableTitle/effetMagiqueTableTitle.routes";
import EffetMagiqueTableTrRoutes from "./effetMagiqueTableTr/effetMagiqueTableTr.routes";
import {
    addCompleteEffetMagiqueTable,
    addEffetMagiqueTable, deleteEffetMagiqueTable,
    getAllTableForEffetMagique,
    getEffetMagiqueTableById, updateEffetMagiqueTable
} from "./effetMagiqueTable.controller";


const router = Router();

router.route('/:idEffetMagiqueTable').get(getEffetMagiqueTableById);
router.route('/getAllTableForEffetMagique/:idEffetMagique').get(getAllTableForEffetMagique);
router.route('/').post(addEffetMagiqueTable);
router.route('/addCompleteEffetMagiqueTable').post(addCompleteEffetMagiqueTable);
router.route('/:idEffetMagiqueTable').put(updateEffetMagiqueTable);
router.route('/:idEffetMagiqueTable').delete(deleteEffetMagiqueTable);

router.use('/title', EffetMagiqueTableTitleRoutes);
router.use('/tr', EffetMagiqueTableTrRoutes);

export default router;
