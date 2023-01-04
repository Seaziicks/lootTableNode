import {IItem} from "../../item/item.model";
import {IPersonnage} from "../../personnage/personnage.model";
import {IEffetMagiqueDecouvert} from "./effetMagiqueDecouvert.model";
import {EffetMagiqueDecouvertQueries} from "./effetMagiqueDecouvert.queries";
import {execute} from "../../utils/mysql.connector";

/**
 * gets effet magique decouvert
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
 * adds a new effetMagiqueDecouvert, a new decouvert to effet magique
 */
export const addEffetMagiqueDecouvert = async (effetMagiqueDecouvert: IEffetMagiqueDecouvert) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueDecouvertQueries.AddEffetMagiqueDecouvert, [
        effetMagiqueDecouvert.idPersonnage, effetMagiqueDecouvert.idObjet, effetMagiqueDecouvert.effet
    ]);
    return result.affectedRows > 0;
};

/**
 * updates effet magique decouvert based on the id provided
 */
export const updateEffetMagiqueDecouvert = async (effetMagiqueDecouvert: IEffetMagiqueDecouvert) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueDecouvertQueries.UpdateEffetMagiqueDecouvert, [
        effetMagiqueDecouvert.effet, effetMagiqueDecouvert.idEffetMagiqueDecouvert
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique decouvert based on the id provided
 */
export const deleteEffetMagiqueDecouvert = async (idEffetMagiqueDecouvert: IEffetMagiqueDecouvert['idEffetMagiqueDecouvert']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueDecouvertQueries.DeleteEffetMagiqueDecouvert, [
        idEffetMagiqueDecouvert
    ]);
    return result.affectedRows > 0;
};
