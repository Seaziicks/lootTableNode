import {Request} from "express";

export interface IEffetMagiqueUlContent {
    idEffetMagiqueUlContent: number;
    idEffetMagiqueUl: number;
    contenu: string;
}
export interface IGetEffetMagiqueUlContentReq extends Request<{ idEffetMagiqueUlContent: IEffetMagiqueUlContent['idEffetMagiqueUlContent'] }> {}
export interface IAddEffetMagiqueUlContentReq extends Request{}
export interface IUpdateEffetMagiqueUlContentReq extends Request<{ idEffetMagiqueUlContent: IEffetMagiqueUlContent['idEffetMagiqueUlContent'] }, any, IEffetMagiqueUlContent>{}
export interface IDeleteEffetMagiqueUlContentReq extends Request<{ idEffetMagiqueUlContent: IEffetMagiqueUlContent['idEffetMagiqueUlContent'] }>{}
