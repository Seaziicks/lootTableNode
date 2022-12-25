export const MaledictionQueries = {

    GetMaledictionById:
        `SELECT *
         FROM malediction
         WHERE idMalediction = ? `,

    AddMalediction:
        `INSERT INTO malediction (nom, description)
         VALUES (?, ?);`,

    UpdateMaledictionById:
        `UPDATE malediction
         SET nom = ?, description = ?
         WHERE idMalediction = ?`,

    DeleteMaledictionById:
        `DELETE
         FROM malediction
         WHERE idMalediction = ?`
};
