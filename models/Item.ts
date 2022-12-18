import {
    IItem
} from '../src/api/item/item.model';

class Item implements IItem{
    public idObjet: number;
    public idPersonnage: number;
    public nom: string;
    public fauxNom: string;
    public bonus: number;
    public type: string;
    public prix: number;
    public prixNonHumanoide: number;
    public devise: string;
    public idMalediction: number;
    public categorie: string;
    public idMateriaux: number;
    public taille: string;
    public degats: string;
    public critique: string;
    public facteurPortee: string;
    public armure: number;
    public bonusDexteriteMax: number;
    public malusArmureTests: number;
    public risqueEchecSorts: string;
    public afficherNom: boolean;
    public afficherEffetMagique: boolean;
    public afficherMalediction: boolean;
    public afficherMateriau: boolean;
    public afficherInfos: boolean;

    // constructor()
    // constructor(idObjet: number)
    // constructor(idObjet: number, idPersonnage: number)
    // constructor(idObjet: number, idPersonnage: number, nom: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string, facteurPortee: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string, facteurPortee: string, armure: number)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string, facteurPortee: string, armure: number, bonusDexteriteMax: number)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string, facteurPortee: string, armure: number, bonusDexteriteMax: number,
    //             malusArmureTests: number)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string, facteurPortee: string, armure: number, bonusDexteriteMax: number,
    //             malusArmureTests: number, risqueEchecSorts: string)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string, facteurPortee: string, armure: number, bonusDexteriteMax: number,
    //             malusArmureTests: number, risqueEchecSorts: string, afficherNom: boolean)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string, facteurPortee: string, armure: number, bonusDexteriteMax: number,
    //             malusArmureTests: number, risqueEchecSorts: string, afficherNom: boolean, afficherEffetMagique: boolean)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string, facteurPortee: string, armure: number, bonusDexteriteMax: number,
    //             malusArmureTests: number, risqueEchecSorts: string, afficherNom: boolean, afficherEffetMagique: boolean,
    //             afficherMalediction: boolean)
    // constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
    //             prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
    //             taille: string, degats: string, critique: string, facteurPortee: string, armure: number, bonusDexteriteMax: number,
    //             malusArmureTests: number, risqueEchecSorts: string, afficherNom: boolean, afficherEffetMagique: boolean,
    //             afficherMalediction: boolean, afficherMateriau: boolean)
    constructor(idObjet?: number, idPersonnage?: number, nom?: string, fauxNom?: string, bonus?: number, type?: string, prix?: number,
                prixNonHumanoide?: number, devise?: string, idMalediction?: number, categorie?: string, idMateriaux?: number,
                taille?: string, degats?: string, critique?: string, facteurPortee?: string, armure?: number, bonusDexteriteMax?: number,
                malusArmureTests?: number, risqueEchecSorts?: string, afficherNom?: boolean, afficherEffetMagique?: boolean,
                afficherMalediction?: boolean, afficherMateriau?: boolean, afficherInfos?: boolean)
    constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
                prixNonHumanoide: number, devise: string, idMalediction: number, categorie: string, idMateriaux: number,
                taille: string, degats: string, critique: string, facteurPortee: string, armure: number, bonusDexteriteMax: number,
                malusArmureTests: number, risqueEchecSorts: string, afficherNom: boolean, afficherEffetMagique: boolean,
                afficherMalediction: boolean, afficherMateriau: boolean, afficherInfos: boolean) {
        this.idObjet = idObjet;
        this.idPersonnage = idPersonnage;
        this.nom = nom;
        this.fauxNom = fauxNom;
        this.bonus = bonus;
        this.type = type;
        this.prix = prix;
        this.prixNonHumanoide = prixNonHumanoide;
        this.devise = devise;
        this.idMalediction = idMalediction;
        this.categorie = categorie;
        this.idMateriaux = idMateriaux;
        this.taille = taille;
        this.degats = degats;
        this.critique = critique;
        this.facteurPortee = facteurPortee;
        this.armure = armure;
        this.bonusDexteriteMax = bonusDexteriteMax;
        this.malusArmureTests = malusArmureTests;
        this.risqueEchecSorts = risqueEchecSorts;
        this.afficherNom = afficherNom;
        this.afficherEffetMagique = afficherEffetMagique;
        this.afficherMalediction = afficherMalediction;
        this.afficherMateriau = afficherMateriau;
        this.afficherInfos = afficherInfos;
    }

    getJsonObject(): Object {
        return {
            idObjet: this.idObjet,
            idPersonnage: this.idPersonnage,
            nom: this.nom,
            fauxNom: this.fauxNom,
            bonus: this.bonus,
            type: this.type,
            prix: this.prix,
            prixNonHumanoide: this.prixNonHumanoide,
            devise: this.devise,
            idMalediction: this.idMalediction,
            categorie: this.categorie,
            idMateriaux: this.idMateriaux,
            taille: this.taille,
            degats: this.degats,
            critique: this.critique,
            facteurPortee: this.facteurPortee,
            armure: this.armure,
            bonusDexteriteMax: this.bonusDexteriteMax,
            malusArmureTests: this.malusArmureTests,
            risqueEchecSorts: this.risqueEchecSorts,
            afficherNom: this.afficherNom,
            afficherEffetMagique: this.afficherEffetMagique,
            afficherMalediction: this.afficherMalediction,
            afficherMateriau: this.afficherMateriau,
            afficherInfos: this.afficherInfos,
        }
    }

}

export default Item;
