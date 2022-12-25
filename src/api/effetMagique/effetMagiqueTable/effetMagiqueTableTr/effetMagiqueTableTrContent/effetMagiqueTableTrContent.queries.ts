export const EffetMagiqueTableTrContentQueries = {

    GetEffetMagiqueTableTrContentById:
        `SELECT *
         FROM effetmagiquetabletrcontent
         WHERE idEffetMagiqueTableTrContent = ?`,

    GetAllTrContentForEffetMagiqueTableTr:
        `SELECT *
         FROM effetmagiquetabletrcontent
         WHERE idEffetMagiqueTableTr = ?`,

    AddEffetMagiqueTableTrContent:
        `INSERT INTO effetmagiquetabletrcontent (idEffetMagiqueTableTr, contenu)
         VALUES (?, ?)`,

    UpdateEffetMagiqueTableTrContent:
        `UPDATE effetmagiquetabletrcontent
         SET idEffetMagiqueTableTr = ?,
             contenu        = ?
         WHERE idEffetMagiqueTableTrContent = ?`,

    DeleteEffetMagiqueTableTrContent:
        `DELETE
         FROM effetmagiquetabletrcontent
         WHERE idEffetMagiqueTableTrContent = ?`,
}
