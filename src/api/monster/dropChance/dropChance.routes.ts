import {Router} from "express";
import {
    addDropChance,
    addMultipleDropChances,
    deleteDropChanceByidMonstreAndRoll,
    deleteMultipleDropChancesByidMonstreAndMultipleRolls,
    getAllDropChancesForMonsterByidMonstre,
    getDropChanceByidMonstreAndRoll,
    updateDropChanceByidMonstreAndRoll,
    updateMultipleDropChancesByidMonstreAndRoll
} from "./dropChance.controller";
import * as Auth from "../../middlewares/auth.middleware";


const router = Router();

router.route('/:idMonstre').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllDropChancesForMonsterByidMonstre);
router.route('/:idMonstre/:roll').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getDropChanceByidMonstreAndRoll);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addDropChance);
router.route('/multiple').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addMultipleDropChances);
router.route('/multiple').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateMultipleDropChancesByidMonstreAndRoll);
router.route('/:idMonstre/:roll').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateDropChanceByidMonstreAndRoll);
router.route('/multiple/:idMonstre').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteMultipleDropChancesByidMonstreAndMultipleRolls);
router.route('/:idMonstre/:roll').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteDropChanceByidMonstreAndRoll);

export default router;
