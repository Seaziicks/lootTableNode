import {Router} from "express";
import {
    addProgression,
    deleteProgression,
    getAllProgressions,
    getProgressionForLevel,
    updateProgression
} from "./progression.controller";
import * as Auth from "../../../middlewares/auth.middleware";


const router = Router();

router.route('/').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllProgressions);
router.route('/:niveau').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getProgressionForLevel);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addProgression);
router.route('/:niveau').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateProgression);
router.route('/:niveau').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteProgression);

export default router;
