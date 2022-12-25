export const ItemQueries = {
  GetItems:
      `SELECT *
      FROM objet `,

  GetItemsAndNamesOnly:
      `SELECT o.idObjet, o.idPersonnage, p.nom, o.nom, o.fauxNom, o.afficherNom
       FROM objet as o, personnage as p
       WHERE o.idPersonnage = p.idPersonnage`,

  getItemsIdsForPersonnage:
      `SELECT idObjet
       FROM objet
       WHERE idPersonnage = ?`,

  getItemsNamesForPersonnage:
      `SELECT idObjet, idPersonnage, nom, fauxNom, afficherNom
       FROM objet
       WHERE idPersonnage = ?`,

  getItemsForPersonnage:
      `SELECT *
       FROM objet
       WHERE idPersonnage = ?`,

  GetItemById:
      `SELECT *
        FROM objet
        WHERE idObjet = ? `,

  GetItemNameOnlyById:
      `SELECT idObjet, idPersonnage, nom, fauxNom, afficherNom
       FROM objet
       WHERE idObjet = ?`,

    AddItem:
        `INSERT INTO objet (idPersonnage, nom, fauxNom, bonus, type, prix, prixNonHumanoide, devise, idMalediction,
                            categorie, idMateriaux, taille, degats, critique, facteurPortee, armure, bonusDexteriteMax,
                            malusArmureTests, risqueEchecSorts, solidite, resistance, afficherNom, afficherEffetMagique,
                            afficherMalediction, afficherMateriau, afficherInfos)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);`,

    UpdateItemById:
        `UPDATE objet
            SET idPersonnage = ?, nom = ?, fauxNom = ?, bonus = ?, type = ?, prix = ?, prixNonHumanoide = ?, devise = ?,
            categorie = ?, taille = ?, degats = ?, critique = ?, facteurPortee = ?, armure = ?, bonusDexteriteMax = ?,
            malusArmureTests = ?, risqueEchecSorts = ?, solidite = ?, resistance = ?, afficherNom = ?,
            afficherEffetMagique = ?, afficherMalediction = ?, afficherMateriau = ?, afficherInfos = ?
            WHERE idObjet = ?`,

  UpdateItemFakeNameById:
      `UPDATE objet
       SET fauxNom = ?
       WHERE idObjet = ?`,

    DeleteItemById: `DELETE FROM objet WHERE idObjet = ?`
};
