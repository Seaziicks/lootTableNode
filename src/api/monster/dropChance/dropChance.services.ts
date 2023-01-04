import {execute} from "../../utils/mysql.connector";
import {IDropChance} from "./dropChance.model";
import {DropChanceQueries} from "./dropChance.queries";

/**
 * gets all dropChances, base on id
 */
export const getAllDropChancesForMonsterByidMonstre = async (idMonstre: IDropChance['idMonstre']) => {
    return execute<IDropChance[]>(DropChanceQueries.GetAllDropChancesForMonsterByidMonstre, [
        idMonstre
    ]);
};

/**
 * gets all dropChances, base on id
 */
export const getDropChanceByidMonstreAndRoll = async (idMonstre: IDropChance['idMonstre'], roll: IDropChance['roll']) => {
    return execute<IDropChance[]>(DropChanceQueries.GetDropChanceByidMonstreAndRoll, [
        idMonstre, roll
    ]);
};


/**
 * adds a new dropChance
 */
export const addDropChance = async (dropChance: IDropChance) => {
    const result = await execute<{ affectedRows: number }>(DropChanceQueries.AddDropChance, [
        dropChance.idMonstre, dropChance.roll, dropChance.idLoot, dropChance.multiplier, dropChance.diceNumber, dropChance.dicePower
    ]);
    return result.affectedRows > 0;
};

/**
 * adds a new dropChance
 */
export const addMultipleDropChances = async (dropChances: IDropChance[]) => {
    const values = [];
    for (let dropChance of dropChances) {
        values.push([dropChance.idMonstre, dropChance.roll, dropChance.idLoot, null, dropChance.multiplier, dropChance.diceNumber, dropChance.dicePower]);
    }
    const result = await execute<{ affectedRows: number }>(DropChanceQueries.AddMultipleDropChances, [
        values
    ]);
    return result.affectedRows > 0;
};

/**
 * updates a dropChance based on the id provided
 */
export const updateDropChanceByidMonstreAndRoll = async (dropChance: IDropChance) => {
    const result = await execute<{ affectedRows: number }>(DropChanceQueries.UpdateDropChanceByidMonstreAndRoll, [
        dropChance.idLoot, dropChance.multiplier, dropChance.diceNumber, dropChance.dicePower, dropChance.idMonstre, dropChance.roll
    ]);
    return result.affectedRows > 0;
};

/**
 * updates a dropChance based on the id provided
 */
export const updateMultipleDropChancesByidMonstreAndRoll = async (dropChances: IDropChance[]) => {
    let nbAffectedRows: number = 0;
    for (let dropChance of dropChances) {
        const result = await execute<{ affectedRows: number }>(DropChanceQueries.UpdateDropChanceByidMonstreAndRoll, [
            dropChance.idLoot, dropChance.multiplier, dropChance.diceNumber, dropChance.dicePower, dropChance.idMonstre, dropChance.roll
        ]);
        nbAffectedRows += result.affectedRows;
    }
    return nbAffectedRows > 0;
};

/**
 * delete a dropChance based on the id provided
 */
export const deleteDropChanceByidMonstreAndRoll = async (idMonstre: IDropChance['idMonstre'], roll: IDropChance['roll']) => {
    const result = await execute<{ affectedRows: number }>(DropChanceQueries.DeleteDropChanceByidMonstreAndRoll, [
        idMonstre, roll
    ]);
    return result.affectedRows > 0;
};

/**
 * delete a dropChance based on the id provided
 */
export const deleteMultipleDropChancesByidMonstreAndMultipleRolls = async (idMonstre: IDropChance['idMonstre'], rolls: IDropChance['roll'][]) => {
    const result = await execute<{ affectedRows: number }>(DropChanceQueries.DeleteMultipleDropChancesByidMonstreAndMultipleRolls, [
        idMonstre, rolls
    ]);
    return result.affectedRows > 0;
};
