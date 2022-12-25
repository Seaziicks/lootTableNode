export const EffetMagiqueDecouvertQueries = {

    GetAllEffetMagiqueDecouvertForItem:
        `SELECT *
         FROM effetdecouvert
         WHERE idObjet = ?`,

    GetAllEffetMagiqueDecouvertForItemByAPersonnage:
        `SELECT *
         FROM effetdecouvert
         WHERE idPersonnage = ?
         AND idObjet = ?`,

    GetEffetMagiqueDecouvertById:
        `SELECT *
         FROM effetdecouvert
         WHERE idEffetMagiqueDecouvert = ?`,

    AddEffetMagiqueDecouvert:
        `INSERT INTO effetdecouvert (idPersonnage, idObjet, effet)
         VALUES (?, ?, ?)`,

    UpdateEffetMagiqueDecouvert:
        `UPDATE effetdecouvert
         SET effet = ?
         WHERE idEffetMagiqueDecouvert = ?`,

    DeleteEffetMagiqueDecouvert:
        `DELETE
         FROM effetdecouvert
         WHERE idEffetMagiqueDecouvert = ?`,
}
