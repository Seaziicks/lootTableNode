import {execute} from "../../utils/mysql.connector";
import {IEffetMagiqueInfos} from "./effetMagiqueInfos.model";
import {EffetMagiqueInfosQueries} from "./effetMagiqueInfos.queries";
import {IEffetMagique} from "../effetMagique.model";

/**
 * gets effet magique description
 */
export const getEffetMagiqueInfosById = async (idEffetMagiqueInfos: IEffetMagiqueInfos['idEffetMagiqueInfos']) => {
    return execute<IEffetMagiqueInfos[]>(EffetMagiqueInfosQueries.GetEffetMagiqueInfosById, [idEffetMagiqueInfos]);
};

export const getAllInfosForEffetMagique = async (idEffetMagique: IEffetMagique['idEffetMagique']) => {
    return execute<IEffetMagiqueInfos[]>(EffetMagiqueInfosQueries.GetAllEffetMagiqueInfos, [idEffetMagique]);
};

/**
 * adds a new effet magique infos
 */
export const addEffetMagiqueInfos = async (effetMagiqueInfos: IEffetMagiqueInfos) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueInfosQueries.AddEffetMagiqueInfos, [
        effetMagiqueInfos.idEffetMagique, effetMagiqueInfos.contenu
    ]);
    return result.affectedRows > 0;
};

/**
 * updates effet magique infos based on the id provided
 */
export const updateEffetMagiqueInfos = async (effetMagiqueInfos: IEffetMagiqueInfos) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueInfosQueries.UpdateEffetMagiqueInfos, [
        effetMagiqueInfos.idEffetMagique, effetMagiqueInfos.contenu, effetMagiqueInfos.idEffetMagiqueInfos
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique infos based on the id provided
 */
export const deleteEffetMagiqueInfos = async (idEffetMagiqueInfos: IEffetMagiqueInfos['idEffetMagiqueInfos']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueInfosQueries.DeleteEffetMagiqueInfos, [
        idEffetMagiqueInfos
    ]);
    return result.affectedRows > 0;
};
