import { execute } from "../utils/mysql.connector";
import { ItemQueries } from "./item.queries";
import { IItem } from "./item.model";
import {IPersonnage} from "../personnage/personnage.model";
import Item from "../../../models/Item";
import {MaledictionQueries} from "../malediction/malediction.queries";
import {MateriauQueries} from "../materiau/materiau.queries";
import * as EffetMagiqueService from "../effetMagique/effetMagique.service";

/**
 * gets active items
 */
export const getItems = async () => {
    return execute<IItem[]>(ItemQueries.GetItems, []);
};

/**
 * gets a item based on id provided
 */
export const getItemById = async (id: IItem['idObjet']) => {
    return execute<IItem[]>(ItemQueries.GetItemById, [id]);
};

/**
 * gets an item name and name display information based on id provided
 */
export const getItemNameOnlyById = async (id: IItem['idObjet']) => {
    return execute<IItem[]>(ItemQueries.GetItemNameOnlyById, [id]);
};

/**
 * gets an item name and name display information based on id provided
 */
export const getAllItemsNamesAndRelatedPersonnage = async (id: IItem['idObjet']) => {
    return execute<IItem[]>(ItemQueries.GetItemsAndNamesOnly, [id]);
};

/**
 * gets all item ids based on idPersonnage provided
 */
export const getItemsIdsForPersonnage = async (id: IPersonnage['idPersonnage']) => {
    return execute<IItem[]>(ItemQueries.getItemsIdsForPersonnage, [id]);
};

/**
 * gets all item ids based on idPersonnage provided
 */
export const getItemsNamesForPersonnage = async (id: IPersonnage['idPersonnage']) => {
    return execute<IItem[]>(ItemQueries.getItemsNamesForPersonnage, [id]);
};

/**
 * adds a new active item record
 */
export const insertItem = async (item: IItem) => {
    const result = await execute<{ affectedRows: number }>(ItemQueries.AddItem, [
        item.idPersonnage, item.nom, item.fauxNom, item.bonus, item.type, item.prix, item.prixNonHumanoide, item.devise,
        item.idMalediction, item.categorie, item.idMateriaux, item.taille, item.degats, item.critique, item.facteurPortee,
        item.armure, item.bonusDexteriteMax, item.malusArmureTests, item.risqueEchecSorts, item.solidite, item.resistance,
        item.afficherNom, item.afficherEffetMagique, item.afficherMalediction, item.afficherMateriau, item.afficherInfos
    ]);
    return result.affectedRows > 0;
};

/**
 * Inserts a new complete item record, with effetmagique, materiau & malediction.
 */
export const addCompleteItem = async (item: Item) => {
    let maledictionResult;
    let materiauResult;

    if (item.malediction) {
        maledictionResult = await execute<{ affectedRows: number, insertId: number }>(MaledictionQueries.AddMalediction, [
            item.malediction.nom, item.malediction.description
        ]);
    } else {
        maledictionResult = {insertId: null};
    }

    if (item.materiau) {
        materiauResult = await execute<{ affectedRows: number, insertId: number }>(MateriauQueries.AddMateriau, [
            item.materiau.nom, item.materiau.effet
        ]);
    } else {
        materiauResult = {insertId: null};
    }

    // @ts-ignore
    item.idMalediction = maledictionResult.insertId;
    // @ts-ignore
    item.idMateriaux = materiauResult.insertId;

    const itemResult = await execute<{ affectedRows: number, insertId: number }>(ItemQueries.AddItem, [
        item.idPersonnage, item.nom, item.fauxNom, item.bonus, item.type, item.prix, item.prixNonHumanoide, item.devise,
        item.idMalediction, item.categorie, item.idMateriaux, item.taille, item.degats, item.critique,
        item.facteurPortee, item.armure, item.bonusDexteriteMax, item.malusArmureTests, item.risqueEchecSorts,
        item.solidite, item.resistance, item.afficherNom, item.afficherEffetMagique, item.afficherMalediction,
        item.afficherMateriau, item.afficherInfos
    ]);

    if (item.effetMagique && item.effetMagique.length > 0) {
        for (let effetMagique of item.effetMagique) {
            await EffetMagiqueService.addCompleteEffetMagique(effetMagique);
        }
    }

    return itemResult.affectedRows > 0;
};

/**
 * updates item information based on the id provided
 */
export const updateItem = async (item: IItem) => {
    const result = await execute<{ affectedRows: number }>(ItemQueries.UpdateItemById, [
        item.idPersonnage, item.nom, item.fauxNom, item.bonus, item.type, item.prix, item.prixNonHumanoide, item.devise,
        item.idMalediction, item.categorie, item.idMateriaux, item.taille, item.degats, item.critique, item.facteurPortee,
        item.armure, item.bonusDexteriteMax, item.malusArmureTests, item.risqueEchecSorts, item.solidite, item.resistance,
        item.afficherNom, item.afficherEffetMagique, item.afficherMalediction, item.afficherMateriau, item.afficherInfos,
        item.idObjet
    ]);
    return result.affectedRows > 0;
};

/**
 * updates item fake name based on the id provided
 */
export const updateItemFakeName = async (item: IItem) => {
    const result = await execute<{ affectedRows: number }>(ItemQueries.UpdateItemById, [
        item.fauxNom, item.idObjet
    ]);
    return result.affectedRows > 0;
}

/**
 * updates item information based on the id provided
 */
export const deleteItem = async (idObjet: IItem['idObjet']) => {
    const result = await execute<{ affectedRows: number }>(ItemQueries.DeleteItemById, [
        idObjet
    ]);
    return result.affectedRows > 0;
};

/**
 * Gets an item, complete with materiau, malediction & effetMagique fulfilled
 */
export const getCompleteItem = async (idObjet: IItem['idObjet']) => {
    return await Item.build((await getItemById(idObjet))[0]);
};
