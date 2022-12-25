import {IItem} from "../item/item.model";
import {IEffetMagique} from "./effetMagique.model";
import {execute} from "../utils/mysql.connector";
import {EffetMagiqueQueries} from "./effetMagique.queries";
import {
    addCompleteEffetMagiqueUl,
    addEffetMagiqueUl,
    getAllUlForEffetMagique
} from "./effetMagiqueUl/effetMagiqueUl.service";
import {
    addEffetMagiqueDescription,
    getAllDescriptionForEffetMagique
} from "./effetMagiqueDescription/effetMagiqueDescription.service";
import {
    addCompleteEffetMagiqueTable,
    addEffetMagiqueTable,
    getAllTableForEffetMagique
} from "./effetMagiqueTable/effetMagiqueTable.service";
import {addEffetMagiqueInfos, getAllInfosForEffetMagique} from "./effetMagiqueInfos/effetMagiqueInfos.service";
import {IEffetMagiqueUl} from "./effetMagiqueUl/effetMagiqueUl.model";
import {EffetMagiqueUlQueries} from "./effetMagiqueUl/effetMagiqueUl.queries";
import {addEffetMagiqueUlContent} from "./effetMagiqueUl/effetMagiqueUlContent/effetMagiqueUlContent.service";

/**
 * gets effet magique
 */
export const getEffetMagiqueById = async (idEffetMagique: IEffetMagique['idEffetMagique']) => {
    return execute<IEffetMagique[]>(EffetMagiqueQueries.GetEffetMagiqueById, [idEffetMagique]);
};

export const getAllEffetMagiqueForItem = async (idObjet: IItem['idObjet']) => {
    return execute<IEffetMagique[]>(EffetMagiqueQueries.GetAllEffetMagiqueForItem, [idObjet]);
};

export const getCompleteEffetMagiqueById = async (idEffetMagique: IEffetMagique['idEffetMagique']) => {
    const effetsMagiques = await execute<IEffetMagique[]>(EffetMagiqueQueries.GetEffetMagiqueById, [idEffetMagique]);
    const effetMagique = effetsMagiques[0];
    effetMagique.effetMagiqueDescription = await getAllDescriptionForEffetMagique(effetMagique.idEffetMagique);
    effetMagique.effetMagiqueTable = await getAllTableForEffetMagique(effetMagique.idEffetMagique);
    effetMagique.effetMagiqueUl = await getAllUlForEffetMagique(effetMagique.idEffetMagique);
    effetMagique.effetMagiqueInfos = await getAllInfosForEffetMagique(effetMagique.idEffetMagique);
    return effetMagique;
}

export const getAllCompleteEffetMagiqueForItem = async (idObjet: IItem['idObjet']) => {
    const effetsMagiques = await execute<IEffetMagique[]>(EffetMagiqueQueries.GetAllEffetMagiqueForItem, [idObjet]);
    for (const effetMagique of effetsMagiques) {
        effetMagique.effetMagiqueDescription = await getAllDescriptionForEffetMagique(effetMagique.idEffetMagique);
        effetMagique.effetMagiqueTable = await getAllTableForEffetMagique(effetMagique.idEffetMagique);
        effetMagique.effetMagiqueUl = await getAllUlForEffetMagique(effetMagique.idEffetMagique);
        effetMagique.effetMagiqueInfos = await getAllInfosForEffetMagique(effetMagique.idEffetMagique);
    }
    return effetsMagiques;
}

/**
 * adds a new effet magique
 */
export const addEffetMagique = async (item: IEffetMagique) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueQueries.AddEffetMagique, [
        item.idObjet, item.title
    ]);
    return result.affectedRows > 0;
};

export const addCompleteEffetMagique = async (item: IEffetMagique) => {
    const result = await execute<{ affectedRows: number, insertId: number }>(EffetMagiqueQueries.AddEffetMagique, [
        item.idObjet, item.title
    ]);
    // console.log(result);
    for (const description of item.effetMagiqueDescription) {
        description.idEffetMagique = result.insertId;
        const insertedContent = await addEffetMagiqueDescription(description);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagique] : One of the description went badly")
        }
    }

    for (const table of item.effetMagiqueTable) {
        table.idEffetMagique = result.insertId;
        const insertedContent = await addCompleteEffetMagiqueTable(table);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagique] : One of the table went badly")
        }
    }

    for (const ul of item.effetMagiqueUl) {
        ul.idEffetMagique = result.insertId;
        const insertedContent = await addCompleteEffetMagiqueUl(ul);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagique] : One of the ul went badly")
        }
    }

    for (const infos of item.effetMagiqueInfos) {
        infos.idEffetMagique = result.insertId;
        const insertedContent = await addEffetMagiqueInfos(infos);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagique] : One of the infos went badly")
        }
    }

    return result.affectedRows > 0;
};

/**
 * updates effet magique based on the id provided
 */
export const updateEffetMagique = async (item: IEffetMagique) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueQueries.UpdateEffetMagique, [
        item.idObjet, item.title, item.idEffetMagique
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique based on the id provided
 */
export const deleteEffetMagique = async (idEffetMagique: IEffetMagique['idEffetMagique']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueQueries.DeleteEffetMagique, [
        idEffetMagique
    ]);
    return result.affectedRows > 0;
};
