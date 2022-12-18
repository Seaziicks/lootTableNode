import {Router} from "express";
import {getPersonnagesAvailable} from "./personnage.controller"

const router = Router();

router.route('/').get();
router.route('/personnagesAvailable').get(getPersonnagesAvailable);

export default router;
