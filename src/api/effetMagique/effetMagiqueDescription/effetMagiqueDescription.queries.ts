export const EffetMagiqueDescriptionQueries = {

    GetEffetMagiqueDescriptionById:
        `SELECT *
         FROM effetmagiquedescription
         WHERE idEffetMagiqueDescription = ?`,

    GetAllDescriptionForEffetMagique:
        `SELECT *
         FROM effetmagiquedescription
         WHERE idEffetMagique = ?`,

    AddEffetMagiqueDescription:
        `INSERT INTO effetmagiquedescription (idEffetMagique, contenu)
         VALUES (?, ?)`,

    UpdateEffetMagiqueDescription:
        `UPDATE effetmagiquedescription
         SET idEffetMagique = ?,
             contenu        = ?
         WHERE idEffetMagiqueDescription = ?`,

    DeleteEffetMagiqueDescription:
        `DELETE
         FROM effetmagiquedescription
         WHERE idEffetMagiqueDescription = ?`,
}
