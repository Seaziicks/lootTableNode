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
import * as Auth from "../middlewares/auth.middleware";

const router = Router();

router.use('/family', MonsterFamilyRoutes);
router.use('/dropChance', DropChanceRoutes);

router.route('/allForFamily/:idFamilleMonstre').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllMonstersFromFamily);
router.route('/:idMonstre').get(getMonsterById);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addMonster);
router.route('/:idMonstre').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateMonsterById);
router.route('/:idMonstre').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteMonsterById);

export default router;
