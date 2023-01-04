export const MonsterQueries = {

    GetAllMonsters:
        `SELECT *
         FROM monstre`,

    GetAllMonstersFromFamily:
        `SELECT *
         FROM monstre
         WHERE idFamilleMonstre = ?`,

    GetAllMonstersWithoutFamily:
        `SELECT *
         FROM monstre
         WHERE idFamilleMonstre IS NULL`,

    GetMonsterById:
        `SELECT *
         FROM monstre
         WHERE idMonstre = ?`,

    AddMonster:
        `INSERT INTO monstre (idFamilleMonstre, libelle)
         VALUES (?, ?)`,

    UpdateMonsterById:
        `UPDATE monstre 
         SET idFamilleMonstre = ?, libelle = ?
         WHERE idMonstre = ?`,

    DeleteMonsterById:
        `DELETE
         FROM monstre
         WHERE idMonstre = ?`,
}
