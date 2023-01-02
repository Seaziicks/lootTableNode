export const StatistiqueQueries = {

    GetStatistiquesIdLibelle:
    `SELECT *
     FROM statistique`,

    GetStatistiqueFromLibelle:
        `SELECT idStatistique
         FROM statistique
         WHERE libelle = ?`,

    GetAllStatistiquesForPersonnage:
        `SELECT s.libelle, m.valeur
         FROM personnage as p, monte as m, statistique as s
         WHERE m.idPersonnage = ?
         AND m.idStatistique = s.idStatistique
         AND m.idPersonnage = p.idPersonnage`,

    AddStatistiqueByNiveauForPersonnage:
        `INSERT INTO monte (idPersonnage, idStatistique, niveau, valeur)
         VALUES (?, ?, ?, ?)`,

    UpdateStatistiqueByNiveauForPersonnage:
        `UPDATE monte
         SET valeur = ?
         WHERE idPersonnage = ?
         AND idStatistique = ?
         AND niveau = ?`,

    DeleteStatistiqueByNiveauForPersonnage:
        `DELETE
         FROM monte
         WHERE idPersonnage = ?
         AND idStatistique = ?
         AND niveau = ?`,
}
