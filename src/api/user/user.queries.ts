export const UserQueries = {

    GetUserById:
        `SELECT *
         FROM user
         WHERE idUser = ?`,

    GetUserByUsername:
        `SELECT *
         FROM user
         WHERE LOWER(username) = LOWER(?)`,

    GetUserByUsernameAndPassword:
        `SELECT *
         FROM user
         WHERE LOWER(username) = LOWER(?)
         AND password = ?`,


    AddUser:
        `INSERT INTO user (username, password, idPersonnage, isGameMaster, isAdmin) 
         VALUES (?, ?, ?, false, false);`,

    UpdateUserPassword:
        `UPDATE user 
         SET password = ? 
         WHERE idUser = ?`,

    UpdateUserUsername:
        `UPDATE user 
         SET username = ? 
         WHERE idUser = ?`,

    UpdateUserPersonnage:
        `UPDATE user 
         SET idPersonnage = ? 
         WHERE idUser = ?`,

    DeleteUser:
        `DELETE
         FROM user
         WHERE idUser = ?`,
};
