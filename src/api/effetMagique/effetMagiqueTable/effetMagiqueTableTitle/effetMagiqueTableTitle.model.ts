import {Request} from "express";
import {IEffetMagiqueTableTitleContent} from "./effetMagiqueTableTitleContent/effetMagiqueTableTitleContent.model";

export interface IEffetMagiqueTableTitle {
    idEffetMagiqueTableTitle: number;
    idEffetMagiqueTable: number;
    titleContents: IEffetMagiqueTableTitleContent[];
}
export interface IGetEffetMagiqueTableTitleReq extends Request<{ idEffetMagiqueTableTitle: IEffetMagiqueTableTitle['idEffetMagiqueTableTitle'] }> {}
export interface IAddEffetMagiqueTableTitleReq extends Request{}
export interface IUpdateEffetMagiqueTableTitleReq extends Request<{ idEffetMagiqueTableTitle: IEffetMagiqueTableTitle['idEffetMagiqueTableTitle'] }, any, IEffetMagiqueTableTitle>{}
export interface IDeleteEffetMagiqueTableTitleReq extends Request<{ idEffetMagiqueTableTitle: IEffetMagiqueTableTitle['idEffetMagiqueTableTitle'] }>{}
