import { Request } from 'express';

export interface IItem {
    idObjet: number;
    idPersonnage: number;
    nom: string;
    fauxNom: string;
    bonus: number;
    type: string;
    prix: number;
    prixNonHumanoide: number;
    devise: string;
    idMalediction: number;
    categorie: string;
    idMateriaux: number;
    taille: string;
    degats: string;
    critique: string;
    facteurPortee: string;
    armure: number;
    bonusDexteriteMax: number;
    malusArmureTests: number;
    risqueEchecSorts: string;
    afficherNom: boolean;
    afficherEffetMagique: boolean;
    afficherMalediction: boolean;
    afficherMateriau: boolean;
    afficherInfos: boolean;
}

export interface IGetItemReq extends Request<{ id: IItem['idObjet'] }> {}
export interface IAddItemReq extends Request{}
export interface IUpdateItemReq extends Request<{ id: IItem['idObjet'] }, any, IItem>{}
export interface IDeleteItemReq extends Request<{ id: IItem['idObjet'] }>{}
