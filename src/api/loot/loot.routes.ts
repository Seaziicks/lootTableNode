import {Router} from "express";
import {getAllLoots, getLootById, updateLootById} from "./loot.controller";

const router = Router();

router.route('/').get(getAllLoots);
router.route('/:idLoot').get(getLootById);
router.route('/:idLoot').patch(updateLootById);

export default router;
