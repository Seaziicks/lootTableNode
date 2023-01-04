import {Router} from "express";
import {
    addEffetMagiqueTableTitleContent, deleteEffetMagiqueTableTitleContent,
    getAllTitleContentForEffetMagiqueTableTitle,
    getEffetMagiqueTableTitleContentById, updateEffetMagiqueTableTitleContent
} from "./effetMagiqueTableTitleContent.controller";
import * as Auth from "../../../../middlewares/auth.middleware";

const router = Router();

router.route('/:idEffetMagiqueTableTitleContent').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueTableTitleContentById);
router.route('/getAllTitleContentForEffetMagiqueTableTitle/:idEffetMagiqueTableTitle').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllTitleContentForEffetMagiqueTableTitle);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagiqueTableTitleContent);
router.route('/:idEffetMagiqueTableTitleContent').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagiqueTableTitleContent);
router.route('/:idEffetMagiqueTableTitleContent').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagiqueTableTitleContent);

export default router;
