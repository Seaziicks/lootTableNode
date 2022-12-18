import {sign, SignOptions, verify, VerifyOptions} from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';
import Personnage from '../../../models/Personnage';
import {IUser} from "../user/user.model";

export interface TokenPayload {
    exp: number;
    username: string;
    idUser: number;
    isGameMaster: boolean;
    isAdmin: boolean;
    personnage: Personnage;
}

/**
 * generates JWT for an user
 */
export async function generateToken(iUser: IUser) {

    const issuedAt = new Date(Date.now());
    const serverName = "BaichooFactoryApi";
    const exp = addMinutes(issuedAt, 7);

    console.log(iUser);

    // information to be encoded in the JWT
    const payload = {
        iat: issuedAt.valueOf(),
        iss: serverName,
        exp: exp.valueOf(),
        username: iUser.username,
        idUser: iUser.idUser,
        isGameMaster: iUser.isGameMaster,
        isAdmin: iUser.isAdmin,
        personnage: await Personnage.getPersonnageFromIdUser(iUser.idUser)
    };

    // read private key value
    const privateKey = {
        key: fs.readFileSync(path.join(__dirname, '../../../private.key')),
        passphrase: "banane00002"
    };

    const signInOptions: SignOptions = {
        // RS256 uses a public/private key pair. The API provides the private key
        // to generate the JWT. The client gets a public key to validate the
        // signature
        algorithm: 'RS256',
        // expiresIn: '1h',
    };

    // generate JWT
    return sign(payload, privateKey, signInOptions);
};

/**
 * generates JWT used for local testing
 */
export async function generateTestToken(){

    const issuedAt = new Date(Date.now());
    const serverName = "BaichooFactoryApi";
    const exp = addMinutes(issuedAt, 60);


    // information to be encoded in the JWT
    const payload = {
        iat: issuedAt.valueOf(),
        iss: serverName,
        exp: exp.valueOf(),
        username: 'Banane00002',
        idUser: 1,
        isGameMaster: false,
        isAdmin: true,
        personnage: await Personnage.getPersonnageFromIdUser(1)
    };

    // read private key value
    const privateKey = {
        key: fs.readFileSync(path.join(__dirname, '../../../private.key')),
        passphrase: "banane00002"
    };

    const signInOptions: SignOptions = {
        // RS256 uses a public/private key pair. The API provides the private key
        // to generate the JWT. The client gets a public key to validate the
        // signature
        algorithm: 'RS256',
        // expiresIn: '1h',
    };

    // generate JWT
    return sign(payload, privateKey, signInOptions);
};

/**
 * checks if JWT token is valid
 *
 * @param token the expected token payload
 */
export function validateToken(token: string): Promise<TokenPayload> {
    const publicKey = fs.readFileSync(path.join(__dirname, './../../../public.key'));

    const verifyOptions: VerifyOptions = {
        algorithms: ['RS256'],
    };

    return new Promise((resolve, reject) => {
        // @ts-ignore
        verify(token, publicKey, verifyOptions, (error, decoded: TokenPayload) => {
            if (error)
                return reject(error);
            resolve(decoded);
        })
    });
}

function addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes*60000);
}
