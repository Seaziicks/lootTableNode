import {execute} from "../utils/mysql.connector";
import {MonsterQueries} from "./monster.queries";
import {IMonster} from "./monster.model";

/**
 * gets all monsters, base on id
 */
export const getAllMonstersFromFamily = async (idFamilleMonstre: IMonster['idFamilleMonstre']) => {
    return execute<IMonster[]>(MonsterQueries.GetAllMonstersFromFamily, [
        idFamilleMonstre
    ]);
};

/**
 * gets all monsters, base on id
 */
export const getAllMonstersWithoutFamily = async () => {
    return execute<IMonster[]>(MonsterQueries.GetAllMonstersWithoutFamily, []);
};

/**
 * gets  monster, base on id
 */
export const getMonsterById = async (idMonstre: IMonster['idMonstre']) => {
    return execute<IMonster[]>(MonsterQueries.GetMonsterById, [idMonstre]);
};


/**
 * adds a new monster
 */
export const addMonster = async (monster: IMonster) => {
    const result = await execute<{ affectedRows: number }>(MonsterQueries.AddMonster, [
        monster.idFamilleMonstre, monster.libelle,
    ]);
    return result.affectedRows > 0;
};

/**
 * updates a monster based on the id provided
 */
export const updateMonsterById = async (monster: IMonster) => {
    const result = await execute<{ affectedRows: number }>(MonsterQueries.UpdateMonsterById, [
        monster.idFamilleMonstre, monster.libelle, monster.idFamilleMonstre
    ]);
    return result.affectedRows > 0;
};

/**
 * delete a monster based on the id provided
 */
export const deleteMonsterById = async (idMonstre: IMonster['idMonstre']) => {
    const result = await execute<{ affectedRows: number }>(MonsterQueries.DeleteMonsterById, [
        idMonstre
    ]);
    return result.affectedRows > 0;
};
