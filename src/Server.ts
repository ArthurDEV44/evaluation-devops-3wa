import Koa from 'koa';
import bodyParser from 'koa-bodyparser'; // pour parser le corps des requêtes
import router from './Routes';

const app = new Koa();

// Utilisation du bodyParser pour parser le corps des requêtes en JSON
app.use(bodyParser());

// Utilisation des routes définies dans routes.ts
app.use(router.routes());
app.use(router.allowedMethods());

// Définir le port sur lequel le serveur doit écouter
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port ${PORT}`);
});

export default app;
