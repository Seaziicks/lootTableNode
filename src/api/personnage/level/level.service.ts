import {IStatistiqueParNiveau, Level} from "./level.model";
import {execute} from "../../utils/mysql.connector";
import {LevelQueries} from "./level.queries";
import * as StatistiqueService from '../statistique/statistique.service';
import {getStatistiquesIdLibelle} from "../statistique/statistique.service";
import {IPersonnage} from "../personnage.model";

/**
 * gets active levels for a personnage
 */
export const getDetailedLevelsForPersonnageFromPersonnageId = async (idPersonnage: Level['idPersonnage']) => {
    const allStatistiques: IStatistiqueParNiveau[] = await getAllStatistiquesByLevelForPersonnage(idPersonnage);
    // const allStatistiquesGroupedByNiveau = groupBy(allStatistiques, 'niveau');
    // console.log(allStatistiquesGroupedByNiveau);
    const allStatistiquesGroupedByNiveau = groupStatistiquesByNiveau(allStatistiques, idPersonnage);
    console.log(allStatistiquesGroupedByNiveau);
    return allStatistiquesGroupedByNiveau;
};

export const getAllStatistiquesByLevelForPersonnage = async (idPersonnage: Level['idPersonnage']): Promise<IStatistiqueParNiveau[]> => {
    return execute<IStatistiqueParNiveau[]>(LevelQueries.GetAllStatistiquesByLevelForPersonnage, [idPersonnage]);
};

export const getAllStatistiquesByLevel = async (niveau: Level['niveau']): Promise<IStatistiqueParNiveau[]> => {
    return execute<IStatistiqueParNiveau[]>(LevelQueries.GetAllStatistiquesByLevel, [niveau]);
};

export const getHighestAffectedLevel = async (): Promise<[{ highestLevel: number }]> => {
    return execute<[{ highestLevel: number }]>(LevelQueries.GetHighestLevel, []);
}

export const getAllPersonnageOfThatLevel = async (niveau: Level['niveau']): Promise<IPersonnage[]> => {
    return execute<IPersonnage[]>(LevelQueries.GetAllPersonnagesOfThatLevel, [
       niveau
    ]);
}

export const updateNiveauEnAttente = async (idPersonnage: Level['idPersonnage'], levelGap: number) => {
    const result = await execute<{ affectedRows: number }>(LevelQueries.UpdateNiveauEnAttenteForPersonnage, [
        levelGap, idPersonnage
    ]);
    return result.affectedRows > 0;
}

export const addOneNiveau = async (idPersonnage: Level['idPersonnage']) => {
    const result = await execute<{ affectedRows: number }>(LevelQueries.UpdateNiveauForPersonnage, [
        1, idPersonnage
    ]);
    return result.affectedRows > 0;
}

export const removeOneNiveau = async (idPersonnage: Level['idPersonnage']) => {
    const result = await execute<{ affectedRows: number }>(LevelQueries.UpdateNiveauForPersonnage, [
        -1, idPersonnage
    ]);
    return result.affectedRows > 0;
}

export const addOneNiveauEnAttente = async (idPersonnage: Level['idPersonnage']) => {
    const result = await execute<{ affectedRows: number }>(LevelQueries.UpdateNiveauEnAttenteForPersonnage, [
        1, idPersonnage
    ]);
    return result.affectedRows > 0;
}

export const removeOneNiveauEnAttente = async (idPersonnage: Level['idPersonnage']) => {
    const result = await execute<{ affectedRows: number }>(LevelQueries.UpdateNiveauEnAttenteForPersonnage, [
        -1, idPersonnage
    ]);
    return result.affectedRows > 0;
}

export const deletePersonnageStatistiquesForLevel = async (idPersonnage: Level['idPersonnage'], niveau: Level['niveau']) => {
    const result = await execute<{ affectedRows: number }>(LevelQueries.DeletePersonnageStatistiquesForLevel, [
        idPersonnage, niveau
    ]);
    return result.affectedRows > 0;
}

export const deleteAllStatistiquesForLevel = async (niveau: Level['niveau']): Promise<{affectedRows: number}> => {
    return await execute<{ affectedRows: number }>(LevelQueries.DeleteAllStatistiquesForLevel, [
        niveau
    ]);
}

export const levelUp = async (idPersonnage: Level['idPersonnage']) => {
    const result = await execute<{ affectedRows: number }>(LevelQueries.LevelUp, [
        idPersonnage
    ]);
    return result.affectedRows > 0;
}

export const convertLevelIntoNiveauEnAttente = async (idPersonnage: Level['idPersonnage']) => {
    const result = await execute<{ affectedRows: number }>(LevelQueries.ConvertLevelIntoNiveauEnAttente, [
        idPersonnage
    ]);
    return result.affectedRows > 0;
}


export const addAllLevelStatistiques = async (level: Level) => {
    const statistiquesIdLibelle = await getStatistiquesIdLibelle();
    const missingStatistiques: string[] = [];

    // console.log(level);
    for (let statistiqueIdLibelle of statistiquesIdLibelle) {
        if (level[statistiqueIdLibelle.libelle] === undefined) {
            // console.log(statistiqueIdLibelle.libelle, level[statistiqueIdLibelle.libelle])
            missingStatistiques.push(statistiqueIdLibelle.libelle);
        }
    }
    if (missingStatistiques.length > 0) {
        return missingStatistiques;
    }

    for (let statistiqueIdLibelle of statistiquesIdLibelle) {
        // console.log("Ajout de la stat " + statistiqueIdLibelle.idStatistique +"("+statistiqueIdLibelle.libelle+") avec la valeur " + level[statistiqueIdLibelle.libelle]);
        await StatistiqueService.addStatistique(
            {
                idPersonnage: level.idPersonnage,
                idStatistique: statistiqueIdLibelle.idStatistique,
                niveau: level.niveau,
                valeur: level[statistiqueIdLibelle.libelle]
            });
    }

    return missingStatistiques;
}




function groupStatistiquesByNiveau(allStatistiques: IStatistiqueParNiveau[], idPersonnage: number) {
    const sortedStatistiques: Level[] = [];
    for (let statistiqueByNiveau of allStatistiques) {
        if (sortedStatistiques.findIndex(palier => palier.niveau === statistiqueByNiveau.niveau) === -1) {
            sortedStatistiques.push({idPersonnage: idPersonnage, niveau: statistiqueByNiveau.niveau, intelligence: 0, force: 0, agilite: 0, sagesse: 0,
                constitution: 0, vitalite: 0, deVitalite: 0, vitaliteNaturelle: 0, mana: 0, deMana: 0, manaNaturel: 0})
        }
        sortedStatistiques[sortedStatistiques.findIndex(palier => palier.niveau === statistiqueByNiveau.niveau)][statistiqueByNiveau.libelle] = statistiqueByNiveau.valeur;
    }
    return sortedStatistiques;
}

// const groupBy = function(xs: any[], key: string | number) {
//     return xs.reduce(function(rv, x) {
//         (rv[x[key]] = rv[x[key]] || []).push(x);
//         return rv;
//     }, {});
// };
