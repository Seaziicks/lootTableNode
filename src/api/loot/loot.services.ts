import {execute} from "../utils/mysql.connector";
import {LootQueries} from "./loot.queries";
import {ILoot} from "./loot.model";

/**
 * gets all loots, base on id
 */
export const getAllLoots = async () => {
    return execute<ILoot[]>(LootQueries.GetAllLoots, []);
};

/**
 * gets  loot, base on id
 */
export const getLootById = async (idLoot: ILoot['idLoot']) => {
    return execute<ILoot[]>(LootQueries.GetLootById, [idLoot]);
};


/**
 * updates a loot based on the id provided
 */
export const updateLootById = async (loot: ILoot) => {
    const result = await execute<{ affectedRows: number }>(LootQueries.UpdateLootById, [
        loot.libelle, loot.poids, loot.idLoot
    ]);
    return result.affectedRows > 0;
};

