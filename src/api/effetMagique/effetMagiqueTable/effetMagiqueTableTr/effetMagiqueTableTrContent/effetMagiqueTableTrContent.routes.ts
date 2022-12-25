import {
    addEffetMagiqueTableTrContent, deleteEffetMagiqueTableTrContent,
    getAllTrContentForEffetMagiqueTableTr,
    getEffetMagiqueTableTrContentById, updateEffetMagiqueTableTrContent
} from "./effetMagiqueTableTrContent.controller";
import {Router} from "express";


const router = Router();

router.route('/:idEffetMagiqueTableTrContent').get(getEffetMagiqueTableTrContentById);
router.route('/getAllTrContentForEffetMagiqueTableTr/:idEffetMagiqueTableTr').get(getAllTrContentForEffetMagiqueTableTr);
router.route('/').post(addEffetMagiqueTableTrContent);
router.route('/:idEffetMagiqueTableTrContent').put(updateEffetMagiqueTableTrContent);
router.route('/:idEffetMagiqueTableTrContent').delete(deleteEffetMagiqueTableTrContent);

export default router;
