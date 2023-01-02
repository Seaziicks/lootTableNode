import {Request} from "express";

export interface IMateriau {
    idMateriaux: number;
    nom: string;
    effet: string;
}

export interface IGetMateriauReq extends Request<{ idMateriaux: IMateriau['idMateriaux'] }> {}
export interface IAddMateriauReq extends Request{}
export interface IUpdateMateriauReq extends Request<{ idMateriaux: IMateriau['idMateriaux'] }, any, IMateriau>{}
export interface IDeleteMateriauReq extends Request<{ idMateriaux: IMateriau['idMateriaux'] }>{}
