import {execute} from "../utils/mysql.connector";
import {ICompetence} from "./competence.model";
import {CompetenceQueries} from "./competence.queries";

/**
 * Get the active competence, base on the id
 * @param idCompetence
 */
export const getCompetenceById = async (idCompetence: number) => {
    return execute<ICompetence[]>(CompetenceQueries.GetCompetenceById, [
        idCompetence
    ]);
}

/**
 * Get all competences for a personnage, base on idPersonnage
 * @param idPersonnage
 */
export const getAllCompetencesForPersonnageByidPersonnage = async (idPersonnage: number) => {
    return execute<ICompetence[]>(CompetenceQueries.GetAllCompetencesForPersonnageByidPersonnageDescOrder, [
        idPersonnage
    ]);
}

export const getNumberOfAvailableCompetencePointForAllPersonnages = async () => {
    return execute<{idPersonnage: number, availablePoints: number | null}[]>(CompetenceQueries.GetCompetencePointsAvailableForAllPersonnages, []);
}

export const getCompetencePointsAvailableForAPersonnageByidPersonnage = async (idPersonnage: number) => {
    return execute<{idPersonnage: number, availablePoints: number | null}[]>(CompetenceQueries.GetCompetencePointsAvailableForAPersonnageByidPersonnage, [
        idPersonnage
    ]);
}

/**
 * Add a brand new competence !
 * @param competence
 */
export const addCompetence = async (competence: ICompetence) => {
    return await execute<{ affectedRows: number, insertId: number }>(CompetenceQueries.AddCompetence, [
        competence.idPersonnage, competence.idCompetenceParente, competence.titre, competence.niveau,
        competence.icone, competence.etat, competence.optionnelle
    ]);
}

/**
 * Update a competence, base on the idCompetence
 * @param competence
 */
export const updateCompetence = async (competence: ICompetence) => {
    return execute<{ affectedRows: number, insertId: number }>(CompetenceQueries.UpdateCompetenceById, [
        competence.idPersonnage, competence.idCompetenceParente, competence.titre, competence.niveau,
        competence.icone, competence.etat, competence.optionnelle, competence.idCompetence
    ]);
}

/**
 * Delete a competence, base on the idCompetence
 * @param idCompetence
 */
export const deleteCompetence = async (idCompetence: number) => {
    const result = await execute<{ affectedRows: number }>(CompetenceQueries.DeleteCompetenceById, [
        idCompetence
    ]);
    return result.affectedRows > 0;
}
