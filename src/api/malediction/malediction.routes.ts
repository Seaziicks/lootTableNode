import {Router} from "express";
import {addMalediction, deleteMalediction, getMaledictionById, updateMalediction} from "./malediction.controller";


const router = Router();

router.route('/:idMalediction').get(getMaledictionById);
router.route('/').post(addMalediction);
router.route('/:idMalediction').put(updateMalediction);
router.route('/:idMalediction').delete(deleteMalediction);

export default router;
