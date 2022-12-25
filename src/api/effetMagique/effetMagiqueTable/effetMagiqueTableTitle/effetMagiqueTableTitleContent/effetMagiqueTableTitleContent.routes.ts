import {Router} from "express";
import {
    addEffetMagiqueTableTitleContent, deleteEffetMagiqueTableTitleContent,
    getAllTitleContentForEffetMagiqueTableTitle,
    getEffetMagiqueTableTitleContentById, updateEffetMagiqueTableTitleContent
} from "./effetMagiqueTableTitleContent.controller";

const router = Router();

router.route('/:idEffetMagiqueTableTitleContent').get(getEffetMagiqueTableTitleContentById);
router.route('/getAllTitleContentForEffetMagiqueTableTitle/:idEffetMagiqueTableTitle').get(getAllTitleContentForEffetMagiqueTableTitle);
router.route('/').post(addEffetMagiqueTableTitleContent);
router.route('/:idEffetMagiqueTableTitleContent').put(updateEffetMagiqueTableTitleContent);
router.route('/:idEffetMagiqueTableTitleContent').delete(deleteEffetMagiqueTableTitleContent);

export default router;
