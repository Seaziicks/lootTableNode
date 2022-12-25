import {Request} from "express";

export interface IMalediction {
    idMalediction: number;
    nom: string;
    description: string;
}

export interface IGetMaledictionReq extends Request<{ idMalediction: IMalediction['idMalediction'] }> {}
export interface IAddMaledictionReq extends Request{}
export interface IUpdateMaledictionReq extends Request<{ idMalediction: IMalediction['idMalediction'] }, any, IMalediction>{}
export interface IDeleteMaledictionReq extends Request<{ idMalediction: IMalediction['idMalediction'] }>{}
