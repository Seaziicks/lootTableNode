import {JwtPayload, Secret, sign, SignOptions, verify, VerifyErrors, VerifyOptions} from 'jsonwebtoken';
import * as fs from 'fs';
import * as path from 'path';
import Personnage from '../../../models/Personnage';
import {IUser} from "../user/user.model";

export interface TokenPayload extends JwtPayload{
    iat: number;
    iss: string;
    exp: number;
    username: string;
    idUser: number;
    isGameMaster: boolean;
    isAdmin: boolean;
    idPersonnage: number;
    personnage: Personnage;
}

/**
 * generates JWT for an user
 */
export async function generateToken(iUser: IUser) {

    const issuedAt = new Date(Date.now());
    const serverName = "BaichooFactoryApi";
    const exp = addMinutes(issuedAt, 60);

    console.log(iUser);

    // information to be encoded in the JWT. Don't use nbf, a lot of trouble for nothing.
    const payload: TokenPayload = {
        iat: issuedAt.valueOf(),
        iss: serverName,
        exp: exp.valueOf(),
        idUser: iUser.idUser,
        username: iUser.username,
        isGameMaster: iUser.isGameMaster,
        isAdmin: iUser.isAdmin,
        idPersonnage: iUser.idPersonnage,
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
}

/**
 * generates JWT used for local testing
 */
export async function generateTestToken(){

    const issuedAt = new Date(Date.now());
    const serverName = "BaichooFactoryApi";
    const exp = addMinutes(issuedAt, 60);


    // information to be encoded in the JWT
    const payload: TokenPayload = {
        iat: issuedAt.valueOf(),
        iss: serverName,
        exp: exp.valueOf(),
        username: 'Banane00002',
        idUser: 1,
        isGameMaster: false,
        isAdmin: true,
        idPersonnage: 1,
        personnage: await Personnage.getPersonnageFromIdUser(1)
    };

    // read private key value
    const privateKey = {
        key: fs.readFileSync(path.join(__dirname, '../../../private.key')),
        passphrase: "banane00002"
    };

    const signInOptions: SignOptions = {
        // RS256 uses a public/private key pair. The API provides the private key
        // to generate the JWT. The client gets a public key to validate the signature
        algorithm: 'RS256',
    };

    // generate JWT
    return sign(payload, privateKey, signInOptions);
}

/**
 * checks if JWT token is valid
 *
 * @param token the expected token payload
 */
export function validateToken(token: string): Promise<TokenPayload> {
    const publicKey = fs.readFileSync(path.join(__dirname, './../../../public.key')) as Secret;

    const verifyOptions: VerifyOptions = {
        algorithms: ['RS256'],
    };
    // console.log("=================================================");
    // console.log("||           Je suis passé par ici !           ||");
    // console.log("=================================================");
    return new Promise((resolve, reject) => {

        verify(token, publicKey, verifyOptions, <TokenPayload>(error: VerifyErrors | null, decoded: TokenPayload) => {
            if (error)
                return reject(error);
            // @ts-ignore
            resolve(decoded);
        })
    });
}

function addMinutes(date: Date, minutes: number): Date {
    return new Date(date.getTime() + minutes*60000);
}
