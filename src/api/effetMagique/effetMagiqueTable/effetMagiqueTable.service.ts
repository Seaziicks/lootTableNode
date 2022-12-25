import {IEffetMagiqueDescription} from "../effetMagiqueDescription/effetMagiqueDescription.model";
import {execute} from "../../utils/mysql.connector";
import {EffetMagiqueTableQueries} from "./effetMagiqueTable.queries";
import {IEffetMagique} from "../effetMagique.model";
import {IEffetMagiqueTable} from "./effetMagiqueTable.model";
import {IEffetMagiqueUl} from "../effetMagiqueUl/effetMagiqueUl.model";
import {EffetMagiqueUlQueries} from "../effetMagiqueUl/effetMagiqueUl.queries";
import {addEffetMagiqueUlContent} from "../effetMagiqueUl/effetMagiqueUlContent/effetMagiqueUlContent.service";
import {
    addCompleteEffetMagiqueTableTr,
    getAllCompleteTrForEffetMagiqueTable
} from "./effetMagiqueTableTr/effetMagiqueTableTr.service";
import {
    addCompleteEffetMagiqueTableTitle,
    getAllCompleteTitleForEffetMagiqueTable
} from "./effetMagiqueTableTitle/effetMagiqueTableTitle.service";
import {IEffetMagiqueTableTr} from "./effetMagiqueTableTr/effetMagiqueTableTr.model";
import {EffetMagiqueTableTrQueries} from "./effetMagiqueTableTr/effetMagiqueTableTr.queries";
import {getAllTrContentForEffetMagiqueTableTr} from "./effetMagiqueTableTr/effetMagiqueTableTrContent/effetMagiqueTableTrContent.service";

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
export const addEffetMagiqueTable = async (item: IEffetMagiqueTable) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableQueries.AddEffetMagiqueTable, [
        item.idEffetMagique, item.position
    ]);
    return result.affectedRows > 0;
};

export const addCompleteEffetMagiqueTable = async (item: IEffetMagiqueTable) => {
    const result = await execute<{ affectedRows: number, insertId: number }>(EffetMagiqueTableQueries.AddEffetMagiqueTable, [
        item.idEffetMagique, item.position
    ]);
    // console.log(result);
    for (const tableTitles of item.titles) {
        tableTitles.idEffetMagiqueTable = result.insertId;
        const insertedContent = await addCompleteEffetMagiqueTableTitle(tableTitles);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagiqueTable] : One of the title went badly")
        }
    }
    for (const tableTrs of item.trs) {
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
export const updateEffetMagiqueTable = async (item: IEffetMagiqueTable) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableQueries.UpdateEffetMagiqueTable, [
        item.idEffetMagique, item.position, item.idEffetMagiqueTable
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
export const updateEffetMagiqueTablePosition = async (item: IEffetMagiqueDescription, position: number) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueTableQueries.UpdateEffetMagiqueTablePosition, [
        item.idEffetMagique, position
    ]);
    return result.affectedRows > 0;
};
