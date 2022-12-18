export const PersonnageQueries = {
    GetPersonnages:
        `SELECT *
         FROM personnage `,

    GetPersonnageById:
        `SELECT *
         FROM personnage
         WHERE idPersonnage = ? `,

    GetPersonnageByIdUser:
        `SELECT p.*
         FROM personnage as p, user as u 
         WHERE u.idUser = ?
         AND u.idPersonnage = p.idPersonnage`,


    AddPersonnage:
        `INSERT INTO personnage (nom, niveau, niveauEnAttente, deVitaliteNaturelle, deManaNaturel) 
         VALUES (?, ?, ?, ?, ?);`,

    UpdatePersonnage:
        `UPDATE personnage 
         SET nom = ?, niveau = ?, niveauEnAttente = ?, deVitaliteNaturelle = ?, deManaNaturel = ?
         WHERE idPersonnage = ?`,


    DeletePersonnage: `DELETE FROM user WHERE idPersonnage = ?`,

    GetAllStatistiquesForPersonnage:
        `SELECT s.libelle, m.valeur
         FROM personnage as p, monte as m, statistique as s
         WHERE m.idPersonnage = ?
         AND m.idStatistique = s.idStatistique
         AND m.idPersonnage = p.idPersonnage`,

    GetPersonnagesAvailable:
        `SELECT *
         FROM personnage
         WHERE idPersonnage NOT IN (
         SELECT idPersonnage
         FROM user WHERE idPersonnage IS NOT NULL)`

};
