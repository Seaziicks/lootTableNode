import {Router} from "express";
import {
    addEffetMagiqueInfos, deleteEffetMagiqueInfos,
    getAllInfosForEffetMagique,
    getEffetMagiqueInfoById, updateEffetMagiqueInfos
} from "./effetMagiqueInfos.controller";
import * as Auth from "../../middlewares/auth.middleware";

const router = Router();

router.route('/:idEffetMagiqueInfos').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueInfoById);
router.route('/getAllInfosForEffetMagique/:idEffetMagique').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllInfosForEffetMagique);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagiqueInfos);
router.route('/:idEffetMagiqueInfos').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagiqueInfos);
router.route('/:idEffetMagiqueInfos').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagiqueInfos);

export default router;
