import {IPersonnage} from "../src/api/personnage/personnage.model";
import * as PersonnageService from "../src/api/personnage/personnage.services";
import * as StatistiqueService from "../src/api/personnage/statistique/statistique.service";

class Personnage implements IPersonnage {
    idPersonnage: number;
    nom: string;
    niveau: number;
    niveauEnAttente: number;
    intelligence: number;
    force: number;
    agilite: number;
    sagesse: number;
    constitution: number;
    vitalite: number;
    mana: number;
    deVitaliteNaturelle: number;
    deManaNaturel: number;

    constructor(idPersonnage: number, nom: string, niveau: number, niveauEnAttente: number, intelligence: number = 0,
                force: number = 0, agilite: number = 0, sagesse: number = 0, constitution: number = 0, vitalite: number = 0,
                mana: number = 0, deVitaliteNaturelle: number, deManaNaturel: number) {
        this.idPersonnage = idPersonnage;
        this.nom = nom;
        this.niveau = niveau;
        this.niveauEnAttente = niveauEnAttente;
        this.intelligence = intelligence;
        this.force = force;
        this.agilite = agilite;
        this.sagesse = sagesse;
        this.constitution = constitution;
        this.vitalite = vitalite;
        this.mana = mana;
        this.deVitaliteNaturelle = deVitaliteNaturelle;
        this.deManaNaturel = deManaNaturel;
    }

    public static async getPersonnageFromIdUser(idUser: number): Promise<Personnage> {
        // const personnages = await PersonnageService.getPersonnageByUserId(idUser);
        // console.log("idUser", idUser);
        const personnages = await PersonnageService.getPersonnageByUserId(idUser);
        // console.log(personnages);
        // return Personnage.getPersonnageFromArray(JSON.parse(JSON.stringify(personnages[0])));
        return this.getPersonnageFromArrayWithStatistics(JSON.parse(JSON.stringify(personnages[0])));
    }

    public static async getPersonnageWithStatistiquesFromIdPersonnage(idPersonnage: number): Promise<Personnage> {
        // const personnages = await PersonnageService.getPersonnageByUserId(idUser);
        // console.log("idUser", idUser);
        const personnages = await PersonnageService.getPersonnageById(idPersonnage);
        // console.log(personnages);
        // return Personnage.getPersonnageFromArray(JSON.parse(JSON.stringify(personnages[0])));
        return this.getPersonnageFromArrayWithStatistics(JSON.parse(JSON.stringify(personnages[0])));
    }

    public static getPersonnageFromArray(values: any): Personnage {
        return new Personnage(values.idPersonnage, values.nom, values.niveau, values.niveauEnAttente, 0,
            0, 0, 0, 0, 0, 0, values.deVitaliteNaturelle, values.deManaNaturel);
    }

    public static async getPersonnageFromArrayWithStatistics(values: any): Promise<Personnage> {
        const statistiques = await StatistiqueService.getAllSummedStatistiquesForPersonnageFromPersonnageId(values.idPersonnage);
        return new Personnage(values.idPersonnage, values.nom, values.niveau, values.niveauEnAttente, statistiques.intelligence,
            statistiques.force, statistiques.agilite, statistiques.sagesse, statistiques.constitution, statistiques.vitalite, statistiques.mana,
            values.deVitaliteNaturelle, values.deManaNaturel);
    }

}


export default Personnage;
