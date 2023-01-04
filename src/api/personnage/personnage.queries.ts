export const PersonnageQueries = {
    GetPersonnages:
        `SELECT *
         FROM personnage `,

    GetPersonnagesIds:
        `SELECT idPersonnage
         FROM personnage`,

    GetPersonnageById:
        `SELECT *
         FROM personnage
         WHERE idPersonnage = ? `,

    GetPersonnageByIdUser:
        `SELECT p.*
         FROM personnage as p, user as u 
         WHERE u.idUser = ?
         AND u.idPersonnage = p.idPersonnage`,

    GetPersonnageByName:
        `SELECT *
         FROM personnage
         WHERE LOWER(nom) = LOWER(?)`,


    AddPersonnage:
        `INSERT INTO personnage (nom, niveau, niveauEnAttente, deVitaliteNaturelle, deManaNaturel) 
         VALUES (?, ?, ?, ?, ?)`,

    UpdatePersonnageById:
        `UPDATE personnage 
         SET nom = ?, niveau = ?, niveauEnAttente = ?, deVitaliteNaturelle = ?, deManaNaturel = ?
         WHERE idPersonnage = ?`,


    DeletePersonnageById:
        `DELETE
         FROM personnage
         WHERE idPersonnage = ?`,

    GetPersonnagesAvailable:
        `SELECT *
         FROM personnage
         WHERE idPersonnage NOT IN (
         SELECT idPersonnage
         FROM user WHERE idPersonnage IS NOT NULL)`

};
