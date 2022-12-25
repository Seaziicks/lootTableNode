export const EffetMagiqueTableTitleQueries = {

    GetEffetMagiqueTableTitleById:
        `SELECT *
         FROM effetmagiquetabletitle
         WHERE idEffetMagiqueTableTitle = ?`,

    GetAllTableTitleForEffetMagiqueTable:
        `SELECT *
         FROM effetmagiquetabletitle
         WHERE idEffetMagiqueTable = ?`,

    AddEffetMagiqueTableTitle:
        `INSERT INTO effetmagiquetabletitle (idEffetMagiqueTable)
         VALUES (?)`,

    UpdateEffetMagiqueTableTitle:
        `UPDATE effetmagiquetabletitle
         SET idEffetMagiqueTable = ?
         WHERE idEffetMagiqueTableTitle = ?`,

    DeleteEffetMagiqueTableTitle:
        `DELETE
         FROM effetmagiquetabletitle
         WHERE idEffetMagiqueTableTitle = ?`,
}
