import {
    IGetItemReq,
    IAddItemReq,
    IUpdateItemReq,
    IDeleteItemReq
} from "./item.model";
import * as ItemService from './item.services';
import {RequestHandler, Request, Response} from "express";
import {IGetPersonnageReq} from "../personnage/personnage.model";
import * as CustomErrors from "../utils/customErrors";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";

/**
 * Get active item records
 *
 * @param req Express Request
 * @param res Express Response
 */
export const getItems: RequestHandler = async (req: Request, res: Response) => {
    try {

        const items = await ItemService.getItems();

        sendSpecialResponse(res,
            200,
            "Ça fait beaucoup, mais voici tout notre catalogue.",
            items);
    } catch (error) {
        console.error('[items.controller][getItems][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};

/**
 * Get item record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getItemById: RequestHandler = async (req: IGetItemReq, res: Response) => {
    try {
        const item = await ItemService.getItemById(req.params.idObjet);

        sendSpecialResponse(res,
            200,
            "Je vous le fais à un prix d'ami !",
            item);
    } catch (error) {
        console.error('[items.controller][getItemById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching item");
    }
};

/**
 * Get item record based on id provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getItemNameOnlyById: RequestHandler = async (req: IGetItemReq, res: Response) => {
    try {
        const item = await ItemService.getItemNameOnlyById(req.params.idObjet);

        sendSpecialResponse(res,
            200,
            "Vous vouliez savoir ce qu'il fait ? Eh bien il faudra payer bien plus !",
            item);
    } catch (error) {
        console.error('[items.controller][getItemNameOnlyById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching item");
    }
};

/**
 * Get all item ids for a personnage based on idPersonnage provided
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getItemsForPersonnage: RequestHandler = async (req: IGetPersonnageReq, res: Response) => {
    try {

        const queryParams = req.query;
        // console.log(queryParams);

        let items;
        let status_message: string;
        if (queryParams.nameOnly && ((queryParams.nameOnly+'').toLowerCase() === 'true')) {
            items = await ItemService.getItemsNamesForPersonnage(req.params.idPersonnage);
            status_message = 'Voici les noms que vous avez commandé.';
        } else if (queryParams.idsOnly && ((queryParams.idsOnly+'').toLowerCase() === 'true')) {
            items = await ItemService.getItemsIdsForPersonnage(req.params.idPersonnage);
            status_message = 'Voici les identifiants de tous nos produits concernant cette catégorie.';
        } else {
            // throw new CustomErrors.BadQueryParameterError("Les items accessibles par idPersonnage ont besoin du paramètre nameOnly ou idsOnly a la valeur true");
            sendSpecialResponse(res,
                400,
                "Les items accessibles par idPersonnage ont besoin du paramètre nameOnly ou idsOnly a la valeur true",
                '');
            return;
        }

        sendSpecialResponse(res,
            200,
            status_message,
            items);
    } catch (error) {
        if (error instanceof CustomErrors.BadQueryParameterError) {
            console.error('[items.controller][getItemsIdsForPersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
            sendSpecialResponse(res,
                400,
                error.message,
                error.message);
        } else {
            console.error('[items.controller][getItemsIdsForPersonnage][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
            classicalSpecialResponseError500(res, "There was an error when fetching item");
        }
    }
};



/**
 * Inserts a new item record
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addItem: RequestHandler = async (req: IAddItemReq, res: Response) => {
    try {
        const result = await ItemService.insertItem(req.body);

        sendSpecialResponse(res,
            201,
            "Oué ... on va s'occuper de ça, vous voulez bien ?.",
            result);
    } catch (error) {
        console.error('[items.controller][addItem][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Inserts a new complete item record, with effetmagique, materiau & malediction.
 *
 * @param req Express Request
 * @param res Express Response
 */
export const addCompleteItem: RequestHandler = async (req: IAddItemReq, res: Response) => {
    try {
        const result = await ItemService.addCompleteItem(req.body);

        sendSpecialResponse(res,
            201,
            "Eh bien, vous voulez vraiment stocker ce déchet, et toute la crasse qui va avec ?",
            result);
    } catch (error) {
        console.error('[items.controller][addCompleteItem][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when adding new item");
    }
};

/**
 * Updates existing item record
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const updateItemById: RequestHandler = async (req: IUpdateItemReq, res: Response) => {
    try {
        const result = await ItemService.updateItem({ ...req.body, idObjet: req.params.idObjet });

        sendSpecialResponse(res,
            200,
            "Je me disais bien que celui-ci était étrange.",
            result);
    } catch (error) {
        console.error('[items.controller][updateItemById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when updating item");
    }
};

/**
 * Updates existing item fake name record
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const updateItemFakeNameById: RequestHandler = async (req: IUpdateItemReq, res: Response) => {
    try {
        const result = await ItemService.updateItemFakeName({ ...req.body, idObjet: req.params.idObjet });

        sendSpecialResponse(res,
            200,
            "En même temps, vu la tête qu'il avait !.",
            result);
    } catch (error) {
        console.error('[items.controller][updateItemFakeNameById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when updating item fake name");
    }
};

/**
 * deletes a item
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const deleteItemById: RequestHandler = async (req: IDeleteItemReq, res: Response) => {
    try {
        const result = await ItemService.deleteItem(req.params.idObjet);

        res.status(200).json({
            result
        });
    } catch (error) {
        console.error('[items.controller][deleteItemById][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when deleting item");
    }
};

/**
 * Gets an item, complete with materiau, malediction & effetMagique fulfilled
 *
 * @param req Express Request
 * @param res Express Response
 */
// @ts-ignore
export const getCompleteItem: RequestHandler = async (req: IGetItemReq, res: Response) => {
    try {
        const result = await ItemService.getCompleteItem(req.params.idObjet);

        res.status(200).json({
            result
        });
    } catch (error) {
        console.log(error)
        console.error('[items.controller][getCompleteItem][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when getting complete item");
    }
};

