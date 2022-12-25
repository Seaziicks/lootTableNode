import {Request} from "express";

export interface IEffetMagiqueTableTrContent {
    idEffetMagiqueTableTrContent: number;
    idEffetMagiqueTableTr: number;
    contenu: string;
}
export interface IGetEffetMagiqueTableTrContentReq extends Request<{ idEffetMagiqueTableTrContent: IEffetMagiqueTableTrContent['idEffetMagiqueTableTrContent'] }> {}
export interface IAddEffetMagiqueTableTrContentReq extends Request{}
export interface IUpdateEffetMagiqueTableTrContentReq extends Request<{ idEffetMagiqueTableTrContent: IEffetMagiqueTableTrContent['idEffetMagiqueTableTrContent'] }, any, IEffetMagiqueTableTrContent>{}
export interface IDeleteEffetMagiqueTableTrContentReq extends Request<{ idEffetMagiqueTableTrContent: IEffetMagiqueTableTrContent['idEffetMagiqueTableTrContent'] }>{}
