import {Request} from "express";
import {IEffetMagiqueTableTrContent} from "./effetMagiqueTableTrContent/effetMagiqueTableTrContent.model";

export interface IEffetMagiqueTableTr {
    idEffetMagiqueTableTr: number;
    idEffetMagiqueTable: number;
    trContents: IEffetMagiqueTableTrContent[];
}
export interface IGetEffetMagiqueTableTrReq extends Request<{ idEffetMagiqueTableTr: IEffetMagiqueTableTr['idEffetMagiqueTableTr'] }> {}
export interface IAddEffetMagiqueTableTrReq extends Request{}
export interface IUpdateEffetMagiqueTableTrReq extends Request<{ idEffetMagiqueTableTr: IEffetMagiqueTableTr['idEffetMagiqueTableTr'] }, any, IEffetMagiqueTableTr>{}
export interface IDeleteEffetMagiqueTableTrReq extends Request<{ idEffetMagiqueTableTr: IEffetMagiqueTableTr['idEffetMagiqueTableTr'] }>{}
