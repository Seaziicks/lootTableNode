import {Router} from "express";
import {addMateriau, deleteMateriau, getAllMateriau, getMateriauById, updateMateriau} from "./materiau.controller";

const router = Router();

router.route('/').get(getAllMateriau);
router.route('/:idMalediction').get(getMateriauById);
router.route('/').post(addMateriau);
router.route('/:idMalediction').put(updateMateriau);
router.route('/:idMalediction').delete(deleteMateriau);

export default router;
