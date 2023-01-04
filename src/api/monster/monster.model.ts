import {Request} from "express";

export interface IMonster {
    idMonstre: number;
    idFamilleMonstre: number;
    libelle: string;
}

export interface IGetMonsterReq extends Request<{ idMonstre: IMonster['idMonstre'] }> {}
export interface IGetAllMonstersForFamilyReq extends Request<{ idFamilleMonstre: IMonster['idFamilleMonstre'] }> {}
export interface IAddMonsterReq extends Request {}
export interface IUpdateMonsterReq extends Request<{ idMonstre: IMonster['idMonstre'] }, any, IMonster> {}
export interface IDeleteMonsterReq extends Request<{ idMonstre: IMonster['idMonstre'] }> {}
