export const MateriauQueries = {

    GetMateriauById:
        `SELECT *
         FROM materiaux
         WHERE idMateriaux = ? `,

    GetAllMateriaux:
        `SELECT *
         FROM materiaux`,

    AddMateriau:
        `INSERT INTO materiaux (nom, effet)
         VALUES (?, ?);`,

    UpdateMateriauById:
        `UPDATE materiaux
         SET nom = ?, effet = ?
         WHERE idMateriaux = ?`,

    DeleteMateriauById:
        `DELETE
         FROM materiaux
         WHERE idMateriaux = ?`
};
