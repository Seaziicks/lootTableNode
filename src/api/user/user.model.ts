import { Request } from 'express';

export interface IUser {
    idUser: number;
    username: string;
    idPersonnage: number;
    isGameMaster: boolean;
    isAdmin: boolean;
}

export interface IGetUserReq extends Request<{ id: IUser['idUser'] }> {}
export interface IUserLoginReq extends Request{}
export interface IAddUserReq extends Request{}
export interface IUpdateUserReq extends Request<{ id: IUser['idUser'] }, any, IUser>{}
export interface IDeleteUserReq extends Request<{ id: IUser['idUser'] }>{}
