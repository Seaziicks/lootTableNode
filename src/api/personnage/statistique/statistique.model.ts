import {Request} from "express";

export interface IStatistique {
    libelle: string;
    valeur: number;
}

interface IObjectKeys {
    [key: string]: number;
}

export interface IStatistiques extends IObjectKeys{
    intelligence: number;
    force: number;
    agilite: number;
    sagesse: number;
    constitution: number;
    vitalite: number;
    mana: number;
}

export interface IMonte {
    idPersonnage: number;
    idStatistique: number;
    niveau: number;
    valeur: number;
}

export interface IStatistiqueIdLibelle {
    idStatistique: number;
    libelle: string;
}

export interface IGetStatistiqueReq extends Request<{ idPersonnage: IMonte['idPersonnage'] }> {}
export interface IAddStatistiqueReq extends Request {}
export interface IUpdateStatistiqueReq extends Request<{ idPersonnage: IMonte['idPersonnage'], idStatistique: IMonte['idStatistique'], niveau: number }, any, IMonte>{}
export interface IDeleteStatistiqueReq extends Request<{ idPersonnage: IMonte['idPersonnage'], idStatistique: IMonte['idStatistique'], niveau: number }>{}
