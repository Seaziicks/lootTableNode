import {Router} from "express";
import {userLogin} from "./user.constroller";

const router = Router();

router.route('/login').get(userLogin)

export default router;
