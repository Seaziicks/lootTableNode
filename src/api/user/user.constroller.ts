import {Request, RequestHandler, Response} from "express";
import * as ItemService from "../item/item.servive";
import {IUser, IUserLoginReq} from "./user.model";
import * as UserService from "./user.services"
import {getUserByUsernameAndPassword} from "./user.services";
import {generateToken} from "../utils/jwt.utils";
import {IncorrectLoginInfoError, MissingLoginInfoError} from "../utils/customErrors";
import {classicalSpecialResponseError500, sendSpecialResponse} from "../routes";


/**
 * Get active item records
 *
 * @param req IUserLoginReq
 * @param res Express Response
 */
// @ts-ignore
export const userLogin: RequestHandler = async (req: IUserLoginReq, res: Response) => {
    try {
        const queryParams = req.query;
        if (!queryParams.username || !queryParams.password)
            throw new MissingLoginInfoError("Username ou mot de passe manquant.");
        // console.log("username/password :", queryParams);
        const user = await UserService.getUserByUsernameAndPassword(queryParams.username as string, queryParams.password as string);
        // console.log("user :", user[0]);

        if (!user[0])
            throw new IncorrectLoginInfoError("Username ou mot de passe incorrect(s).");

        const jwt = await generateToken(user[0]);
        // console.log(jwt);

        sendSpecialResponse(res,
            200,
            "Qui a demandé un token bien chaud, qui ?!",
            jwt);
    } catch (error) {
        if (error instanceof MissingLoginInfoError || error instanceof IncorrectLoginInfoError) {
            sendSpecialResponse(res,
                403,
                "Désolé, connais pas !",
                error.message);
            return
        }
        console.log(error);
        console.error('[user.controller][login][Error] ', typeof error === 'object' ? JSON.stringify(error) : error);
        classicalSpecialResponseError500(res, "There was an error when fetching items");
    }
};
