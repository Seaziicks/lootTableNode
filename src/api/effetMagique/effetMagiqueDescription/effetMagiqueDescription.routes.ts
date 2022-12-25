import {Router} from "express";
import {
    addEffetMagiqueDescription, deleteEffetMagiqueDescription,
    getAllDescriptionForEffetMagique,
    getEffetMagiqueDescriptionById, updateEffetMagiqueDescription
} from "./effetMagiqueDescription.controller";


const router = Router();

router.route('/:idEffetMagiqueDescription').get(getEffetMagiqueDescriptionById);
router.route('/getAllDescriptionForEffetMagique/:idEffetMagique').get(getAllDescriptionForEffetMagique);
router.route('/').post(addEffetMagiqueDescription);
router.route('/:idEffetMagiqueDescription').put(updateEffetMagiqueDescription);
router.route('/:idEffetMagiqueDescription').delete(deleteEffetMagiqueDescription);

export default router;
