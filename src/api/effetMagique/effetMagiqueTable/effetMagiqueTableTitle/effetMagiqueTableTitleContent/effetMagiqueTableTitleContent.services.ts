import {IEffetMagiqueTableTitle} from "../effetMagiqueTableTitle.model";
import {execute} from "../../../../utils/mysql.connector";
import {EffetMagiqueTableTitleContentQueries} from "./effetMagiqueTableTitleContent.queries";
import {IEffetMagiqueTableTitleContent} from "./effetMagiqueTableTitleContent.model";

/**
 * gets effet magique table title content content by id
 */
export const getEffetMagiqueTableTitleContentById = async (idEffetMagiqueTableTitleContent: IEffetMagiqueTableTitleContent['idEffetMagiqueTableTitleContent']) => {
    return execute<IEffetMagiqueTableTitleContent[]>(EffetMagiqueTableTitleContentQueries.GetEffetMagiqueTableTitleContentById, [idEffetMagiqueTableTitleContent]);
};

export const getAllTitleContentForEffetMagiqueTableTitle = async (idEffetMagiqueTableTitle: IEffetMagiqueTableTitle['idEffetMagiqueTableTitle']) => {
    return execute<IEffetMagiqueTableTitleContent[]>(EffetMagiqueTableTitleContentQueries.GetAllTitleContentForEffetMagiqueTableTitle, [idEffetMagiqueTableTitle]);
};

/**
 * adds a new effetMagiqueTitleContent, a new content to effet magique table title
 */
export const addEffetMagiqueTableTitleContent = async (effetMagiqueTableTitleContent: IEffetMagiqueTableTitleContent) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTitleContentQueries.AddEffetMagiqueTableTitleContent, [
        effetMagiqueTableTitleContent.idEffetMagiqueTableTitle, effetMagiqueTableTitleContent.contenu
    ]);
    return result.affectedRows > 0;
};

/**
 * updates effet magique table title content based on the id provided
 */
export const updateEffetMagiqueTableTitleContent = async (effetMagiqueTableTitleContent: IEffetMagiqueTableTitleContent) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTitleContentQueries.UpdateEffetMagiqueTableTitleContent, [
        effetMagiqueTableTitleContent.idEffetMagiqueTableTitle, effetMagiqueTableTitleContent.contenu, effetMagiqueTableTitleContent.idEffetMagiqueTableTitleContent
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique table title content based on the id provided
 */
export const deleteEffetMagiqueTableTitleContent = async (idEffetMagiqueTableTitleContent: IEffetMagiqueTableTitleContent['idEffetMagiqueTableTitleContent']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTitleContentQueries.DeleteEffetMagiqueTableTitleContent, [
        idEffetMagiqueTableTitleContent
    ]);
    return result.affectedRows > 0;
};
