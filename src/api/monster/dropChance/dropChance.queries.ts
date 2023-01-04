export const DropChanceQueries = {

    GetAllDropChancesForMonsterByidMonstre:
        `SELECT dcb.*, l.libelle, l.poids
         FROM dropchancebis as dcb, loot AS l
         WHERE idMonstre = ?
         AND dcb.idLoot = l.idLoot
         ORDER BY roll`,

    GetDropChanceByidMonstreAndRoll:
        `SELECT *
         FROM dropchancebis
         WHERE idMonstre = ?
         AND roll = ?`,

    AddDropChance:
        `INSERT INTO dropchancebis (idMonstre, roll, idLoot, niveauMonstre, multiplier, diceNumber, dicePower) 
         VALUES (?, ?, ?, NULL, ?, ?, ?)`,

    // https://stackoverflow.com/questions/8899802/how-do-i-do-a-bulk-insert-in-mysql-using-node-js
    AddMultipleDropChances:
        `INSERT INTO dropchancebis (idMonstre, roll, idLoot, niveauMonstre, multiplier, diceNumber, dicePower) 
         VALUES ?`,

    UpdateDropChanceByidMonstreAndRoll:
        `UPDATE dropchancebis 
         SET idLoot = ?,
         niveauMonstre = NULL, multiplier = ?,
         diceNumber = ?, dicePower = ? 
         WHERE idMonstre = ? 
         AND roll = ?`,

    DeleteDropChanceByidMonstreAndRoll:
        `DELETE
         FROM dropchancebis
         WHERE idMonstre = ?
         AND roll = ?`,

    DeleteMultipleDropChancesByidMonstreAndMultipleRolls:
        `DELETE
         FROM dropchancebis
         WHERE idMonstre = ?
         AND roll IN ( ? )`,
}
