export const UserQueries = {
    GetUserByUsername:
        `SELECT *
            FROM user
            WHERE LOWER(username) = LOWER(?)`,

    GetUserByUsernameAndPassword:
        `SELECT *
            FROM user
            WHERE LOWER(username) = LOWER(?)
            AND password = ?`,

    GetUsersById:
        `SELECT *
            FROM objet
            WHERE idObjet = ? `,

    AddUser:
        `INSERT INTO user (username,password, idPersonnage, isGameMaster, isAdmin) 
            VALUES (?, ?, ?, false, false);`,

    UpdateUserPassword:
        `UPDATE user 
            SET password = ? 
            WHERE idUser = ?`,

    UpdateUserPersonnage:
        `UPDATE user 
            SET idPersonnage = ? 
            WHERE idUser = ?`,

    DeleteUser: `DELETE FROM user WHERE idUser = ?`
};
