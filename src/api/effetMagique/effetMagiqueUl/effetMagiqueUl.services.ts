import {IEffetMagiqueDescription} from "../effetMagiqueDescription/effetMagiqueDescription.model";
import {execute} from "../../utils/mysql.connector";
import {EffetMagiqueUlQueries} from "./effetMagiqueUl.queries";
import {IEffetMagiqueUl} from "./effetMagiqueUl.model";
import {IEffetMagique} from "../effetMagique.model";
import {
    addEffetMagiqueUlContent,
    getAllUlContentForEffetMagiqueUl
} from "./effetMagiqueUlContent/effetMagiqueUlContent.services";

/**
 * gets effet magique ul  by id
 */
export const getEffetMagiqueUlById = async (idEffetMagiqueUl: IEffetMagiqueUl['idEffetMagiqueUl']) => {
    return execute<IEffetMagiqueUl[]>(EffetMagiqueUlQueries.GetEffetMagiqueUlById, [idEffetMagiqueUl]);
};

export const getAllUlForEffetMagique = async (idEffetMagique: IEffetMagique['idEffetMagique']) => {
    return execute<IEffetMagiqueUl[]>(EffetMagiqueUlQueries.GetAllUlForEffetMagique, [idEffetMagique]);
};

export const getCompleteEffetMagiqueUlById = async (idEffetMagiqueUl: IEffetMagiqueUl['idEffetMagiqueUl']) => {
    const Uls = await execute<IEffetMagiqueUl[]>(EffetMagiqueUlQueries.GetEffetMagiqueUlById, [idEffetMagiqueUl]);
    const Ul = Uls[0];
    Ul.lis = await getAllUlContentForEffetMagiqueUl(Ul.idEffetMagiqueUl);
    return Ul;
}

export const getAllCompleteUlForEffetMagique = async (idEffetMagique: IEffetMagique['idEffetMagique']) => {
    const uls = await execute<IEffetMagiqueUl[]>(EffetMagiqueUlQueries.GetAllUlForEffetMagique, [idEffetMagique]);
    for (const ul of uls) {
        ul.lis = await getAllUlContentForEffetMagiqueUl(ul.idEffetMagiqueUl);
    }
    return uls;
}

/**
 * adds a new effetMagiqueUl, a new list to effet magique
 */
export const addEffetMagiqueUl = async (effetMagiqueUl: IEffetMagiqueUl) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueUlQueries.AddEffetMagiqueUl, [
        effetMagiqueUl.idEffetMagique, effetMagiqueUl.position
    ]);
    return result.affectedRows > 0;
};

export const addCompleteEffetMagiqueUl = async (effetMagiqueUl: IEffetMagiqueUl) => {
    const result = await execute<{ affectedRows: number, insertId: number }>(EffetMagiqueUlQueries.AddEffetMagiqueUl, [
        effetMagiqueUl.idEffetMagique, effetMagiqueUl.position
    ]);
    // console.log(result);
    for (const ulContent of effetMagiqueUl.lis) {
        ulContent.idEffetMagiqueUl = result.insertId;
        const insertedContent = await addEffetMagiqueUlContent(ulContent);
        if (!insertedContent) {
            throw new Error("[addCompleteEffetMagiqueUl] : One of the ul content went badly")
        }
    }
    return result.affectedRows > 0;
};

/**
 * updates effet magique ul based on the id provided
 */
export const updateEffetMagiqueUl = async (effetMagiqueUl: IEffetMagiqueUl) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueUlQueries.UpdateEffetMagiqueUl, [
        effetMagiqueUl.idEffetMagique, effetMagiqueUl.position, effetMagiqueUl.idEffetMagiqueUl
    ]);
    return result.affectedRows > 0;
};

/**
 * delete effet magique ul based on the id provided
 */
export const deleteEffetMagiqueUl = async (idEffetMagiqueUl: IEffetMagiqueUl['idEffetMagiqueUl']) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueUlQueries.DeleteEffetMagiqueUl, [
        idEffetMagiqueUl
    ]);
    return result.affectedRows > 0;
};

/**
 * updates ul position when a description displayed before is deleted.
 */
export const updateEffetMagiqueUlPosition = async (effetMagiqueUl: IEffetMagiqueDescription, position: number) => {
    const result = await execute<{ affectedRows: number }>(EffetMagiqueUlQueries.UpdateEffetMagiqueUlPosition, [
        effetMagiqueUl.idEffetMagique, position
    ]);
    return result.affectedRows > 0;
};
