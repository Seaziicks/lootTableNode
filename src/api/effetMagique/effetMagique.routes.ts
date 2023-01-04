import {Router} from "express";
import EffetMagiqueDescriptionRoutes from "./effetMagiqueDescription/effetMagiqueDescription.routes"
import EffetMagiqueInfosRoutes from "./effetMagiqueInfos/effetMagiqueInfos.routes"
import EffetMagiqueUlRoutes from "./effetMagiqueUl/effetMagiqueUl.routes"
import EffetMagiqueDecouvertRoutes from "./effetMagiqueDecouvert/effetMagiqueDecouvert.routes"
import EffetMagiqueTableRoutes from "./effetMagiqueTable/effetMagiqueTable.routes";
import {
    addCompleteEffetMagique,
    addEffetMagique, deleteEffetMagique,
    getAllCompleteEffetMagiqueForItem,
    getAllEffetMagiqueForItem,
    getCompleteEffetMagiqueById,
    getEffetMagiqueById, updateEffetMagique
} from "./effetMagique.controller";
import * as Auth from "../middlewares/auth.middleware";

const router = Router();

// Partie Effet Magique
router.route('/:idEffetMagique').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getEffetMagiqueById);
router.route('/:idEffetMagique').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getCompleteEffetMagiqueById);
router.route('/getAllEffetsMagiquesForItem/:idObjet').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllEffetMagiqueForItem);
router.route('/getAllCompleteEffetMagiqueForItem/:idObjet').get(Auth.authorize(Auth.AccessRights.GAME_MASTER), getAllCompleteEffetMagiqueForItem);
router.route('/').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addEffetMagique);
router.route('/addCompleteEffetMagique').post(Auth.authorize(Auth.AccessRights.GAME_MASTER), addCompleteEffetMagique);
router.route('/:idEffetMagique').put(Auth.authorize(Auth.AccessRights.GAME_MASTER), updateEffetMagique);
router.route('/:idEffetMagique').delete(Auth.authorize(Auth.AccessRights.GAME_MASTER), deleteEffetMagique);

// Partie de Effet Magique Description
router.use('/description', EffetMagiqueDescriptionRoutes);

// Partie Effet Magique Infos (effetMagiqueInfos)
router.use('/infos', EffetMagiqueInfosRoutes);

// partie Effet Magique Table (effetMagiqueTable)
router.use('/table', EffetMagiqueTableRoutes);

// Partie Effet Magique Ul (effetMagiqueUl)
router.use('/ul', EffetMagiqueUlRoutes);

// Partie Effet Magique Decouvert (effetMagiqueDecouvert)
router.use('/decouvert', EffetMagiqueDecouvertRoutes);

export default router;
