import { IEffetMagiqueDescription} from "./effetMagiqueDescription.model";
import {execute} from "../../utils/mysql.connector";
import {EffetMagiqueDescriptionQueries} from "./effetMagiqueDescription.queries";
import {IEffetMagique} from "../effetMagique.model";

/**
 * gets effet magique description
 */
export const getEffetMagiqueDescriptionById = async (idEffetMagiqueDescription: IEffetMagiqueDescription['idEffetMagiqueDescription']) => {
    return execute<IEffetMagiqueDescription[]>(EffetMagiqueDescriptionQueries.GetEffetMagiqueDescriptionById, [idEffetMagiqueDescription]);
};

export const getAllDescriptionForEffetMagique = async (idEffetMagique: IEffetMagique['idEffetMagique']) => {
    return execute<IEffetMagiqueDescription[]>(EffetMagiqueDescriptionQueries.GetAllDescriptionForEffetMagique, [idEffetMagique]);
};

/**
 * adds a new effetMagiqueDescription, a new description to effet magique
 */
export const addEffetMagiqueDescription = async (effetMagiqueDescription: IEffetMagiqueDescription) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueDescriptionQueries.AddEffetMagiqueDescription, [
        effetMagiqueDescription.idEffetMagique, effetMagiqueDescription.contenu
    ]);
    return result.affectedRows > 0;
};

/**
 * updates effet magique description based on the id provided
 */
export const updateEffetMagiqueDescription = async (effetMagiqueDescription: IEffetMagiqueDescription) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueDescriptionQueries.UpdateEffetMagiqueDescription, [
        effetMagiqueDescription.idEffetMagique, effetMagiqueDescription.contenu, effetMagiqueDescription.idEffetMagiqueDescription
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique description based on the id provided
 */
export const deleteEffetMagiqueDescription = async (idEffetMagiqueDescription: IEffetMagiqueDescription['idEffetMagiqueDescription']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueDescriptionQueries.DeleteEffetMagiqueDescription, [
        idEffetMagiqueDescription
    ]);
    return result.affectedRows > 0;
};
