import {Request} from "express";
import {IEffetMagiqueDescription} from "./effetMagiqueDescription/effetMagiqueDescription.model";
import {IEffetMagiqueTable} from "./effetMagiqueTable/effetMagiqueTable.model";
import {IEffetMagiqueUl} from "./effetMagiqueUl/effetMagiqueUl.model";
import {IEffetMagiqueInfos} from "./effetMagiqueInfos/effetMagiqueInfos.model";

export interface IEffetMagique {
    idEffetMagique: number;
    idObjet: number;
    title: string;
    effetMagiqueDescription: IEffetMagiqueDescription[];
    effetMagiqueTable: IEffetMagiqueTable[];
    effetMagiqueUl: IEffetMagiqueUl[];
    effetMagiqueInfos: IEffetMagiqueInfos[];

}
export interface IGetEffetMagiqueReq extends Request<{ idEffetMagique: IEffetMagique['idEffetMagique'] }> {}
export interface IAddEffetMagiqueReq extends Request{}
export interface IUpdateEffetMagiqueReq extends Request<{ idEffetMagique: IEffetMagique['idEffetMagique'] }, any, IEffetMagique>{}
export interface IDeleteEffetMagiqueReq extends Request<{ idEffetMagique: IEffetMagique['idEffetMagique'] }>{}
