import {ICompetenceContenu} from "./competenceContenu.model";
import {CompetenceContenuQueries} from "./competenceContenu.queries";
import {execute} from "../../utils/mysql.connector";

/**
 * Get a competenceContenu, base on the id
 * @param idCompetenceContenu
 */
export const getCompetenceContenuById = async (idCompetenceContenu: number) => {
    return execute<ICompetenceContenu[]>(CompetenceContenuQueries.GetCompetenceContenuById, [
        idCompetenceContenu
    ]);
}

/**
 * Get all competenceContenu for a competence, base on idCompetence
 * @param idCompetence
 */
export const getAllCompetenceContenusForCompetenceByidCompetence = async (idCompetence: number) => {
    return execute<ICompetenceContenu[]>(CompetenceContenuQueries.GetAllCompetenceContenusForCompetenceByidCompetence, [
        idCompetence
    ]);
}

/**
 * Add a brand new competenceContenu !
 * @param competenceContenu
 */
export const addCompetenceContenu = async (competenceContenu: ICompetenceContenu) => {
    return await execute<{ affectedRows: number, insertId: number }>(CompetenceContenuQueries.AddCompetenceContenu, [
        competenceContenu.idCompetence, competenceContenu.niveauCompetenceRequis, competenceContenu.contenu
    ]);
}

/**
 * Update a competenceContenu, base on the idCompetenceContenu
 * @param competenceContenu
 */
export const updateCompetenceContenu = async (competenceContenu: ICompetenceContenu) => {
    return execute<{ affectedRows: number, insertId: number }>(CompetenceContenuQueries.UpdateCompetencContenueById, [
        competenceContenu.idCompetence, competenceContenu.niveauCompetenceRequis, competenceContenu.contenu, competenceContenu.idCompetenceContenu
    ]);
}

/**
 * Delete a competenceContenu, base on the idCompetenceContenu
 * @param idCompetenceContenu
 */
export const deleteCompetenceContenu = async (idCompetenceContenu: number) => {
    const result = await execute<{ affectedRows: number }>(CompetenceContenuQueries.DeleteCompetenceContenuById, [
        idCompetenceContenu
    ]);
    return result.affectedRows > 0;
}
