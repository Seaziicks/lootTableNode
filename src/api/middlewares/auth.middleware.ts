import { Request, Response, NextFunction } from 'express';
import { validateToken, TokenPayload } from '../utils/jwt.utils';

/**
 * middleware to check whether user has access to a specific endpoint
 *
 * @param allowedAccessType list of allowed access types of a specific endpoint
 */
export const authorize = (allowedAccessType: AccessRights) => async (req: Request, res: Response, next: NextFunction) => {
    try {
        let jwt = req.headers.authorization;

        // verify request has token
        if (!jwt) {
            return res.status(401).json({ message: 'Invalid token ' });
        }

        // remove Bearer if using Bearer Authorization mechanism
        if (jwt.toLowerCase().startsWith('bearer')) {
            jwt = jwt.slice('bearer'.length).trim();
        }
        // console.log("Nous avons reçu ce token :");
        // console.log(jwt);

        // verify token hasn't expired yet
        const decodedToken = await validateToken(jwt);
        // console.log(decodedToken);

        // const hasAccessToEndpoint = allowedAccessTypes.some(
        //     (at) => decodedToken.accessTypes.some((uat) => uat === at)
        // );

        const hasAccessToEndpoint = hasBasicRightToAccess(allowedAccessType, decodedToken)

        if (!hasAccessToEndpoint) {
            return res.status(401).json({ message: 'No enough privileges to access endpoint' });
        }

        res.locals.token = decodedToken;

        next();
    } catch (error: any) {
        if (error.name === 'TokenExpiredError') {
            res.status(401).json({ message: 'Expired token' });
            return;
        }

        console.log(error);
        res.status(500).json({ message: 'Failed to authenticate user' });
    }
};

const hasBasicRightToAccess = (accessRight: AccessRights, decodedJwt: TokenPayload) => {
    let hasAccess = false;

    switch (accessRight) {
        case AccessRights.GROUP_MEMBER:
            hasAccess = decodedJwt !== undefined;
            break
        case AccessRights.GAME_MASTER:
            hasAccess = decodedJwt && (decodedJwt.isAdmin || decodedJwt.isGameMaster);
            break
        case AccessRights.ADMIN:
            hasAccess = decodedJwt && decodedJwt.isAdmin;
            break
    }

    return hasAccess;
}

export enum AccessRights {
    GROUP_MEMBER,
    GAME_MASTER,
    ADMIN
}
