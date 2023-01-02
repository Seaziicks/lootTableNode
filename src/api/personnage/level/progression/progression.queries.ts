export const ProgressionQueries = {

    GetAllProgression:
        `SELECT *
         FROM progressionpersonnage
         ORDER BY niveau`,

    GetProgressionForLevel:
        `SELECT *
         FROM progressionpersonnage
         WHERE niveau = ?`,

    AddProgression:
        `INSERT INTO progressionpersonnage (niveau, statistiques, nombreStatistiques, pointCompetence, nombrePointsCompetences)
         VALUES (?, ?, ?, ?, ?)`,

    UpdateProgressionByLevel:
        `UPDATE progressionpersonnage
         SET statistiques = ?, nombreStatistiques = ?, pointCompetence = ?, nombrePointsCompetences = ?
         WHERE niveau = ?`,

    DeleteProgressionByLevel:
        `DELETE
         FROM progressionpersonnage
         WHERE niveau = ?`,

}
