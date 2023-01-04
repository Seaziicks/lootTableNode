import {
    addEffetMagiqueUlContent, deleteEffetMagiqueUlContent,
    getAllUlContentForEffetMagiqueUl,
    getEffetMagiqueUlContentById, updateEffetMagiqueUlContent
} from "./effetMagiqueUlContent.controller";
import {Router} from "express";
import * as Auth from "../../../middlewares/auth.middleware";


const router = Router();

router.route('/:idEffetMagiqueUlContent').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueUlContentById);
router.route('/getAllUlContentForEffetMagiqueUl/:idEffetMagiqueUl').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllUlContentForEffetMagiqueUl);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagiqueUlContent);
router.route('/:idEffetMagiqueUlContent').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagiqueUlContent);
router.route('/:idEffetMagiqueUlContent').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagiqueUlContent);

export default router;
