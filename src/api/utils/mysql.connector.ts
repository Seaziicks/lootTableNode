import { createPool, Pool} from 'mysql2';
import { DATA_SOURCES } from '../../../config/var.config';
const dataSource = DATA_SOURCES.mySqlDataSource;

let pool: Pool;

// const databasePool = mysql.createPool({
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "u418341279_lootTable",
//     charset: "utf8mb4",
//     connectionLimit: 10
// });
// console.log("Database connected ! Connection id is " + databasePool.threadId);

/**
 * generates pool connection to be used throughout the app
 */
export const init = () => {
    try {
        pool = createPool({
            host: dataSource.DB_HOST,
            user: dataSource.DB_USER,
            password: dataSource.DB_PASSWORD,
            database: dataSource.DB_DATABASE,
            charset: dataSource.DB_CHARSET,
            connectionLimit: dataSource.DB_CONNECTION_LIMIT
        });

        console.debug('MySql Adapter Pool generated successfully');
        console.log("Connected successfully to database " + dataSource.DB_DATABASE + " !");
    } catch (error) {
        console.error('[mysql.connector][init][Error]: ', error);
        throw new Error('failed to initialized pool');
    }
};



/**
 * executes SQL queries in MySQL db
 *
 * @param {string} query - provide a valid SQL query
 * @param {string[] | Object} params - provide the parameterized values used
 * in the query
 */
export const execute = <T>(query: string, params: string[] | Object): Promise<T> => {
    try {
        if (!pool) throw new Error('Pool was not created. Ensure pool is created when running the app.');

        return new Promise<T>((resolve, reject) => {
            pool.query(query, params, (error, results) => {
                if (error) reject(error);
                else { // @ts-ignore
                    resolve(results);
                }
            });
        });

    } catch (error) {
        console.error('[mysql.connector][execute][Error]: ', error);
        throw new Error('failed to execute MySQL query');
    }
}
// var getConnection = function (cb) {
//     databasePool.getConnection(function (err, connection) {
//         //if(err) throw err;
//         //pass the error to the cb instead of throwing it
//         if(err) {
//             return cb(err);
//         }
//         cb(null, connection);
//     });
// };
// module.exports = getConnection;

// module.exports = {
//     getConnection: (callback: any) => {
//         return databasePool.getConnection(callback);
//     }
// }
