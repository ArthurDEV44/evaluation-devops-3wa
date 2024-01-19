Voici un exemple de contenu pour votre fichier `README.md` qui couvre la configuration, l'exécution, les tests et l'utilisation de votre application Koa avec Docker et Docker Compose. Vous pouvez ajuster ce contenu pour qu'il corresponde précisément à votre projet.

---

# Mon Application Node.js avec Koa

Ce projet est une application Node.js utilisant Koa, configurée pour une utilisation avec Docker et GitHub Actions pour l'intégration continue.

## Prérequis

Pour exécuter cette application, vous aurez besoin de :

- Node.js (version recommandée : 14.x)
- npm (généralement inclus avec Node.js)
- Docker
- Docker Compose

## Installation

Pour configurer le projet localement, suivez ces étapes :

1. **Cloner le Dépôt :**
   ```sh
   git clone https://github.com/ArthurDEV44/evaluation-devops-3wa.git
   cd evaluation-devops-3wa
   ```

2. **Installer les Dépendances :**
   ```sh
   npm install
   ```

## Exécution de l'Application

### Avec Node.js

Pour démarrer l'application localement sans Docker :

```sh
npm start
```

L'application sera accessible à l'adresse [http://localhost:3000](http://localhost:3000).

### Avec Docker

Pour exécuter l'application en utilisant Docker et Docker Compose :

```sh
docker-compose up --build
```

Cela va construire l'image Docker de l'application et démarrer les conteneurs pour l'application Node.js et la base de données PostgreSQL.

## Exécution des Tests

Pour exécuter les tests :

```sh
npm test
```

Pour obtenir un rapport de couverture :

```sh
npm test -- --coverage
```

## Structure du Projet

- `src/`: Contient les fichiers sources de l'application.
  - `Cart.ts`: Classe de gestion du panier.
  - `InMemoryStorage.ts`: Classe pour le stockage en mémoire.
  - `PostgreSQLStorage.ts`: Classe pour le stockage avec PostgreSQL.
  - `Product.ts`: Classe pour la représentation des produits.
  - `Routes.ts`: Gestionnaire des routes pour les requêtes.
  - `server.ts`: Point d'entrée de l'application Koa.
- `tests/`: Contient les tests unitaires.
- `Dockerfile`: Configuration pour construire l'image Docker de l'application.
- `docker-compose.yml`: Configuration pour orchestrer l'application et la base de données avec Docker.
- `.github/workflows/nodejs.yml`: Configuration GitHub Actions pour l'intégration continue.

## Contribuer au Projet

Pour contribuer au projet, créez une branche pour chaque nouvelle fonctionnalité ou correction, puis soumettez une pull request pour intégrer vos changements.
