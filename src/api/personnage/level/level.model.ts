import {IStatistique, IStatistiques} from "../statistique/statistique.model";
import {Request} from "express";
import Personnage from "../../../../models/Personnage";

export interface IStatistiqueParNiveau extends IStatistique{
    niveau: number;
}

export interface Level extends IStatistiques {
    idPersonnage: number;
    niveau: number;
    deVitalite: number;
    vitaliteNaturelle: number;
    deMana: number;
    manaNaturel: number;
}

export function getNbStatistiquesForLevel(level: Level) {
    return level.mana + level.vitalite + level.constitution + level.sagesse + level.intelligence + level.agilite + level.force;
}

/**
 * Calculate natural vitality for that level.
 * Formula is (Constitution - 10) / 2, with a minimum of 0.
 * In the current formula, we take the constitution from the arriving level, to be nicer.
 * @param personnage
 * @param level
 */
export function getNaturalVitalityFromPersonnageAndLevel(personnage: Personnage, level: Level) {
    return Math.max(0, Math.floor((((personnage.constitution + level.constitution) / 10) / 2)));
}

/**
 * Calculate natural mana for that level.
 * Formula is unknown, with a minimum of 0.
 * @param personnage
 * @param level
 */
export function getNaturalManaFromPersonnageAndLevel(personnage: Personnage, level: Level) {
    return 0;
}



export interface IGetLevelReq extends Request<{ idPersonnage: Level['idPersonnage'] }> {}
export interface IAddLevelReq extends Request {}
export interface ILevelUpReq extends Request<{ idPersonnage: Level['idPersonnage'] }> {}
export interface IUpdateLevelReq extends Request<{ idPersonnage: Level['idPersonnage'], idStatistique: Level['idStatistique'], level: number }, any, Level>{}
export interface IUpdateWaitingLevelReq extends Request<{ idPersonnage: Level['idPersonnage'], idStatistique: Level['idStatistique'] }, any, { levelGap: number }>{}
export interface IRemoveLevelReq extends Request<{ idPersonnage: Level['idPersonnage'] }, any, Level>{}
export interface IDeleteLevelReq extends Request<{ idPersonnage: Level['idPersonnage'], idStatistique: Level['idStatistique'], level: number }>{}
