export const EffetMagiqueTableTrQueries = {

    GetEffetMagiqueTableTrById:
        `SELECT *
         FROM effetmagiquetabletr
         WHERE idEffetMagiqueTableTr = ?`,

    GetAllTableTrForEffetMagiqueTable:
        `SELECT *
         FROM effetmagiquetabletr
         WHERE idEffetMagiqueTable = ?`,

    AddEffetMagiqueTableTr:
        `INSERT INTO effetmagiquetabletr (idEffetMagiqueTable)
         VALUES (?)`,

    UpdateEffetMagiqueTableTr:
        `UPDATE effetmagiquetabletr
         SET idEffetMagiqueTable = ?
         WHERE idEffetMagiqueTableTr = ?`,

    DeleteEffetMagiqueTableTr:
        `DELETE
         FROM effetmagiquetabletr
         WHERE idEffetMagiqueTableTr = ?`,
}
