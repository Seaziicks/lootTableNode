import {IItem} from "../../item/item.model";
import {IPersonnage} from "../../personnage/personnage.model";
import {IEffetMagiqueDecouvert} from "./effetMagiqueDecouvert.model";
import {EffetMagiqueDecouvertQueries} from "./effetMagiqueDecouvert.queries";
import {execute} from "../../utils/mysql.connector";

/**
 * gets effet magique description
 */
export const getEffetMagiqueDecouvertById = async (idEffetMagiqueDecouvert: IEffetMagiqueDecouvert['idEffetMagiqueDecouvert']) => {
    return execute<IEffetMagiqueDecouvert[]>(EffetMagiqueDecouvertQueries.GetEffetMagiqueDecouvertById, [idEffetMagiqueDecouvert]);
};

export const getAllEffetMagiqueDecouvertForItemByAPersonnage = async (idPersonnage: IPersonnage['idPersonnage'], idObjet: IItem['idObjet']) => {
    return execute<IEffetMagiqueDecouvert[]>(EffetMagiqueDecouvertQueries.GetAllEffetMagiqueDecouvertForItemByAPersonnage, [idPersonnage, idObjet]);
};

export const getAllEffetMagiqueDecouvertForItem = async (idObjet: IItem['idObjet']) => {
    return execute<IEffetMagiqueDecouvert[]>(EffetMagiqueDecouvertQueries.GetAllEffetMagiqueDecouvertForItem, [idObjet]);
};

/**
 * adds a new effetMagiqueDecouvert, a new description to effet magique
 */
export const addEffetMagiqueDecouvert = async (item: IEffetMagiqueDecouvert) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueDecouvertQueries.AddEffetMagiqueDecouvert, [
        item.idPersonnage, item.idObjet, item.effet
    ]);
    return result.affectedRows > 0;
};

/**
 * updates effet magique description based on the id provided
 */
export const updateEffetMagiqueDecouvert = async (item: IEffetMagiqueDecouvert) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueDecouvertQueries.UpdateEffetMagiqueDecouvert, [
        item.effet, item.idEffetMagiqueDecouvert
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique description based on the id provided
 */
export const deleteEffetMagiqueDecouvert = async (idEffetMagiqueDecouvert: IEffetMagiqueDecouvert['idEffetMagiqueDecouvert']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueDecouvertQueries.DeleteEffetMagiqueDecouvert, [
        idEffetMagiqueDecouvert
    ]);
    return result.affectedRows > 0;
};
