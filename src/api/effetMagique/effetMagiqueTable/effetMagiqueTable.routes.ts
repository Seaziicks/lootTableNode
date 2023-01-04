import {Router} from "express";

import EffetMagiqueTableTitleRoutes from "./effetMagiqueTableTitle/effetMagiqueTableTitle.routes";
import EffetMagiqueTableTrRoutes from "./effetMagiqueTableTr/effetMagiqueTableTr.routes";
import {
    addCompleteEffetMagiqueTable,
    addEffetMagiqueTable, deleteEffetMagiqueTable,
    getAllTableForEffetMagique,
    getEffetMagiqueTableById, updateEffetMagiqueTable
} from "./effetMagiqueTable.controller";
import * as Auth from "../../middlewares/auth.middleware";


const router = Router();

router.route('/:idEffetMagiqueTable').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueTableById);
router.route('/getAllTableForEffetMagique/:idEffetMagique').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllTableForEffetMagique);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagiqueTable);
router.route('/addCompleteEffetMagiqueTable').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addCompleteEffetMagiqueTable);
router.route('/:idEffetMagiqueTable').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagiqueTable);
router.route('/:idEffetMagiqueTable').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagiqueTable);

router.use('/title', EffetMagiqueTableTitleRoutes);
router.use('/tr', EffetMagiqueTableTrRoutes);

export default router;
