import {execute} from "../utils/mysql.connector";
import {IPersonnage} from "./personnage.model";
import {PersonnageQueries} from "./personnage.queries";
import {IUser} from "../user/user.model";
import Personnage from "../../../models/Personnage";

/**
 * gets active personnages
 */
export const getPersonnages = async () => {
    return execute<IPersonnage[]>(PersonnageQueries.GetPersonnages, []);
};

/**
 * Gets a personnage based on id provided
 */
export const getPersonnageById = async (id: IPersonnage['idPersonnage']) => {
    return execute<IPersonnage[]>(PersonnageQueries.GetPersonnageById, [id]);
};

/**
 * Gets a personnage based on user id provided
 */
export const getPersonnageByUserId = async (id: IUser['idUser']) => {
    return execute<Personnage[]>(PersonnageQueries.GetPersonnageByIdUser, [id]);
};

/**
 * Gets a personnage based on user id provided
 */
export const getAllStatistiquesForPersonnage = async (id: IPersonnage['idPersonnage']) => {
    return execute<Statistique[]>(PersonnageQueries.GetAllStatistiquesForPersonnage, [id]);
};

/*
 * Gets all available personnages (not affected to user)
 */
export const getPersonnagesAvailable = async () => {
    return execute<Personnage[]>(PersonnageQueries.GetPersonnagesAvailable, []);
}


export interface Statistique {
    libelle: string;
    valeur: number;
}

interface IObjectKeys {
    [key: string]: number;
}

export interface IStatistiques extends IObjectKeys{
    intelligence: number;
    agilite: number;
    force: number;
    sagesse: number;
    constitution: number;
    vitalite: number;
    mana: number;
}
