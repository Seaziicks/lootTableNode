import {Request} from "express";

export interface IProgression {
    niveau: number;
    statistiques: boolean;
    nombreStatistiques: number;
    pointCompetence: boolean;
    nombrePointsCompetences: number;
}

export interface IGetProgressionReq extends Request<{ niveau: IProgression['niveau'] }> {}
export interface IGetProgressionForLevelReq extends Request<{ niveau: IProgression['niveau'] }> {}
export interface IAddProgressionReq extends Request {}
export interface IUpdateProgressionReq extends Request<{ niveau: IProgression['niveau'] }, any, IProgression>{}
export interface IDeleteProgressionReq extends Request<{ niveau: IProgression['niveau'] }>{}
