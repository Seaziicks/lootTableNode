export const EffetMagiqueInfosQueries = {

    GetAllEffetMagiqueInfos:
        `SELECT *
         FROM effetmagiqueinfos
         WHERE idEffetMagique = ?`,

    GetEffetMagiqueInfosById:
        `SELECT *
         FROM effetmagiqueinfos
         WHERE idEffetMagiqueInfos = ?`,

    AddEffetMagiqueInfos:
        `INSERT INTO effetmagiqueinfos (idEffetMagique, contenu)
         VALUES (?, ?)`,

    UpdateEffetMagiqueInfos:
        `UPDATE effetmagiqueinfos
         SET idEffetMagique = ?,
             contenu        = ?
         WHERE idEffetMagiqueInfos = ?`,

    DeleteEffetMagiqueInfos:
        `DELETE
         FROM effetmagiqueinfos
         WHERE idEffetMagiqueInfos = ?`,
}
