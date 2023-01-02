import {Router} from 'express';
import {
    addCompleteItem,
    addItem,
    deleteItemById, getCompleteItem,
    getItemById,
    getItemNameOnlyById,
    getItems,
    getItemsForPersonnage,
    updateItemById,
    updateItemFakeNameById
} from './item.controller';
import * as Auth from './../middlewares/auth.middleware';
import {isSameItemOwner} from "../middlewares/personnage-access.middleware";

const router = Router();

// Remember that order matters. /:idObjet needs to be placed at the end, or /[string] can't be reached. Not relevant here, but still.
router.route('/').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getItems);
router.route('/complete/:idObjet').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getCompleteItem);
router.route('/nameOnly/:idObjet').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getItemNameOnlyById);
router.route('/personnage/:idPersonnage').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getItemsForPersonnage);
router.route('/:idObjet').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getItemById);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addItem);
router.route('/complete').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addCompleteItem);
router.route('/:idObjet').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateItemById);
router.route('/updateFakeName/:idObjet').patch(isSameItemOwner, updateItemFakeNameById);
/*
* TODO: Rajouter la possibilite pour le joueur de pouvoir modifier la description des items.
*  Réponse : Sera normalement fait dans la route EffetMagique ou EffetMagiqueDécouvert
*/
router.route('/:idObjet').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteItemById);

export default router;
