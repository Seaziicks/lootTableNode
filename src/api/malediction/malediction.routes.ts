import {Router} from "express";
import {addMalediction, deleteMalediction, getMaledictionById, updateMalediction} from "./malediction.controller";
import * as Auth from "../middlewares/auth.middleware";


const router = Router();

router.route('/:idMalediction').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getMaledictionById);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addMalediction);
router.route('/:idMalediction').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateMalediction);
router.route('/:idMalediction').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteMalediction);

export default router;
