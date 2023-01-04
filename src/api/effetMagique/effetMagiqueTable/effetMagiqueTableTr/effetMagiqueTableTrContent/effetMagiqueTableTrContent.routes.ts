import {
    addEffetMagiqueTableTrContent, deleteEffetMagiqueTableTrContent,
    getAllTrContentForEffetMagiqueTableTr,
    getEffetMagiqueTableTrContentById, updateEffetMagiqueTableTrContent
} from "./effetMagiqueTableTrContent.controller";
import {Router} from "express";
import * as Auth from "../../../../middlewares/auth.middleware";


const router = Router();

router.route('/:idEffetMagiqueTableTrContent').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueTableTrContentById);
router.route('/getAllTrContentForEffetMagiqueTableTr/:idEffetMagiqueTableTr').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllTrContentForEffetMagiqueTableTr);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagiqueTableTrContent);
router.route('/:idEffetMagiqueTableTrContent').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagiqueTableTrContent);
router.route('/:idEffetMagiqueTableTrContent').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagiqueTableTrContent);

export default router;
