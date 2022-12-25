export const EffetMagiqueTableTitleContentQueries = {

    GetEffetMagiqueTableTitleContentById:
        `SELECT *
         FROM effetmagiquetabletitlecontent
         WHERE idEffetMagiqueTableTitleContent = ?`,

    GetAllTitleContentForEffetMagiqueTableTitle:
        `SELECT *
         FROM effetmagiquetabletitlecontent
         WHERE idEffetMagiqueTableTitle = ?`,

    AddEffetMagiqueTableTitleContent:
        `INSERT INTO effetmagiquetabletitlecontent (idEffetMagiqueTableTitle, contenu)
         VALUES (?, ?)`,

    UpdateEffetMagiqueTableTitleContent:
        `UPDATE effetMagiqueTableTitleContent
         SET idEffetMagiqueTableTitle = ?,
             contenu        = ?
         WHERE idEffetMagiqueTableTitleContent = ?`,

    DeleteEffetMagiqueTableTitleContent:
        `DELETE
         FROM effetmagiquetabletitlecontent
         WHERE idEffetMagiqueTableTitleContent = ?`,
}
