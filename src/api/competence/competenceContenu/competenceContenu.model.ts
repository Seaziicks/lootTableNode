import {Request} from "express";

export interface ICompetenceContenu {
    idCompetenceContenu: number;
    idCompetence: number;
    niveauCompetenceRequis: number;
    contenu: string;
}

export interface IGetCompetenceContenuReq extends Request<{ idCompetenceContenu: ICompetenceContenu['idCompetenceContenu'] }> {}
export interface IGetAllCompetenceContenuReq extends Request<{ idCompetence: ICompetenceContenu['idCompetence'] }> {}
export interface IAddCompetenceContenuReq extends Request {}
export interface IUpdateCompetenceContenuReq extends Request<{ idCompetenceContenu: ICompetenceContenu['idCompetenceContenu'] }, any, ICompetenceContenu> {}
export interface IDeleteCompetenceContenuReq extends Request<{ idCompetenceContenu: ICompetenceContenu['idCompetenceContenu'] }> {}
