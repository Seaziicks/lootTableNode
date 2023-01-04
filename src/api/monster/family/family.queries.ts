export const MonsterFamilyQueries = {
    GetAllMonsterFamilies:
        `SELECT *
         FROM famillemonstre`,

    GetMonsterFamilyById:
        `SELECT *
         FROM famillemonstre
         WHERE idFamilleMonstre = ?`,

    AddMonsterFamily:
        `INSERT INTO famillemonstre (libelle)
         VALUES (?)`,

    UpdateMonsterFamilyById:
        `UPDATE famillemonstre 
         SET libelle = ? 
         WHERE idFamilleMonstre = ?`,

    DeleteMonsterFamilyById:
        `DELETE
         FROM famillemonstre
         WHERE idFamilleMonstre = ?`
}
