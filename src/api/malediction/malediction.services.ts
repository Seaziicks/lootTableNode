import {execute} from "../utils/mysql.connector";
import {IMalediction} from "./malediction.model";
import {MaledictionQueries} from "./malediction.queries";

/**
 * gets a malediction by id
 */
export const getMaledictionById = async (idMalediction: IMalediction['idMalediction']) => {
    return execute<IMalediction[]>(MaledictionQueries.GetMaledictionById, [idMalediction]);
};


/**
 * adds a new malediction
 */
export const addMalediction = async (malediction: IMalediction) => {
    const result = await execute<{ affectedRows: number }>(MaledictionQueries.AddMalediction, [
        malediction.nom, malediction.description
    ]);
    return result.affectedRows > 0;
};

/**
 * updates malediction based on the id provided
 */
export const updateMalediction = async (malediction: IMalediction) => {
    const result = await execute<{ affectedRows: number }>(MaledictionQueries.UpdateMaledictionById, [
        malediction.nom, malediction.description, malediction.idMalediction
    ]);
    return result.affectedRows > 0;
};

/**
 * delete malediction based on the id provided
 */
export const deleteMalediction = async (idMalediction: IMalediction['idMalediction']) => {
    const result = await execute<{ affectedRows: number }>(MaledictionQueries.DeleteMaledictionById, [
        idMalediction
    ]);
    return result.affectedRows > 0;
};
