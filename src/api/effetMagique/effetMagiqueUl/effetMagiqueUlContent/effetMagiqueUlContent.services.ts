import {IEffetMagiqueUlContent} from "./effetMagiqueUlContent.model";
import {IEffetMagiqueUl} from "../effetMagiqueUl.model";
import {execute} from "../../../utils/mysql.connector";
import {EffetMagiqueUlContentQueries} from "./effetMagiqueUlContent.queries";

/**
 * gets effet magique ul content by id
 */
export const getEffetMagiqueUlContentById = async (idEffetMagiqueUlContent: IEffetMagiqueUlContent['idEffetMagiqueUlContent']) => {
    return execute<IEffetMagiqueUlContent[]>(EffetMagiqueUlContentQueries.GetEffetMagiqueUlContentById, [idEffetMagiqueUlContent]);
};

export const getAllUlContentForEffetMagiqueUl = async (idEffetMagiqueUl: IEffetMagiqueUl['idEffetMagiqueUl']) => {
    return execute<IEffetMagiqueUlContent[]>(EffetMagiqueUlContentQueries.GetAllUlContentForEffetMagiqueUl, [idEffetMagiqueUl]);
};

/**
 * adds a new effetMagiqueUlContent, a new content (line) to effet magique ul
 */
export const addEffetMagiqueUlContent = async (effetMagiqueUlContent: IEffetMagiqueUlContent) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueUlContentQueries.AddEffetMagiqueUlContent, [
        effetMagiqueUlContent.idEffetMagiqueUl, effetMagiqueUlContent.contenu
    ]);
    return result.affectedRows > 0;
};

/**
 * updates effet magique ul content based on the id provided
 */
export const updateEffetMagiqueUlContent = async (effetMagiqueUlContent: IEffetMagiqueUlContent) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueUlContentQueries.UpdateEffetMagiqueUlContent, [
        effetMagiqueUlContent.idEffetMagiqueUl, effetMagiqueUlContent.contenu, effetMagiqueUlContent.idEffetMagiqueUlContent
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique ul content based on the id provided
 */
export const deleteEffetMagiqueUlContent = async (idEffetMagiqueUlContent: IEffetMagiqueUlContent['idEffetMagiqueUlContent']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueUlContentQueries.DeleteEffetMagiqueUlContent, [
        idEffetMagiqueUlContent
    ]);
    return result.affectedRows > 0;
};
