import {ILoot} from "../../loot/loot.model";
import {Request} from "express";

export interface IDropChance {
    idMonstre: number;
    roll: number;
    idLoot: number;
    loot: ILoot;
    niveauMonstre: number;
    diceNumber: number;
    dicePower: number;
    multiplier: number;
}

export interface IGetDropChanceReq extends Request<{ idMonstre: IDropChance['idMonstre'], roll: IDropChance['roll'] }> {}
export interface IGetAllDropChancesForMonsterReq extends Request<{ idMonstre: IDropChance['idMonstre'] }> {}
export interface IAddDropChanceReq extends Request {}
export interface IAddMultipleDropChanceReq extends Request<{}, any, IDropChance[]> {}
export interface IUpdateDropChanceReq extends Request<{ idMonstre: IDropChance['idMonstre'], roll: IDropChance['roll'] }, any, IDropChance> {}
export interface IUpdateMultipleDropChancesReq extends Request<{}, any, IDropChance[]> {}
export interface IDeleteDropChanceReq extends Request<{ idMonstre: IDropChance['idMonstre'], roll: IDropChance['roll'] }> {}
export interface IDeleteMultipleDropChancesReq extends Request<{ idMonstre: IDropChance['idMonstre'] }, any, IDropChance[]> {}
