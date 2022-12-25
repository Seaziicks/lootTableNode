import {Request} from "express";
import {IEffetMagiqueTableTitle} from "./effetMagiqueTableTitle/effetMagiqueTableTitle.model";
import {IEffetMagiqueTableTr} from "./effetMagiqueTableTr/effetMagiqueTableTr.model";

export interface IEffetMagiqueTable {
    idEffetMagiqueTable: number;
    idEffetMagique: number;
    position: string;
    titles: IEffetMagiqueTableTitle[];
    trs: IEffetMagiqueTableTr[];
}
export interface IGetEffetMagiqueTableReq extends Request<{ idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable'] }> {}
export interface IAddEffetMagiqueTableReq extends Request{}
export interface IUpdateEffetMagiqueTableReq extends Request<{ idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable'] }, any, IEffetMagiqueTable>{}
export interface IDeleteEffetMagiqueTableReq extends Request<{ idEffetMagiqueTable: IEffetMagiqueTable['idEffetMagiqueTable'] }>{}
