import {IEffetMagiqueDescription} from "../effetMagiqueDescription/effetMagiqueDescription.model";
import {execute} from "../../utils/mysql.connector";
import {EffetMagiqueTableQueries} from "./effetMagiqueTable.queries";
import {IEffetMagique} from "../effetMagique.model";
import {IEffetMagiqueTable} from "./effetMagiqueTable.model";
import {
    addCompleteEffetMagiqueTableTr,
    getAllCompleteTrForEffetMagiqueTable
} from "./effetMagiqueTableTr/effetMagiqueTableTr.services";
import {
    addCompleteEffetMagiqueTableTitle,
    getAllCompleteTitleForEffetMagiqueTable
} from "./effetMagiqueTableTitle/effetMagiqueTableTitle.services";

/**
 * gets effet magique ul  by id
 */
export const getEffetMagiqueTableById = async (idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable']) => {
    return execute<IEffetMagiqueTable[]>(EffetMagiqueTableQueries.GetEffetMagiqueTableById, [idEffetMagiqueTable]);
};

export const getAllTableForEffetMagique = async (idEffetMagique: IEffetMagique['idEffetMagique']) => {
    return execute<IEffetMagiqueTable[]>(EffetMagiqueTableQueries.GetAllTableForEffetMagique, [idEffetMagique]);
};

export const getCompleteEffetMagiqueTableById = async (idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable']) => {
    const tables = await execute<IEffetMagiqueTable[]>(EffetMagiqueTableQueries.GetEffetMagiqueTableById, [idEffetMagiqueTable]);
    const table = tables[0];
    table.titles = await getAllCompleteTitleForEffetMagiqueTable(table.idEffetMagiqueTable);
    table.trs = await getAllCompleteTrForEffetMagiqueTable(table.idEffetMagiqueTable);
    return table;
}

export const getAllCompleteTableForEffetMagique = async (idEffetMagique: IEffetMagique['idEffetMagique']) => {
    const tables = await execute<IEffetMagiqueTable[]>(EffetMagiqueTableQueries.GetAllTableForEffetMagique, [idEffetMagique]);
    for(const table of tables) {
        table.titles = await getAllCompleteTitleForEffetMagiqueTable(table.idEffetMagiqueTable);
        table.trs = await getAllCompleteTrForEffetMagiqueTable(table.idEffetMagiqueTable);
    }
    return tables;
}

/**
 * adds a new effetMagiqueTable, a new list to effet magique
 */
export const addEffetMagiqueTable = async (effetMagiqueTable: IEffetMagiqueTable) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableQueries.AddEffetMagiqueTable, [
        effetMagiqueTable.idEffetMagique, effetMagiqueTable.position
    ]);
    return result.affectedRows > 0;
};

export const addCompleteEffetMagiqueTable = async (effetMagiqueTable: IEffetMagiqueTable) => {
    const result = await execute<{ affectedRows: number, insertId: number }>(EffetMagiqueTableQueries.AddEffetMagiqueTable, [
        effetMagiqueTable.idEffetMagique, effetMagiqueTable.position
    ]);
    // console.log(result);
    for (const tableTitles of effetMagiqueTable.titles) {
        tableTitles.idEffetMagiqueTable = result.insertId;
        const insertedContent = await addCompleteEffetMagiqueTableTitle(tableTitles);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagiqueTable] : One of the title went badly")
        }
    }
    for (const tableTrs of effetMagiqueTable.trs) {
        tableTrs.idEffetMagiqueTable = result.insertId;
        const insertedContent = await addCompleteEffetMagiqueTableTr(tableTrs);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagiqueTable] : One of the tr went badly")
        }
    }
    return result.affectedRows > 0;
};

/**
 * updates effet magique ul based on the id provided
 */
export const updateEffetMagiqueTable = async (effetMagiqueTable: IEffetMagiqueTable) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableQueries.UpdateEffetMagiqueTable, [
        effetMagiqueTable.idEffetMagique, effetMagiqueTable.position, effetMagiqueTable.idEffetMagiqueTable
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique ul based on the id provided
 */
export const deleteEffetMagiqueTable = async (idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableQueries.DeleteEffetMagiqueTable, [
        idEffetMagiqueTable
    ]);
    return result.affectedRows > 0;
};

/**
 * updates table position when a description displayed before is deleted.
 */
export const updateEffetMagiqueTablePosition = async (effetMagiqueTable: IEffetMagiqueDescription, position: number) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableQueries.UpdateEffetMagiqueTablePosition, [
        effetMagiqueTable.idEffetMagique, position
    ]);
    return result.affectedRows > 0;
};
