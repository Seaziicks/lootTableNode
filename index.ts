import express from 'express';
import 'dotenv/config';
import compression from 'compression';
import helmet from 'helmet';
import cors from 'cors';
import {generateTestToken} from './src/api/utils/jwt.utils';
import * as path from 'path';
import routes from './src/api/routes';
import logger from './src/api/middlewares/logger.middleware';
// import errorHandler from './src/api/middlewares/error-handler.middleware';
// import * as MySQLConnector from './database';
import * as MySQLConnector from './src/api/utils/mysql.connector';



const http = require('http');
// const mysql = require('mysql');

const app = express();
const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);
// create database pool
MySQLConnector.init();

// Only generate a token for lower level environments
if (process.env.NODE_ENV !== 'production') {
    generateTestToken().then((token) => {
        console.log("JWT",token);
    })
    // console.log('JWT', generateToken());
}

// serve static files
app.use(express.static(path.join(__dirname, '../public')));
// compresses all the responses
app.use(compression());

// adding set of security middlewares
app.use(helmet());

// parse incoming request body and append data to `req.body`
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// enable all CORS request
app.use(cors());

// add logger middleware
app.use(logger);

app.use('/api', routes);

// add logger middleware
app.use(logger);

// add custom error handler middleware as the last middleware
// app.use(errorHandler);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`)
});
function normalizePort(val: any) {
    const port = parseInt(val, 10);

    if (isNaN(port)) {
        return val;
    }
    if (port >= 0) {
        return port;
    }
    return false;
}



function errorHandler(error: any) {
    if (error.syscall !== 'listen') {
        throw error;
    }
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port: ' + port;
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges.');
            process.exit(1);
            break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use.');
            console.log(error)
            process.exit(1);
            break;
        default:
            throw error;
    }
}

const server = http.createServer(app);

server.on('error', errorHandler);
server.on('listening', () => {
    const address = server.address();
    const bind = typeof address === 'string' ? 'pipe ' + address : 'port ' + port;
    console.log('Listening on ' + bind);
});

// const MongoClient = require('mongodb').MongoClient;
// const url = "mongodb://localhost:27017/newdb";
// MongoClient.connect(url,
//     function (err, db) {
//         if (err) throw err;
//         console.log("Database connected!");
//         db.close();
//     });

// try {
//     const databasePool = mysql.createPool({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "u418341279_lootTable",
//         charset: "utf8mb4",
//         connectionLimit: 10
//     });
//     console.log("Database connected ! Connection id is " + conn.threadId);
// } catch (err) {
//     console.log("Database : Not connected due to error: " + err);
// }
// server.listen(port);
