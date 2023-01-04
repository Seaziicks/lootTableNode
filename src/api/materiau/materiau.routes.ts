import {Router} from "express";
import {addMateriau, deleteMateriau, getAllMateriau, getMateriauById, updateMateriau} from "./materiau.controller";
import * as Auth from "../middlewares/auth.middleware";

const router = Router();

router.route('/').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllMateriau);
router.route('/:idMateriaux').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getMateriauById);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addMateriau);
router.route('/:idMateriaux').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateMateriau);
router.route('/:idMateriaux').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteMateriau);

export default router;
