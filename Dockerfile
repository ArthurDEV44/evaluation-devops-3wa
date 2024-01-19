# Utilisation de l'image Node.js LTS
FROM node:lts

# Installe TypeScript globalement
RUN npm install -g typescript

# Défini le répertoire de travail
WORKDIR /usr/src/app

# Copie les fichiers de dépendances
COPY package*.json ./

# Installe les dépendances
RUN npm install

# Copie les fichiers sources
COPY . .

# Compile les fichiers TypeScript en JavaScript
RUN tsc

# Expose le port 3000
EXPOSE 3000

# Commande pour démarrer l'application
CMD ["node", "dist/Server.js"]
