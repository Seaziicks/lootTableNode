import {execute} from "../utils/mysql.connector";
import {MateriauQueries} from "./materiau.queries";
import {IMateriau} from "./materiau.model";

/**
 * gets materiau by id
 */
export const getMateriauById = async (idMateriaux: IMateriau['idMateriaux']) => {
    return execute<IMateriau[]>(MateriauQueries.GetMateriauById, [idMateriaux]);
};

/**
 * gets all materiaux
 */
export const getAllMateriaux = async () => {
    return execute<IMateriau[]>(MateriauQueries.GetAllMateriaux, []);
};


/**
 * adds a new materiau, a new description to effet magique
 */
export const addMateriau = async (materiau: IMateriau) => {
    const result = await execute<{ affectedRows: number }>(MateriauQueries.AddMateriau, [
        materiau.nom, materiau.effet
    ]);
    return result.affectedRows > 0;
};

/**
 * updates materiau based on the id provided
 */
export const updateMateriau = async (materiau: IMateriau) => {
    const result = await execute<{ affectedRows: number }>(MateriauQueries.UpdateMateriauById, [
        materiau.nom, materiau.effet, materiau.idMateriaux
    ]);
    return result.affectedRows > 0;
};

/**
 * delete materiau based on the id provided
 */
export const deleteMateriau = async (idMateriaux: IMateriau['idMateriaux']) => {
    const result = await execute<{ affectedRows: number }>(MateriauQueries.DeleteMateriauById, [
        idMateriaux
    ]);
    return result.affectedRows > 0;
};
