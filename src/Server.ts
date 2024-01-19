import Koa from 'koa';
import bodyParser from 'koa-bodyparser';
import router from './Routes';

const app = new Koa();

app.use(bodyParser());
app.use(router.routes());
app.use(router.allowedMethods());

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`Le serveur est lancé sur le port ${PORT}`);
});

export default app;
