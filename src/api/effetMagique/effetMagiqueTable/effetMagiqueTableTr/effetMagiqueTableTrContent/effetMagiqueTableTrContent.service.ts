import {IEffetMagiqueTableTr} from "../effetMagiqueTableTr.model";
import {EffetMagiqueTableTrContentQueries} from "./effetMagiqueTableTrContent.queries";
import {execute} from "../../../../utils/mysql.connector";
import {IEffetMagiqueTableTrContent} from "./effetMagiqueTableTrContent.model";

/**
 * gets effet magique table tr content content by id
 */
export const getEffetMagiqueTableTrContentById = async (idEffetMagiqueTableTrContent: IEffetMagiqueTableTrContent['idEffetMagiqueTableTrContent']) => {
    return execute<IEffetMagiqueTableTrContent[]>(EffetMagiqueTableTrContentQueries.GetEffetMagiqueTableTrContentById, [idEffetMagiqueTableTrContent]);
};

export const getAllTrContentForEffetMagiqueTableTr = async (idEffetMagiqueTableTr: IEffetMagiqueTableTr['idEffetMagiqueTableTr']) => {
    return execute<IEffetMagiqueTableTrContent[]>(EffetMagiqueTableTrContentQueries.GetAllTrContentForEffetMagiqueTableTr, [idEffetMagiqueTableTr]);
};

/**
 * adds a new effetMagiqueTrContent, a new content to effet magique table tr
 */
export const addEffetMagiqueTableTrContent = async (item: IEffetMagiqueTableTrContent) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTrContentQueries.AddEffetMagiqueTableTrContent, [
        item.idEffetMagiqueTableTr, item.contenu
    ]);
    return result.affectedRows > 0;
};

/**
 * updates effet magique table tr content content based on the id provided
 */
export const updateEffetMagiqueTableTrContent = async (item: IEffetMagiqueTableTrContent) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTrContentQueries.UpdateEffetMagiqueTableTrContent, [
        item.idEffetMagiqueTableTr, item.contenu, item.idEffetMagiqueTableTrContent
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique table tr content content based on the id provided
 */
export const deleteEffetMagiqueTableTrContent = async (idEffetMagiqueTableTrContent: IEffetMagiqueTableTrContent['idEffetMagiqueTableTrContent']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTrContentQueries.DeleteEffetMagiqueTableTrContent, [
        idEffetMagiqueTableTrContent
    ]);
    return result.affectedRows > 0;
};
