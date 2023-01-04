import {Router} from "express";
import MonsterFamilyRoutes from "./family/family.routes";
import DropChanceRoutes from "./dropChance/dropChance.routes";
import {
    addMonster,
    deleteMonsterById,
    getAllMonstersFromFamily,
    getMonsterById,
    updateMonsterById
} from "./monster.controller";

const router = Router();

router.use('/family', MonsterFamilyRoutes);
router.use('/dropChance', DropChanceRoutes);

router.route('/allForFamily/:idFamilleMonstre').get(getAllMonstersFromFamily);
router.route('/:idMonstre').get(getMonsterById);
router.route('/').post(addMonster);
router.route('/:idMonstre').patch(updateMonsterById);
router.route('/:idMonstre').delete(deleteMonsterById);

export default router;
