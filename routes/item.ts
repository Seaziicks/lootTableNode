import { Router } from 'express';
const itemController = require("../controller/item");
import * as Auth from './../src/api/middlewares/auth.middleware';

const router = Router();

// router.route('/getItemById/:idObjet').get(Auth.authorize(['getItemById']), itemController.getOneObjectById);

export default router;
