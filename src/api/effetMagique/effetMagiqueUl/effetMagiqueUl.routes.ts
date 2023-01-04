import {Router} from "express";
import {
    addCompleteEffetMagiqueUl,
    addEffetMagiqueUl, deleteEffetMagiqueUl,
    getAllUlForEffetMagique,
    getEffetMagiqueUlById,
    updateEffetMagiqueUl
} from "./effetMagiqueUl.controller";
import EffetMagiqueUlContentRoutes from "./effetMagiqueUlContent/effetMagiqueUlContent.routes";
import * as Auth from "../../middlewares/auth.middleware";

const router = Router();

router.route('/:idEffetMagiqueUl').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueUlById);
router.route('/getAllUlForEffetMagique/:idEffetMagique').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllUlForEffetMagique);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagiqueUl);
router.route('/addCompleteEffetMagiqueUl').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addCompleteEffetMagiqueUl);
router.route('/:idEffetMagiqueUl').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagiqueUl);
router.route('/:idEffetMagiqueUl').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagiqueUl);

router.use('/content', EffetMagiqueUlContentRoutes);

export default router;
