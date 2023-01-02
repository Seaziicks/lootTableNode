import {execute} from "../../../utils/mysql.connector";
import {ProgressionQueries} from "./progression.queries";
import {IProgression} from "./progression.model";

/**
 * Gets all progression for levels
 */
export const getAllProgressions = async () => {
    return execute<IProgression[]>(ProgressionQueries.GetAllProgression, []);
};

/**
 * Gets  progression for a specific level
 */
export const getProgressionForLevel = async (niveau: IProgression['niveau']) => {
    return execute<IProgression[]>(ProgressionQueries.GetProgressionForLevel, [
        niveau
    ]);
};

/**
 * Add a new progression level
 */
export const addProgression = async (progression: IProgression) => {
    const result = await execute<{ affectedRows: number }>(ProgressionQueries.AddProgression, [
        progression.niveau, progression.statistiques, progression.nombreStatistiques, progression.pointCompetence,
        progression.nombrePointsCompetences
    ]);
    return result.affectedRows > 0;
};

/**
 * Update  progression for a specific level
 */
export const updateProgression = async (progression: IProgression) => {
    const result = await execute<{ affectedRows: number }>(ProgressionQueries.UpdateProgressionByLevel, [
        progression.statistiques, progression.nombreStatistiques, progression.pointCompetence, progression.nombrePointsCompetences,
        progression.niveau
    ]);
    return result.affectedRows > 0;
};

/**
 * Delete  progression for a specific level
 */
export const deleteProgression = async (niveau: IProgression['niveau']) => {
    const result = await execute<{ affectedRows: number }>(ProgressionQueries.DeleteProgressionByLevel, [
        niveau
    ]);
    return result.affectedRows > 0;
};
