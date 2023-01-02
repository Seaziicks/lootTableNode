import {Router} from "express";
import {
    addProgression,
    deleteProgression,
    getAllProgressions,
    getProgressionForLevel,
    updateProgression
} from "./progression.controller";


const router = Router();

router.route('/').get(getAllProgressions);
router.route('/:niveau').get(getProgressionForLevel);
router.route('/').post(addProgression);
router.route('/:niveau').patch(updateProgression);
router.route('/:niveau').delete(deleteProgression);

export default router;
