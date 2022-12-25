import {Request} from "express";

export interface IEffetMagiqueDecouvert {
    idEffetMagiqueDecouvert: number;
    idPersonnage: number;
    idObjet: number;
    effet: string;
}
export interface IGetEffetMagiqueDecouvertReq extends Request<{ idEffetMagiqueDecouvert: IEffetMagiqueDecouvert['idEffetMagiqueDecouvert'] }> {}
export interface IGetAllEffetMagiqueDecouvertReq extends Request<{ idPersonnage: IEffetMagiqueDecouvert['idPersonnage'], idObjet: IEffetMagiqueDecouvert['idObjet'] }> {}
export interface IAddEffetMagiqueDecouvertReq extends Request{}
export interface IUpdateEffetMagiqueDecouvertReq extends Request<{ idEffetMagiqueDecouvert: IEffetMagiqueDecouvert['idEffetMagiqueDecouvert'] }, any, IEffetMagiqueDecouvert>{}
export interface IDeleteEffetMagiqueDecouvertReq extends Request<{ idEffetMagiqueDecouvert: IEffetMagiqueDecouvert['idEffetMagiqueDecouvert'] }>{}

