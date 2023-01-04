export const LootQueries = {

    GetAllLoots:
        `SELECT *
         FROM loot`,

    GetLootById:
        `SELECT *
         FROM loot
         WHERE idLoot = ?`,

    UpdateLootById:
        `UPDATE loot
         SET libelle = ?, poids = ?
         WHERE idLoot = ?`,
}
