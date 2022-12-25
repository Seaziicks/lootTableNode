import { execute } from "../utils/mysql.connector";
import { ItemQueries } from "./item.queries";
import { IItem } from "./item.model";
import {IPersonnage} from "../personnage/personnage.model";

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
 * gets a item name and name display information based on id provided
 */
export const getItemNameById = async (id: IItem['idObjet']) => {
    return execute<IItem[]>(ItemQueries.GetItemNameOnlyById, [id]);
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
