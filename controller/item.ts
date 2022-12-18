import {RequestHandler} from "express";
import {IAddItemReq, IGetItemReq} from "../src/api/item/item.model";
// import Item from "../models/Item";

// const Item = require('../models/Item');

// const getConnection = require('../database');
// getConnection(function (err, con) {
//     if (err) { throw err}
//     const userQuery = 'select * from user';
//     console.log("con: " + con); //displays undefined
//     con.query(userQuery,function(err,user){
//         con.release();
//     });
// const database = require('../database');

// database.getConnection((err: any, conn: any) => {
//     conn.query("SELECT * FROM objet WHERE idObjet = ${database}", (error: any, results: any, fields: any) => {
//         // get the results
//         conn.release();
//     });
// })
//
// // @ts-ignore
// exports.getOneObjectById = (req, res, next) => {
//     // @ts-ignore
//     database.getConnection((err, conn) => {
//         conn.query(
//             {
//                 namedPlaceholders: true,
//                 sql: "SELECT * FROM objet WHERE idObjet = :idObjet"
//             },
//             {idObjet: req.body.idObjet},
//             // @ts-ignore
//             (error, results, fields) => {
//                 if (error)
//                     throw error
//                 console.log(results);
//                 console.log(fields);
//                 delete req.body._id;
//                 const item = new Item({
//                     ...results.json()
//                 })
//                 res.status(200).json(results);
//                 conn.release();
//             });
//     })
// }
/**
 * Get item based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
