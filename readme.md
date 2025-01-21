# TP Express.js : Choisir votre navigateur préféré

Ce projet est un TP (Travail Pratique) pour apprendre les bases d'Express.js en créant une application web simple. L'application permet aux utilisateurs de choisir leur navigateur préféré via un formulaire, de valider ce choix, et de consulter une page "À propos" qui explique l'utilité du TP.

## Table des matières
- [Prérequis](#prérequis)
- [Installation](#installation)
- [Utilisation](#utilisation)
- [Structure du projet](#structure-du-projet)
- [Fonctionnalités](#fonctionnalités)
- [Contribution](#contribution)
- [Licence](#licence)

## Prérequis
- Node.js (version 14 ou supérieure)
- npm (Node Package Manager)

## Installation

### Étape 1 : Clonez le dépôt
git clone https://github.com/votre-utilisateur/votre-repo.git  
cd votre-repo

### Étape 2 : Installez les dépendances
npm install

## Utilisation

### Démarrez le serveur
npm start

### Accédez à l'application
Ouvrez votre navigateur et accédez à http://localhost:3000.

## Structure du projet

/votre-repo  
├── /public  
│   └── styles.css  
├── /routes  
│   ├── index.js  
│   ├── choix.js  
│   ├── apropos.js  
│   └── navigateurs.js  
├── /views  
│   ├── index.ejs  
│   ├── choix.ejs  
│   └── apropos.ejs  
├── app.js  
├── package.json  
└── README.md  

## Fonctionnalités
- **Page d'accueil** : Un formulaire permettant de choisir un navigateur préféré.
- **Page de choix** : Valide le formulaire et affiche le navigateur choisi.
- **Page "À propos"** : Explique l'utilité du TP.
- **Menu de navigation** : Visible sur toutes les pages.
- **Middleware de logging** : Log toutes les pages vues par les utilisateurs.
- **API des navigateurs** : Fournit une liste de navigateurs via une API.

## Contribution
Les contributions sont les bienvenues ! Pour contribuer :

1. Forkez le dépôt.
2. Créez une branche pour votre fonctionnalité :  
   git checkout -b feature/ma-fonctionnalite
3. Commitez vos modifications :  
   git commit -am 'Ajout de ma fonctionnalité'
4. Pushez vers la branche :  
   git push origin feature/ma-fonctionnalite
5. Ouvrez une Pull Request.

## Licence
Ce projet est sous licence MIT. Voir le fichier LICENSE pour plus de détails.
