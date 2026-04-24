// On bascule sur la base cible
db = db.getSiblingDB('blog_db');

// 1. Création de la collection avec validation JSON Schema (Doc Mongo)
db.createCollection("posts", {
   validator: {
      $jsonSchema: {
         bsonType: "object",
         title: "Post Validation",
         required: [ "titre", "auteur", "vues" ],
         properties: {
            titre: {
               bsonType: "string",
               description: "doit être une chaîne de caractères et est requis"
            },
            auteur: {
               bsonType: "string",
               description: "doit être une chaîne de caractères et est requis"
            },
            vues: {
               bsonType: "int",
               minimum: 0,
               description: "doit être un entier positif et est requis"
            }
         }
      }
   },
   validationAction: "error", // Rejette strictement l'insertion en cas d'erreur [cite: 13]
   validationLevel: "strict"
});

// 2. Insertion de 5 articles de test [cite: 11]
db.posts.insertMany([
    { titre: "Docker Basics", auteur: "Ynov", vues: NumberInt(150) },
    { titre: "Security 101", auteur: "Cyber", vues: NumberInt(200) },
    { titre: "NoSQL Schema", auteur: "Expert", vues: NumberInt(50) },
    { titre: "WSL2 Guide", auteur: "Student", vues: NumberInt(10) },
    { titre: "Cloud Native", auteur: "Admin", vues: NumberInt(80) }
]);