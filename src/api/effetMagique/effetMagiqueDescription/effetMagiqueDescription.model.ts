import {Request} from "express";

export interface IEffetMagiqueDescription {
    idEffetMagiqueDescription: number;
    idEffetMagique: number;
    contenu: string;
}
export interface IGetEffetMagiqueDescriptionReq extends Request<{ idEffetMagiqueDescription: IEffetMagiqueDescription['idEffetMagiqueDescription'] }> {}
export interface IAddEffetMagiqueDescriptionReq extends Request{}
export interface IUpdateEffetMagiqueDescriptionReq extends Request<{ idEffetMagiqueDescription: IEffetMagiqueDescription['idEffetMagiqueDescription'] }, any, IEffetMagiqueDescription>{}
export interface IDeleteEffetMagiqueDescriptionReq extends Request<{ idEffetMagiqueDescription: IEffetMagiqueDescription['idEffetMagiqueDescription'] }>{}
