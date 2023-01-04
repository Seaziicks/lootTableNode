import * as EffetMagiqueDescriptionService from "../effetMagique/effetMagiqueDescription/effetMagiqueDescription.services";
import * as EffetMagiqueTableService from "../effetMagique/effetMagiqueTable/effetMagiqueTable.services";
import * as EffetMagiqueUlService from "../effetMagique/effetMagiqueUl/effetMagiqueUl.services";
import {IEffetMagiqueDescription} from "../effetMagique/effetMagiqueDescription/effetMagiqueDescription.model";

/**
 * This function is made to update table and ul position on description deletion, for an effet magique.
 * Update only table and ul placed after that description.
 * The way those elements interact together is that description are just displayed one after an other, without explicit positioning.
 * Table and ul, however, have an explicit positioning. Their position indicates when they have to be place.
 * The position number give the description index before which they have to be placed.
 * For example, with an array of 5 description, a table with a position equal to 3 have to be placed after the 3° description.
 * For description index from 0 to n, it has to be place before index + 1.
 * @param effetMagiqueDescription
 */
export async function updateTableAndUlPosition(effetMagiqueDescription: IEffetMagiqueDescription) {
    // We find all descriptions related to that effet magique, to get the order, and find witch table and/or ul has to be updated
    const effetMagiqueDescriptions = await EffetMagiqueDescriptionService.getAllDescriptionForEffetMagique(effetMagiqueDescription.idEffetMagique);
    const position = effetMagiqueDescriptions.findIndex(
        (description) => description.idEffetMagiqueDescription === effetMagiqueDescription.idEffetMagiqueDescription);

    await EffetMagiqueTableService.updateEffetMagiqueTablePosition(effetMagiqueDescription, position);
    await EffetMagiqueUlService.updateEffetMagiqueUlPosition(effetMagiqueDescription, position);
}
