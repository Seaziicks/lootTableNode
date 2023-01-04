import {execute} from "../../utils/mysql.connector";
import {MonsterFamilyQueries} from "./family.queries";
import {IMonsterFamily} from "./family.model";

/**
 * gets all monster families, base on id
 */
export const getAllMonsterFamilies = async () => {
    return execute<IMonsterFamily[]>(MonsterFamilyQueries.GetAllMonsterFamilies, []);
};

/**
 * gets  monster family, base on id
 */
export const getMonsterFamilyById = async (idMonsterFamily: IMonsterFamily['idFamilleMonstre']) => {
    return execute<IMonsterFamily[]>(MonsterFamilyQueries.GetMonsterFamilyById, [idMonsterFamily]);
};


/**
 * adds a new monster family
 */
export const addMonsterFamily = async (monsterFamily: IMonsterFamily) => {
    const result = await execute<{ affectedRows: number }>(MonsterFamilyQueries.AddMonsterFamily, [
        monsterFamily.libelle
    ]);
    return result.affectedRows > 0;
};

/**
 * updates a monster family based on the id provided
 */
export const updateMonsterFamilyById = async (monsterFamily: IMonsterFamily) => {
    const result = await execute<{ affectedRows: number }>(MonsterFamilyQueries.UpdateMonsterFamilyById, [
        monsterFamily.libelle, monsterFamily.idFamilleMonstre
    ]);
    return result.affectedRows > 0;
};

/**
 * delete a monster family based on the id provided
 */
export const deleteMonsterFamilyById = async (idFamilleMonstre: IMonsterFamily['idFamilleMonstre']) => {
    const result = await execute<{ affectedRows: number }>(MonsterFamilyQueries.DeleteMonsterFamilyById, [
        idFamilleMonstre
    ]);
    return result.affectedRows > 0;
};
