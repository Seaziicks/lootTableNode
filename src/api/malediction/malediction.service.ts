import {execute} from "../utils/mysql.connector";
import {IMalediction} from "./malediction.model";
import {MaledictionQueries} from "./malediction.queries";

/**
 * gets effet magique description
 */
export const getMaledictionById = async (idMalediction: IMalediction['idMalediction']) => {
    return execute<IMalediction[]>(MaledictionQueries.GetMaledictionById, [idMalediction]);
};


/**
 * adds a new effetMagiqueDescription, a new description to effet magique
 */
export const addMalediction = async (item: IMalediction) => {
    const result = await execute<{ affectedRows: number }>(MaledictionQueries.AddMalediction, [
        item.nom, item.description
    ]);
    return result.affectedRows > 0;
};

/**
 * updates effet magique description based on the id provided
 */
export const updateMalediction = async (item: IMalediction) => {
    const result = await execute<{ affectedRows: number }>(MaledictionQueries.UpdateMaledictionById, [
        item.nom, item.description, item.idMalediction
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique description based on the id provided
 */
export const deleteMalediction = async (idMalediction: IMalediction['idMalediction']) => {
    const result = await execute<{ affectedRows: number }>(MaledictionQueries.DeleteMaledictionById, [
        idMalediction
    ]);
    return result.affectedRows > 0;
};
