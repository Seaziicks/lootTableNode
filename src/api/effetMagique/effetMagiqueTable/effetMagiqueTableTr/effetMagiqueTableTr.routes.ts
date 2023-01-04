import {Router} from "express";
import {
    addEffetMagiqueTableTr, deleteEffetMagiqueTableTr,
    getAllTableTrForEffetMagiqueTable,
    getEffetMagiqueTableTrById, updateEffetMagiqueTableTr
} from "./effetMagiqueTableTr.controller";
import EffetMagiqueTableTrContentRoutes from "./effetMagiqueTableTrContent/effetMagiqueTableTrContent.routes";
import * as Auth from "../../../middlewares/auth.middleware";

const router = Router();

router.route('/:idEffetMagiqueTableTr').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueTableTrById);
router.route('/getAllTableTrForEffetMagiqueTable/:idEffetMagiqueTable').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllTableTrForEffetMagiqueTable);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagiqueTableTr);
router.route('/:idEffetMagiqueTableTr').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagiqueTableTr);
router.route('/:idEffetMagiqueTableTr').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagiqueTableTr);

router.use('/content', EffetMagiqueTableTrContentRoutes);

export default router;
