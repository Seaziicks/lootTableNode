import {Router} from 'express';
import {addItem, deleteItemById, getItemById, getItems, getItemsForPersonnage, updateItemById, updateItemFakeNameById} from './item.controller';
import * as Auth from './../middlewares/auth.middleware';
import {isSameItemOwner} from "../middlewares/personnage-access.middleware";

const router = Router();

router.route('/').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getItems);
router.route('/:id').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getItemById);
router.route('/personnage/:id').get(Auth.authorize(Auth.AccessRights.GROUP_MEMBER), getItemsForPersonnage);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addItem);
router.route('/:id').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateItemById);
router.route('/updateFakeName/:id').patch(isSameItemOwner, updateItemFakeNameById);
/*
* TODO: Rajouter la possibilite pour le joueur de pouvoir modifier la description des items.
*  Réponse : Sera normalement fait dans la route EffetMagique ou EffetMagiqueDécouvert
*/
router.route('/:id').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteItemById);

export default router;
