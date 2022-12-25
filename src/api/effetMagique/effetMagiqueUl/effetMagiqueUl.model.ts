import {Request} from "express";
import {IEffetMagiqueUlContent} from "./effetMagiqueUlContent/effetMagiqueUlContent.model";

export interface IEffetMagiqueUl {
    idEffetMagiqueUl: number;
    idEffetMagique: number;
    position: string;
    lis: IEffetMagiqueUlContent[];
}
export interface IGetEffetMagiqueUlReq extends Request<{ idEffetMagiqueUl: IEffetMagiqueUl['idEffetMagiqueUl'] }> {}
export interface IAddEffetMagiqueUlReq extends Request{}
export interface IUpdateEffetMagiqueUlReq extends Request<{ idEffetMagiqueUl: IEffetMagiqueUl['idEffetMagiqueUl'] }, any, IEffetMagiqueUl>{}
export interface IDeleteEffetMagiqueUlReq extends Request<{ idEffetMagiqueUl: IEffetMagiqueUl['idEffetMagiqueUl'] }>{}
