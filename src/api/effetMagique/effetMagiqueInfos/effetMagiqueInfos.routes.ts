import {Router} from "express";
import {
    addEffetMagiqueInfos, deleteEffetMagiqueInfos,
    getAllInfosForEffetMagique,
    getEffetMagiqueInfoById, updateEffetMagiqueInfos
} from "./effetMagiqueInfos.controller";

const router = Router();

router.route('/:idEffetMagiqueInfos').get(getEffetMagiqueInfoById);
router.route('/getAllInfosForEffetMagique/:idEffetMagique').get(getAllInfosForEffetMagique);
router.route('/').post(addEffetMagiqueInfos);
router.route('/:idEffetMagiqueInfos').put(updateEffetMagiqueInfos);
router.route('/:idEffetMagiqueInfos').delete(deleteEffetMagiqueInfos);

export default router;
