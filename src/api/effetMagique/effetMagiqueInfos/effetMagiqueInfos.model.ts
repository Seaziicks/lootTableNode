import {Request} from "express";

export interface IEffetMagiqueInfos {
    idEffetMagiqueInfos: number;
    idEffetMagique: number;
    contenu: string;
}
export interface IGetEffetMagiqueInfoReq extends Request<{ idEffetMagiqueInfos: IEffetMagiqueInfos['idEffetMagiqueInfos'] }> {}
export interface IAddEffetMagiqueInfoReq extends Request{}
export interface IUpdateEffetMagiqueInfoReq extends Request<{ idEffetMagiqueInfos: IEffetMagiqueInfos['idEffetMagiqueInfos'] }, any, IEffetMagiqueInfos>{}
export interface IDeleteEffetMagiqueInfoReq extends Request<{ idEffetMagiqueInfos: IEffetMagiqueInfos['idEffetMagiqueInfos'] }>{}
