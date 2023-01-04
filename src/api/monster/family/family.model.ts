import {Request} from "express";
import {IMonster} from "../monster.model";

export interface IMonsterFamily {
    idFamilleMonstre: number;
    libelle: string;
    members: IMonster[];
}

export interface IGetMonsterFamilyReq extends Request<{ idFamilleMonstre: IMonsterFamily['idFamilleMonstre'] }> {}
export interface IAddMonsterFamilyReq extends Request {}
export interface IUpdateMonsterFamilyReq extends Request<{ idFamilleMonstre: IMonsterFamily['idFamilleMonstre'] }, any, IMonsterFamily> {}
export interface IDeleteMonsterFamilyReq extends Request<{ idFamilleMonstre: IMonsterFamily['idFamilleMonstre'] }> {}
