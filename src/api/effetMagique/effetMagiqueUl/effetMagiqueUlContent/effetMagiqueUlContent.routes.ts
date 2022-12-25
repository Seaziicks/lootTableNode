import {
    addEffetMagiqueUlContent, deleteEffetMagiqueUlContent,
    getAllUlContentForEffetMagiqueUl,
    getEffetMagiqueUlContentById, updateEffetMagiqueUlContent
} from "./effetMagiqueUlContent.controller";
import {Router} from "express";


const router = Router();

router.route('/:idEffetMagiqueUlContent').get(getEffetMagiqueUlContentById);
router.route('/getAllUlContentForEffetMagiqueUl/:idEffetMagiqueUl').get(getAllUlContentForEffetMagiqueUl);
router.route('/').post(addEffetMagiqueUlContent);
router.route('/:idEffetMagiqueUlContent').put(updateEffetMagiqueUlContent);
router.route('/:idEffetMagiqueUlContent').delete(deleteEffetMagiqueUlContent);

export default router;
