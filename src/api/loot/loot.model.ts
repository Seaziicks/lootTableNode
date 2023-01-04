import {Request} from "express";

export interface ILoot {
    idLoot: number;
    libelle: string;
    poids: number;
}

export interface IGetLootReq extends Request<{ idLoot: ILoot['idLoot'] }> {}
export interface IAddLootReq extends Request {}
export interface IUpdateLootReq extends Request<{ idLoot: ILoot['idLoot'] }, any, ILoot> {}
export interface IDeleteLootReq extends Request<{ idLoot: ILoot['idLoot'] }> {}
