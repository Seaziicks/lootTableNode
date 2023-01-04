import {Router} from "express";
import {
    addMonsterFamily,
    deleteMonsterFamilyById, getAllCompleteMonstersFamilies,
    getAllMonsterFamilies, getCompleteMonsterFamilyById,
    getMonsterFamilyById,
    updateMonsterFamilyById
} from "./family.controller";
import * as Auth from "../../middlewares/auth.middleware";



const router = Router();

router.route('/').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllMonsterFamilies);
router.route('/complete').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllCompleteMonstersFamilies);
router.route('/:idFamilleMonstre').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getMonsterFamilyById);
router.route('/complete/:idFamilleMonstre').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getCompleteMonsterFamilyById);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addMonsterFamily);
router.route('/:idFamilleMonstre').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateMonsterFamilyById);
router.route('/:idFamilleMonstre').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteMonsterFamilyById);


export default router;
