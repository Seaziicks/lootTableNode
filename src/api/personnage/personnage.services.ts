import {execute} from "../utils/mysql.connector";
import {IPersonnage} from "./personnage.model";
import {PersonnageQueries} from "./personnage.queries";
import {IUser} from "../user/user.model";
import Personnage from "../../../models/Personnage";

/**
 * gets active personnages
 */
export const getAllPersonnages = async () => {
    return execute<IPersonnage[]>(PersonnageQueries.GetPersonnages, []);
};

/**
 * gets active personnages
 */
export const getAllPersonnagesWithStatistics = async () => {
    const personnages = await execute<IPersonnage[]>(PersonnageQueries.GetPersonnagesIds, []);
    const allPersonnagesWithStatistiques: Personnage[] = [];
    for (let personnage of personnages) {
        allPersonnagesWithStatistiques.push(await Personnage.getPersonnageWithStatistiquesFromIdPersonnage(personnage.idPersonnage));
    }
    return allPersonnagesWithStatistiques;
};

/**
 * Gets a personnage based on id provided
 */
export const getPersonnageById = async (idPersonnage: IPersonnage['idPersonnage']) => {
    return execute<IPersonnage[]>(PersonnageQueries.GetPersonnageById, [idPersonnage]);
};

/**
 * Gets a personnage based on user id provided
 */
export const getPersonnageByUserId = async (idUser: IUser['idUser']) => {
    return execute<Personnage[]>(PersonnageQueries.GetPersonnageByIdUser, [idUser]);
};

/*
 * Gets all available personnages (not affected to user)
 */
export const getPersonnagesAvailable = async () => {
    return execute<Personnage[]>(PersonnageQueries.GetPersonnagesAvailable, []);
}

/*
 * Find if a personnage name is already used
 */
export const personnageNameExists = async (name: string) => {
    return execute<Personnage[]>(PersonnageQueries.GetPersonnageByName, [
        name
    ]);
}

/**
 * adds a new active personnage record
 */
export const addPersonnage = async (personnage: IPersonnage) => {
    return await execute<{ affectedRows: number, insertId: number }>(PersonnageQueries.AddPersonnage, [
        personnage.nom, personnage.niveau, personnage.niveauEnAttente, personnage.deManaNaturel, personnage.deVitaliteNaturelle
    ]);
};

/**
 * updates personnage based on the id provided
 */
export const updatePersonnage = async (personnage: IPersonnage) => {
    const result = await execute<{ affectedRows: number }>(PersonnageQueries.UpdatePersonnageById, [
        personnage.nom, personnage.niveau, personnage.niveauEnAttente, personnage.deVitaliteNaturelle, personnage.deManaNaturel,
        personnage.idPersonnage
    ]);
    return result.affectedRows > 0;
};

/**
 * delete personnage based on the id provided
 */
export const deletePersonnage = async (idPersonnage: IPersonnage['idPersonnage']) => {
    const result = await execute<{ affectedRows: number }>(PersonnageQueries.DeletePersonnageById, [
        idPersonnage
    ]);
    return result.affectedRows > 0;
};
