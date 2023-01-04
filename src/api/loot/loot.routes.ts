import {Router} from "express";
import {getAllLoots, getLootById, updateLootById} from "./loot.controller";
import * as Auth from "../middlewares/auth.middleware";

const router = Router();

router.route('/').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllLoots);
router.route('/:idLoot').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getLootById);
router.route('/:idLoot').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateLootById);

export default router;
