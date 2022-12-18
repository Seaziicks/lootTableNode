import {execute} from "../utils/mysql.connector";
import {IUser} from "./user.model";
import {UserQueries} from "./user.queries";

/**
 * gets active items
 */
export const getUserByUsernameAndPassword = async (username: string, password: string) => {
    return execute<IUser>(UserQueries.GetUserByUsernameAndPassword, [username, password]);
};
