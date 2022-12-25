import {Request} from "express";

export interface IEffetMagiqueTableTitleContent {
    idEffetMagiqueTableTitleContent: number;
    idEffetMagiqueTableTitle: number;
    contenu: string;
}
export interface IGetEffetMagiqueTableTitleContentReq extends Request<{ idEffetMagiqueTableTitleContent: IEffetMagiqueTableTitleContent['idEffetMagiqueTableTitleContent'] }> {}
export interface IAddEffetMagiqueTableTitleContentReq extends Request{}
export interface IUpdateEffetMagiqueTableTitleContentReq extends Request<{ idEffetMagiqueTableTitleContent: IEffetMagiqueTableTitleContent['idEffetMagiqueTableTitleContent'] }, any, IEffetMagiqueTableTitleContent>{}
export interface IDeleteEffetMagiqueTableTitleContentReq extends Request<{ idEffetMagiqueTableTitleContent: IEffetMagiqueTableTitleContent['idEffetMagiqueTableTitleContent'] }>{}
