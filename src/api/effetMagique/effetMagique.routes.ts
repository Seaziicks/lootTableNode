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

const router = Router();

// Partie Effet Magique
router.route('/:idEffetMagique').get(getEffetMagiqueById);
router.route('/:idEffetMagique').get(getCompleteEffetMagiqueById);
router.route('/getAllEffetsMagiquesForItem/:idObjet').get(getAllEffetMagiqueForItem);
router.route('/getAllCompleteEffetMagiqueForItem/:idObjet').get(getAllCompleteEffetMagiqueForItem);
router.route('/').post(addEffetMagique);
router.route('/addCompleteEffetMagique').post(addCompleteEffetMagique);
router.route('/:idEffetMagique').put(updateEffetMagique);
router.route('/:idEffetMagique').delete(deleteEffetMagique);

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
