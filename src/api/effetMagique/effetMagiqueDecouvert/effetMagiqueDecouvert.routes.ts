import {Router} from "express";
import {
    addEffetMagiqueDecouvert, deleteEffetMagiqueDecouvert,
    getAllEffetMagiqueDecouvertForItem, getAllEffetMagiqueDecouvertForItemByAPersonnage,
    getEffetMagiqueDecouvertById, updateEffetMagiqueDecouvert
} from "./effetMagiqueDecouvert.controller";
import * as Auth from "../../middlewares/auth.middleware";
import {isSamePersonnage} from "../../middlewares/personnage-access.middleware";



const router = Router();

router.route('/:idEffetMagiqueDecouvert').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getEffetMagiqueDecouvertById);
router.route('/getAllEffetMagiqueDecouvertForItemByPersonnage/:idPersonnage/:idObjet').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), isSamePersonnage, getAllEffetMagiqueDecouvertForItemByAPersonnage);
router.route('/getAllEffetMagiqueDecouvertForItem/:idObjet').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllEffetMagiqueDecouvertForItem);
router.route('/').post(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), addEffetMagiqueDecouvert);
router.route('/:idEffetMagiqueDecouvert').put(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), updateEffetMagiqueDecouvert);
router.route('/:idEffetMagiqueDecouvert').delete(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), deleteEffetMagiqueDecouvert);

export default router;

