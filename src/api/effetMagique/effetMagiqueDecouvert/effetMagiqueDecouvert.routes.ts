import {Router} from "express";
import {
    addEffetMagiqueDecouvert, deleteEffetMagiqueDecouvert,
    getAllEffetMagiqueDecouvertForItem, getAllEffetMagiqueDecouvertForItemByAPersonnage,
    getEffetMagiqueDecouvertById, updateEffetMagiqueDecouvert
} from "./effetMagiqueDecouvert.controller";



const router = Router();

router.route('/:idEffetMagiqueDecouvert').get(getEffetMagiqueDecouvertById);
router.route('/getAllEffetMagiqueDecouvertForItemByPersonnage/:idPersonnage/:idObjet').get(getAllEffetMagiqueDecouvertForItemByAPersonnage);
router.route('/getAllEffetMagiqueDecouvertForItem/:idObjet').get(getAllEffetMagiqueDecouvertForItem);
router.route('/').post(addEffetMagiqueDecouvert);
router.route('/:idEffetMagiqueDecouvert').put(updateEffetMagiqueDecouvert);
router.route('/:idEffetMagiqueDecouvert').delete(deleteEffetMagiqueDecouvert);

export default router;

