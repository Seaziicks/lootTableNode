export const EffetMagiqueQueries = {

    GetEffetMagiqueById:
        `SELECT *
         FROM effetmagique
         WHERE idEffetMagique = ?`,

    GetAllEffetMagiqueForItem:
        `SELECT *
         FROM effetmagique
         WHERE idObjet = ?`,

    AddEffetMagique:
        `INSERT INTO effetmagique (idObjet, title)
         VALUES (?, ?)`,

    UpdateEffetMagique:
        `UPDATE effetmagique
         SET idObjet = ?,
             title   = ?
         WHERE idEffetMagique = ?`,

    DeleteEffetMagique:
        `DELETE
         FROM effetmagique
         WHERE idEffetMagique = ?`,
}
