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


const router = Router();

router.route('/:idMonstre').get(getAllDropChancesForMonsterByidMonstre);
router.route('/:idMonstre/:roll').get(getDropChanceByidMonstreAndRoll);
router.route('/').post(addDropChance);
router.route('/multiple').post(addMultipleDropChances);
router.route('/multiple').patch(updateMultipleDropChancesByidMonstreAndRoll);
router.route('/:idMonstre/:roll').patch(updateDropChanceByidMonstreAndRoll);
router.route('/multiple/:idMonstre').delete(deleteMultipleDropChancesByidMonstreAndMultipleRolls);
router.route('/:idMonstre/:roll').delete(deleteDropChanceByidMonstreAndRoll);

export default router;
