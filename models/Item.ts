import {
    IItem
} from '../src/api/item/item.model';
import {IMalediction} from "../src/api/malediction/malediction.model";
import {IMateriau} from "../src/api/materiau/materiau.model";
import {getMateriauById} from "../src/api/materiau/materiau.services";
import {getMaledictionById} from "../src/api/malediction/malediction.services";
import {IEffetMagique} from "../src/api/effetMagique/effetMagique.model";
import {getAllCompleteEffetMagiqueForItem} from "../src/api/effetMagique/effetMagique.services";

class Item implements IItem {
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
    public malediction: IMalediction;
    public categorie: string;
    public idMateriaux: number;
    public materiau: IMateriau;
    public taille: string;
    public degats: string;
    public critique: string;
    public facteurPortee: string;
    public armure: number;
    public bonusDexteriteMax: number;
    public malusArmureTests: number;
    public risqueEchecSorts: string;
    public solidite: number;
    public resistance: number;
    public afficherNom: boolean;
    public afficherEffetMagique: boolean;
    public afficherMalediction: boolean;
    public afficherMateriau: boolean;
    public afficherInfos: boolean;
    public effetMagique: IEffetMagique[];


    constructor(idObjet: number, idPersonnage: number, nom: string, fauxNom: string, bonus: number, type: string, prix: number,
                prixNonHumanoide: number, devise: string, idMalediction: number, malediction: IMalediction, categorie: string, idMateriaux: number, materiau: IMateriau,
                taille: string, degats: string, critique: string, facteurPortee: string, armure: number, bonusDexteriteMax: number,
                malusArmureTests: number, risqueEchecSorts: string, solidite: number, resistance: number, afficherNom: boolean, afficherEffetMagique: boolean,
                afficherMalediction: boolean, afficherMateriau: boolean, afficherInfos: boolean, effetMagique: IEffetMagique[]) {
        if (typeof malediction === 'undefined' || typeof materiau === 'undefined' || typeof effetMagique === 'undefined') {
            // https://stackoverflow.com/questions/43431550/async-await-class-constructor
            throw new Error('This constructor cannot be called directly with undefined malediction, materiau or effetMagique. Please call build() function.');
        }
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
        this.malediction = malediction;
        this.categorie = categorie;
        this.idMateriaux = idMateriaux;
        this.materiau = materiau;
        this.taille = taille;
        this.degats = degats;
        this.critique = critique;
        this.facteurPortee = facteurPortee;
        this.armure = armure;
        this.bonusDexteriteMax = bonusDexteriteMax;
        this.malusArmureTests = malusArmureTests;
        this.risqueEchecSorts = risqueEchecSorts;
        this.solidite = solidite;
        this.resistance = resistance;
        this.afficherNom = afficherNom;
        this.afficherEffetMagique = afficherEffetMagique;
        this.afficherMalediction = afficherMalediction;
        this.afficherMateriau = afficherMateriau;
        this.afficherInfos = afficherInfos;
        this.effetMagique = effetMagique;
    }

    // https://stackoverflow.com/questions/43431550/async-await-class-constructor
    static async build(item: IItem) {

        const materiau = (await getMateriauById(item.idMateriaux))[0] || null;
        // console.log(materiau);
        const malediction = (await getMaledictionById(item.idMalediction))[0] || null;
        // console.log(malediction);
        const effetsMagiques = (await getAllCompleteEffetMagiqueForItem(item.idObjet)) || null;
        // console.log(effetMagique);
        return new Item(item.idObjet, item.idPersonnage, item.nom, item.fauxNom, item.bonus, item.type, item.prix, item.prixNonHumanoide, item.devise, item.idMalediction,
            malediction, item.categorie, item.idMateriaux, materiau, item.taille, item.degats, item.critique, item.facteurPortee, item.armure,
            item.bonusDexteriteMax, item.malusArmureTests, item.risqueEchecSorts, item.solidite, item.resistance, item.afficherNom,
            item.afficherEffetMagique, item.afficherMalediction, item.afficherMateriau, item.afficherInfos, effetsMagiques);
    }

    castToItemInterface(): IItem {
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
            solidite: this.solidite,
            resistance: this.resistance,
            afficherNom: this.afficherNom,
            afficherEffetMagique: this.afficherEffetMagique,
            afficherMalediction: this.afficherMalediction,
            afficherMateriau: this.afficherMateriau,
            afficherInfos: this.afficherInfos,
        }
    }
}

export default Item;
