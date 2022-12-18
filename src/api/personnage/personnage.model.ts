import { Request } from 'express';

export interface IPersonnage {
    idPersonnage: number;
    nom: string;
    niveau: number;
    niveauEnAttente: number;
    intelligence: number;
    force: number;
    agilite: number;
    sagesse: number;
    constitution: number;
    vitalite: number;
    mana: number;
    deVitaliteNaturelle: number;
    deManaNaturel: number;
}

export interface IGetPersonnageReq extends Request<{ id: IPersonnage['idPersonnage'] }> {}
export interface IAddPersonnageReq extends Request{}
export interface IUpdatePersonnageReq extends Request<{ id: IPersonnage['idPersonnage'] }, any, IPersonnage>{}
export interface IDeletePersonnageReq extends Request<{ id: IPersonnage['idPersonnage'] }>{}
