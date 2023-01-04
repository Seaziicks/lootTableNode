import {Router} from "express";
import {
    addPersonnage, deletePersonnage, getAllPersonnages,
    getAllPersonnagesWithStatistics,
    getPersonnageById,
    getPersonnagesAvailable,
    getPersonnageWithStatistiquesById, personnageNameAvailable, updatePersonnage
} from "./personnage.controller";
import StatistiqueRoutes from './statistique/statistique.routes';
import LevelRoutes from './level/level.routes';
import * as Auth from "../middlewares/auth.middleware";

const router = Router();

/*
 * router.route('/withStatistiques').get(getAllPersonnagesWithStatistics);
 * router.route('/:idPersonnage').get(getPersonnageById);
 * Order is important, because of the match made here. If we put /:idPersonnage before, it will interpret all [...] of /[...] as idPersonnage.
 * As we put /withStatistiques before, it will check that match before, and then compare to the next when fail.
 * But all string seems to be interpreted as 0, so with /:idPersonnage first, {{url}}/personnage/withStatistique is interpreted as {{url}}/personnage/0.
 * Be careful of your routes !
*/

router.use('/statistique', StatistiqueRoutes);
router.use('/level', LevelRoutes);
router.route('/withStatistiques').get(getAllPersonnagesWithStatistics);
router.route('/withStatistiques/:idPersonnage').get(getPersonnageWithStatistiquesById);
router.route('/checkNameAvailable/:personnageName').get(personnageNameAvailable);
router.route('/personnagesAvailable').get(getPersonnagesAvailable);
router.route('/:idPersonnage').get(getPersonnageById);
router.route('/').get(getAllPersonnages);

router.route('/').post(addPersonnage)
router.route('/:idPersonnage').patch(Auth.authorize(Auth.AccessRights.GAME_MASTER), updatePersonnage)
router.route('/:idPersonnage').delete(Auth.authorize(Auth.AccessRights.ADMIN), deletePersonnage)

export default router;
