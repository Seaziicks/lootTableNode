import {Router} from "express";
import {
    addEffetMagiqueDescription, deleteEffetMagiqueDescription,
    getAllDescriptionForEffetMagique,
    getEffetMagiqueDescriptionById, updateEffetMagiqueDescription
} from "./effetMagiqueDescription.controller";
import * as Auth from "../../middlewares/auth.middleware";


const router = Router();

router.route('/:idEffetMagiqueDescription').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueDescriptionById);
router.route('/getAllDescriptionForEffetMagique/:idEffetMagique').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllDescriptionForEffetMagique);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagiqueDescription);
router.route('/:idEffetMagiqueDescription').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagiqueDescription);
router.route('/:idEffetMagiqueDescription').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagiqueDescription);

export default router;
