import {Router} from "express";
import {
    addEffetMagiqueTableTitle, deleteEffetMagiqueTableTitle,
    getAllTableTitleForEffetMagiqueTable,
    getEffetMagiqueTableTitleById, updateEffetMagiqueTableTitle
} from "./effetMagiqueTableTitle.controller";
import EffetMagiqueTableTitleContentRoutes from "./effetMagiqueTableTitleContent/effetMagiqueTableTitleContent.routes";
import * as Auth from "../../../middlewares/auth.middleware";


const router = Router();

router.route('/:idEffetMagiqueTableTitle').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueTableTitleById);
router.route('/getAllTableTitleForEffetMagiqueTable/:idEffetMagiqueTable').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllTableTitleForEffetMagiqueTable);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagiqueTableTitle);
router.route('/:idEffetMagiqueTableTitle').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagiqueTableTitle);
router.route('/:idEffetMagiqueTableTitle').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagiqueTableTitle);

router.use('/content', EffetMagiqueTableTitleContentRoutes);

export default router;
