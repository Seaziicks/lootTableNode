import {IEffetMagiqueTableTr} from "./effetMagiqueTableTr.model";
import {EffetMagiqueTableTrQueries} from "./effetMagiqueTableTr.queries";
import {IEffetMagiqueTable} from "../effetMagiqueTable.model";
import {execute} from "../../../utils/mysql.connector";
import {
    addEffetMagiqueTableTrContent,
    getAllTrContentForEffetMagiqueTableTr
} from "./effetMagiqueTableTrContent/effetMagiqueTableTrContent.service";

/**
 * gets effet magique table tr  by id
 */
export const getEffetMagiqueTableTrById = async (idEffetMagiqueTableTr: IEffetMagiqueTableTr['idEffetMagiqueTableTr']) => {
    return execute<IEffetMagiqueTableTr[]>(EffetMagiqueTableTrQueries.GetEffetMagiqueTableTrById, [idEffetMagiqueTableTr]);
};

export const getAllTableTrForEffetMagiqueTable = async (idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable']) => {
    return execute<IEffetMagiqueTableTr[]>(EffetMagiqueTableTrQueries.GetAllTableTrForEffetMagiqueTable, [idEffetMagiqueTable]);
};

export const getCompleteEffetMagiqueTableTrById = async (idEffetMagiqueTableTr: IEffetMagiqueTableTr['idEffetMagiqueTableTr']) => {
    const tableTrs = await execute<IEffetMagiqueTableTr[]>(EffetMagiqueTableTrQueries.GetEffetMagiqueTableTrById, [idEffetMagiqueTableTr]);
    const tableTr = tableTrs[0];
    tableTr.trContents = await getAllTrContentForEffetMagiqueTableTr(tableTr.idEffetMagiqueTableTr);
    return tableTr;
}

export const getAllCompleteTrForEffetMagiqueTable = async (idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable']) => {
    const tableTrs = await execute<IEffetMagiqueTableTr[]>(EffetMagiqueTableTrQueries.GetAllTableTrForEffetMagiqueTable, [idEffetMagiqueTable]);
    for (const tr of tableTrs) {
        tr.trContents = await getAllTrContentForEffetMagiqueTableTr(tr.idEffetMagiqueTableTr);
    }
    return tableTrs;
}

/**
 * adds a new effetMagiqueTableTr, a new line to effet magique table
 */
export const addEffetMagiqueTableTr = async (item: IEffetMagiqueTableTr) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTrQueries.AddEffetMagiqueTableTr, [
        item.idEffetMagiqueTable
    ]);
    return result.affectedRows > 0;
};

export const addCompleteEffetMagiqueTableTr = async (item: IEffetMagiqueTableTr) => {
    const result = await execute<{ affectedRows: number, insertId: number }>(EffetMagiqueTableTrQueries.AddEffetMagiqueTableTr, [
        item.idEffetMagiqueTable
    ]);
    // console.log(result);
    for (const tableTrContent of item.trContents) {
        tableTrContent.idEffetMagiqueTableTr = result.insertId;
        const insertedContent = await addEffetMagiqueTableTrContent(tableTrContent);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagiqueTableTr] : One of the ul content went badly")
        }
    }
    return result.affectedRows > 0;
};

/**
 * updates effet magique table tr based on the id provided
 */
export const updateEffetMagiqueTableTr = async (item: IEffetMagiqueTableTr) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTrQueries.UpdateEffetMagiqueTableTr, [
        item.idEffetMagiqueTable, item.idEffetMagiqueTableTr
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique table tr based on the id provided
 */
export const deleteEffetMagiqueTableTr = async (idEffetMagiqueTableTr: IEffetMagiqueTableTr['idEffetMagiqueTableTr']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableTrQueries.DeleteEffetMagiqueTableTr, [
        idEffetMagiqueTableTr
    ]);
    return result.affectedRows > 0;
};
