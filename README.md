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
   ```bash
   git clone https://github.com/ArthurDEV44/evaluation-devops-3wa.git
   cd evaluation-devops-3wa
   ```

2. **Installer les Dépendances :**
   ```bash
   npm install
   ```
3. **Créer la base de donnée PostgreSql nécessaire avec PostgreSql ou dans pgAdmin**
   ```sql
   CREATE DATABASE tpDevops3wa
   ```

4. **Créer la table nécessaire avec PostgreSql ou dans pgAdmin :**
   ```sql
   CREATE TABLE in_memory_storage (
      product_name VARCHAR(255) PRIMARY KEY,
      quantity INTEGER NOT NULL
   )
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
