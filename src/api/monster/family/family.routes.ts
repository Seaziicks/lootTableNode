import {Router} from "express";
import {
    addMonsterFamily,
    deleteMonsterFamilyById, getAllCompleteMonstersFamilies,
    getAllMonsterFamilies, getCompleteMonsterFamilyById,
    getMonsterFamilyById,
    updateMonsterFamilyById
} from "./family.controller";



const router = Router();

router.route('/').get(getAllMonsterFamilies);
router.route('/complete').get(getAllCompleteMonstersFamilies);
router.route('/:idFamilleMonstre').get(getMonsterFamilyById);
router.route('/complete/:idFamilleMonstre').get(getCompleteMonsterFamilyById);
router.route('/').post(addMonsterFamily);
router.route('/:idFamilleMonstre').put(updateMonsterFamilyById);
router.route('/:idFamilleMonstre').delete(deleteMonsterFamilyById);


export default router;
