import { Request } from 'express';
import {IPersonnage} from "../personnage/personnage.model";

export interface IUser {
    idUser: number;
    username: string;
    idPersonnage: number;
    isGameMaster: boolean;
    isAdmin: boolean;
}

export interface IGetUserReq extends Request<{ idUser: IUser['idUser'] }> {}
export interface IUserLoginReq extends Request {}
export interface IAddUserReq extends Request {}
export interface IUpdateUserReq extends Request<{ idUser: IUser['idUser'] }, any, User> {}
export interface IDeleteUserReq extends Request<{ idUser: IUser['idUser'] }> {}


export interface User extends IUser {
    idPersonnage: number;
    idUser: number;
    isAdmin: boolean;
    isGameMaster: boolean;
    username: string;
    password: string;
    personnage: IPersonnage;
}
