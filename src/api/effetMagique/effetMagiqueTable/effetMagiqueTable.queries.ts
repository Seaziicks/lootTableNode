export const EffetMagiqueTableQueries = {

    GetEffetMagiqueTableById:
        `SELECT *
         FROM effetmagiquetable
         WHERE idEffetMagiqueTable = ?`,

    GetAllTableForEffetMagique:
        `SELECT *
         FROM effetmagiquetable
         WHERE idEffetMagique = ?`,

    AddEffetMagiqueTable:
        `INSERT INTO effetMagiqueTable (idEffetMagique, position) 
         VALUES (?, ?)`,

    UpdateEffetMagiqueTable:
        `UPDATE effetmagiquetable
         SET idEffetMagique = ?,
             position = ?
        WHERE idEffetMagiqueTable = ?`,

    DeleteEffetMagiqueTable:
        `DELETE
         FROM effetmagiquetable
         WHERE idEffetMagiqueTable = ?`,

    UpdateEffetMagiqueTablePosition:
        `UPDATE effetmagiquetable
         SET position = position - 1,
         WHERE idEffetMagique = ?
         AND position > ?`,

}
