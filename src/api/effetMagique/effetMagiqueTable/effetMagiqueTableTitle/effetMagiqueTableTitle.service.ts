import {EffetMagiqueTableTitleQueries} from "./effetMagiqueTableTitle.queries";
import {IEffetMagiqueTableTitle} from "./effetMagiqueTableTitle.model";
import {IEffetMagiqueTable} from "../effetMagiqueTable.model";
import {execute} from "../../../utils/mysql.connector";
import {
    addEffetMagiqueTableTitleContent,
    getAllTitleContentForEffetMagiqueTableTitle
} from "./effetMagiqueTableTitleContent/effetMagiqueTableTitleContent.service";

/**
 * gets effet magique table title  by id
 */
export const getEffetMagiqueTableTitleById = async (idEffetMagiqueTableTitle: IEffetMagiqueTableTitle['idEffetMagiqueTableTitle']) => {
    return execute<IEffetMagiqueTableTitle[]>(EffetMagiqueTableTitleQueries.GetEffetMagiqueTableTitleById, [idEffetMagiqueTableTitle]);
};

export const getAllTableTitleForEffetMagiqueTable = async (idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable']) => {
    return execute<IEffetMagiqueTableTitle[]>(EffetMagiqueTableTitleQueries.GetAllTableTitleForEffetMagiqueTable, [idEffetMagiqueTable]);
};

export const getCompleteEffetMagiqueTableTitleById = async (idEffetMagiqueTableTitle: IEffetMagiqueTableTitle['idEffetMagiqueTableTitle']) => {
    const tableTitles = await execute<IEffetMagiqueTableTitle[]>(EffetMagiqueTableTitleQueries.GetEffetMagiqueTableTitleById, [idEffetMagiqueTableTitle]);
    const tableTitle = tableTitles[0];
    tableTitle.titleContents = await getAllTitleContentForEffetMagiqueTableTitle(tableTitle.idEffetMagiqueTableTitle);
    return tableTitle;
}

export const getAllCompleteTitleForEffetMagiqueTable = async (idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable']) => {
    const tableTitles = await execute<IEffetMagiqueTableTitle[]>(EffetMagiqueTableTitleQueries.GetAllTableTitleForEffetMagiqueTable, [idEffetMagiqueTable]);
    for (const title of tableTitles) {
        title.titleContents = await getAllTitleContentForEffetMagiqueTableTitle(title.idEffetMagiqueTableTitle);
    }
    return tableTitles;
}

/**
 * adds a new effetMagiqueTableTitle, a new line to effet magique table
 */
export const addEffetMagiqueTableTitle = async (item: IEffetMagiqueTableTitle) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTitleQueries.AddEffetMagiqueTableTitle, [
        item.idEffetMagiqueTable
    ]);
    return result.affectedRows > 0;
};

export const addCompleteEffetMagiqueTableTitle = async (item: IEffetMagiqueTableTitle) => {
    const result = await execute<{ affectedRows: number, insertId: number }>(EffetMagiqueTableTitleQueries.AddEffetMagiqueTableTitle, [
        item.idEffetMagiqueTable
    ]);
    // console.log(result);
    for (const tableTitleContent of item.titleContents) {
        tableTitleContent.idEffetMagiqueTableTitle = result.insertId;
        const insertedContent = await addEffetMagiqueTableTitleContent(tableTitleContent);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagiqueTableTitle] : One of the ul content went badly")
        }
    }
    return result.affectedRows > 0;
};

/**
 * updates effet magique table title based on the id provided
 */
export const updateEffetMagiqueTableTitle = async (item: IEffetMagiqueTableTitle) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTitleQueries.UpdateEffetMagiqueTableTitle, [
        item.idEffetMagiqueTable, item.idEffetMagiqueTableTitle
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique table title based on the id provided
 */
export const deleteEffetMagiqueTableTitle = async (idEffetMagiqueTableTitle: IEffetMagiqueTableTitle['idEffetMagiqueTableTitle']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTitleQueries.DeleteEffetMagiqueTableTitle, [
        idEffetMagiqueTableTitle
    ]);
    return result.affectedRows > 0;
};
