export const CompetenceContenuQueries =  {

    GetCompetenceContenuById:
        `SELECT *
         FROM competencecontenu
         WHERE idCompetenceContenu = ?`,

    GetAllCompetenceContenusForCompetenceByidCompetence:
        `SELECT *
         FROM competencecontenu
         WHERE idCompetence = ?
         ORDER BY niveauCompetenceRequis`,

    AddCompetenceContenu:
        `INSERT INTO competencecontenu (idCompetence, niveauCompetenceRequis, contenu)
         VALUES (?, ?, ?)`,

    UpdateCompetencContenueById:
        `UPDATE competencecontenu 
         SET idCompetence = ?, niveauCompetenceRequis = ?, contenu = ?
         WHERE idCompetenceContenu = ?`,

    DeleteCompetenceContenuById:
        `DELETE
         FROM competencecontenu
         WHERE idCompetenceContenu = ?`,

}
