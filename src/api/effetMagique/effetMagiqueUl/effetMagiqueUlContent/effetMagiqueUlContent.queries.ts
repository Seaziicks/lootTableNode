export const EffetMagiqueUlContentQueries = {

    GetEffetMagiqueUlContentById:
        `SELECT *
         FROM effetmagiqueulcontent
         WHERE idEffetMagiqueUlContent = ?`,

    GetAllUlContentForEffetMagiqueUl:
        `SELECT *
         FROM effetmagiqueulcontent
         WHERE idEffetMagiqueUl = ?`,

    AddEffetMagiqueUlContent:
        `INSERT INTO effetmagiqueulcontent (idEffetMagiqueUl, contenu)
         VALUES (?, ?)`,

    UpdateEffetMagiqueUlContent:
        `UPDATE effetmagiqueulcontent
         SET idEffetMagiqueUl = ?,
             contenu        = ?
         WHERE idEffetMagiqueUlContent = ?`,

    DeleteEffetMagiqueUlContent:
        `DELETE
         FROM effetmagiqueulcontent
         WHERE idEffetMagiqueUlContent = ?`,
}
