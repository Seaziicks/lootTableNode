import {execute} from "../utils/mysql.connector";
import {IUser, User} from "./user.model";
import {UserQueries} from "./user.queries";

/**
 * gets user by username and password
 */
export const getUserById = async (idUser: number) => {
    return execute<IUser[]>(UserQueries.GetUserById, [
        idUser
    ]);
};

/**
 * gets user by username and password
 */
export const getUserByUsernameAndPassword = async (username: string, password: string) => {
    return execute<IUser[]>(UserQueries.GetUserByUsernameAndPassword, [
        username, password
    ]);
};

/**
 * Check if username already exists
 */
export const usernameExists = async (username: string) => {
    return execute<IUser[]>(UserQueries.GetUserByUsername, [
        username
    ]);
};

export const addUser = async (user: User) => {
    const result = await execute<{ affectedRows: number }>(UserQueries.AddUser, [
       user.username, user.password, user.idPersonnage, false, false
    ]);
    return result.affectedRows > 0;
}

export const updateUserPassword = async (idUser: number, password: string) => {
    const result = await execute<{ affectedRows: number }>(UserQueries.UpdateUserPassword, [
        password, idUser
    ]);
    return result.affectedRows > 0;
}

export const updateUserUsername = async (idUser: number, password: string) => {
    const result = await execute<{ affectedRows: number }>(UserQueries.UpdateUserUsername, [
        password, idUser
    ]);
    return result.affectedRows > 0;
}

export const deleteUser = async (idUser: number) => {
    const result = await execute<{ affectedRows: number }>(UserQueries.DeleteUser, [
        idUser
    ]);
    return result.affectedRows > 0;
}
