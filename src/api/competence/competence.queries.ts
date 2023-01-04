export const CompetenceQueries =  {

    GetCompetenceById:
        `SELECT *
         FROM competence
         WHERE idCompetence = ?`,

    GetAllCompetencesForPersonnageByidPersonnage:
        `SELECT *
         FROM competence
         WHERE idPersonnage = ?
         ORDER BY idCompetenceParente`,

    GetAllCompetencesForPersonnageByidPersonnageDescOrder:
        `SELECT *
         FROM competence
         WHERE idPersonnage = ?
         ORDER BY idCompetenceParente DESC`,

    GetCompetencePointsAvailableForAllPersonnages:
        `SELECT p.idPersonnage, (SELECT SUM(pp.nombrePointsCompetences)
                                 FROM progressionpersonnage as pp
                                 WHERE pp.pointCompetence
                                   AND pp.niveau <= (SELECT SUM(niveau) + SUM(niveauEnAttente) FROM personnage WHERE p.idPersonnage = idPersonnage)) - C.Quantity as availablePoints
         FROM personnage as p
                  LEFT JOIN (SELECT idPersonnage, SUM(niveau) AS Quantity FROM competence WHERE niveau > 0 GROUP BY idPersonnage) C ON p.idPersonnage = C.idPersonnage
         GROUP BY p.idPersonnage`,

    GetCompetencePointsAvailableForAPersonnageByidPersonnage:
        `SELECT (SELECT SUM(pp.nombrePointsCompetences)
                 FROM progressionpersonnage as pp
                 WHERE pp.pointCompetence
                   AND pp.niveau <= (SELECT SUM(niveau) + SUM(niveauEnAttente) FROM personnage WHERE p.idPersonnage = idPersonnage)) - C.Quantity as availablePoints
         FROM personnage as p
                  LEFT JOIN (SELECT idPersonnage, SUM(niveau) AS Quantity FROM competence WHERE niveau > 0 GROUP BY idPersonnage) C ON p.idPersonnage = C.idPersonnage
         WHERE p.idPersonnage = 1
         GROUP BY p.idPersonnage`,

    AddCompetence:
        `INSERT INTO competence (idPersonnage, idCompetenceParente, titre, niveau, icone, etat, optionnelle)
         VALUES (?, ?, ?, ?, ?, ?, ?)`,

    UpdateCompetenceById:
        `UPDATE competence 
         SET idPersonnage = ?, idCompetenceParente = ?, titre = ?, niveau = ?,
         icone = ?, etat = ?, optionnelle = ?
         WHERE idCompetence = ?`,

    DeleteCompetenceById:
        `DELETE
         FROM competence
         WHERE idCompetence = ?`,

}
