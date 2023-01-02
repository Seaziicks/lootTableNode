export const LevelQueries =  {

    GetNiveauForPersonnage:
        `SELECT niveau, niveauEnAttente
         FROM personnage
         WHERE idPersonnage = ?`,

    GetHighestLevel:
        `SELECT MAX(niveau) as highestLevel
         FROM personnage
         WHERE idPersonnage != 0`,

    GetAllPersonnagesOfThatLevel:
        `SELECT *
         FROM personnage
         WHERE niveau = ?`,

    GetAllStatistiquesByLevelForPersonnage:
        `SELECT s.libelle, m.niveau, m.valeur
         FROM monte as m, statistique as s
         WHERE idPersonnage = ?
         AND m.idStatistique = s.idStatistique
         ORDER BY niveau, m.idStatistique`,

    GetAllStatistiquesByLevel:
        `SELECT *
         FROM monte
         WHERE niveau = ?`,

    UpdateNiveauForPersonnage:
        `UPDATE personnage
         SET niveau = niveau + ?
         WHERE idPersonnage = ?`,

    UpdateNiveauEnAttenteForPersonnage:
        `UPDATE personnage
         SET niveauEnAttente = niveauEnAttente + ?
         WHERE idPersonnage = ?`,

    DeletePersonnageStatistiquesForLevel:
        `DELETE
         FROM monte
         WHERE idPersonnage = ?
         AND niveau = ?`,

    DeleteAllStatistiquesForLevel:
        `DELETE
         FROM monte
         WHERE niveau = ?`,

    LevelUp:
        `UPDATE personnage 
         SET niveau = niveau + 1, niveauEnAttente = niveauEnAttente - 1 
         WHERE idPersonnage = ?`,

    ConvertLevelIntoNiveauEnAttente:
        `UPDATE personnage 
         SET niveau = niveau - 1, niveauEnAttente = niveauEnAttente + 1 
         WHERE idPersonnage = ?`,
}
