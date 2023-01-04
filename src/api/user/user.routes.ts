import {Router} from "express";
import {
    addUser,
    addUserWithPersonnage,
    updateUserPassword,
    userLogin,
    isUsernameAvailable,
    updateUserUsername, deleteUser
} from "./user.constroller";
import {isSameUser} from "../middlewares/personnage-access.middleware";
import * as Auth from "../middlewares/auth.middleware";

const router = Router();

router.route('/login').get(userLogin);
router.route('/checkUsernameAvailable/:username').get(isUsernameAvailable);
router.route('/').post(addUser);
router.route('/withPersonnage').post(addUserWithPersonnage);
router.route('/password/:idUser').put(isSameUser, updateUserPassword)
router.route('/username/:idUser').put(isSameUser,updateUserUsername)
router.route('/:idUser').delete(Auth.authorize(Auth.AccessRights.ADMIN), deleteUser);

export default router;
