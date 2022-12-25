export const EffetMagiqueUlQueries = {

    GetEffetMagiqueUlById:
        `SELECT *
         FROM effetmagiqueul
         WHERE idEffetMagiqueUl = ?`,

    GetAllUlForEffetMagique:
        `SELECT *
         FROM effetmagiqueul
         WHERE idEffetMagique = ?`,

    AddEffetMagiqueUl:
        `INSERT INTO effetmagiqueul (idEffetMagique, position)
         VALUES (?, ?)`,

    UpdateEffetMagiqueUl:
        `UPDATE effetMagiqueul
         SET idEffetMagique = ?,
             position        = ?
         WHERE idEffetMagiqueUl = ?`,

    DeleteEffetMagiqueUl:
        `DELETE
         FROM effetmagiqueul
         WHERE idEffetMagiqueUl = ?`,

    UpdateEffetMagiqueUlPosition:
        `UPDATE effetmagiqueul
         SET position = position - 1,
         WHERE idEffetMagique = ?
         AND position > ?`,
}
