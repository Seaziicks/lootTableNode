import {execute} from "../../utils/mysql.connector";
import {StatistiqueQueries} from "./statistique.queries";
import {IMonte, IStatistique, IStatistiqueIdLibelle, IStatistiques} from "./statistique.model";

/**
 * Gets a personnage based on user id provided
 */
export const getAllStatistiquesForPersonnage = async (id: IMonte['idPersonnage']) => {
    return execute<IStatistique[]>(StatistiqueQueries.GetAllStatistiquesForPersonnage, [id]);
};


export const getAllSummedStatistiquesForPersonnageFromPersonnageId = async (idPersonnage: IMonte['idPersonnage']): Promise<IStatistiques> => {
    const allStatistiques: IStatistique[] = await getAllStatistiquesForPersonnage(idPersonnage);
    let summedStatistiques: IStatistiques = {intelligence: 0, force: 0, agilite: 0, sagesse: 0, constitution: 0, vitalite: 0, mana: 0};
    allStatistiques.forEach(function (statistique) {
        if (summedStatistiques.hasOwnProperty(statistique.libelle)) {
            summedStatistiques[statistique.libelle] = summedStatistiques[statistique.libelle] + statistique.valeur;
        }

        if (statistique.libelle === "deVitalite" || statistique.libelle === "vitaliteNaturelle") {
            summedStatistiques["vitalite"] += statistique.valeur;
        } else if (statistique.libelle === "deMana" || statistique.libelle === "manaNaturel") {
            summedStatistiques["mana"] += statistique.valeur;
        }
    });
    return summedStatistiques;
}

export const getStatistiquesIdLibelle = async () => {
    return await execute<IStatistiqueIdLibelle[]>(StatistiqueQueries.GetStatistiquesIdLibelle, []);
}

/**
 * adds a new active statistique record
 */
export const addStatistique = async (statistique: IMonte) => {
    const result = await execute<{ affectedRows: number }>(StatistiqueQueries.AddStatistiqueByNiveauForPersonnage, [
        statistique.idPersonnage, statistique.idStatistique, statistique.niveau, statistique.valeur
    ]);
    return result.affectedRows > 0;
};

/**
 * updates statistique based on the id provided
 */
export const updateStatistique = async (statistique: IMonte) => {
    const result = await execute<{ affectedRows: number }>(StatistiqueQueries.UpdateStatistiqueByNiveauForPersonnage, [
        statistique.valeur, statistique.idPersonnage, statistique.idStatistique, statistique.niveau
    ]);
    return result.affectedRows > 0;
};

/**
 * delete statistique based on the id provided
 */
export const deleteStatistique = async (statistique: IMonte) => {
    const result = await execute<{ affectedRows: number }>(StatistiqueQueries.DeleteStatistiqueByNiveauForPersonnage, [
        statistique.idPersonnage, statistique.idStatistique, statistique.niveau
    ]);
    return result.affectedRows > 0;
};
