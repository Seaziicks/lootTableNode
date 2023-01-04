import {ICompetenceContenu} from "./competenceContenu/competenceContenu.model";
import {Request} from "express";

export interface ICompetence {
    idCompetence: number;
    idPersonnage: number;
    idCompetenceParente: number | null;
    titre: string;
    niveau: number;
    icone: string;
    contenu: ICompetenceContenu[];
    etat: string;
    optionnelle: boolean;
    children: ICompetence[];
}

export interface IGetCompetenceReq extends Request<{ idCompetence: ICompetence['idCompetence'] }> {}
export interface IGetAllCompetencesForPersonnageReq extends Request<{ idPersonnage: ICompetence['idPersonnage'] }> {}
export interface IAddCompetenceReq extends Request {}
export interface IUpdateCompetenceReq extends Request<{ idCompetence: ICompetence['idCompetence'] }, any, ICompetence> {}
export interface IDeleteCompetenceReq extends Request<{ idCompetence: ICompetence['idCompetence'] }> {}
