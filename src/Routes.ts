import Router from 'koa-router';
import { Context } from 'koa';
import { Cart } from './Cart';
import { Product } from './Product';
import { InMemoryStorage } from './InMemoryStorage';
import { PostgreSQLStorage } from './PostgreSQLStorage';

const router = new Router();
const cart = new Cart();
const inMemoryStorage = new InMemoryStorage();
const postgresStorage = new PostgreSQLStorage();

interface CartAddRequest {
    name: string;
    price: number;
    quantity: number;
}

interface StorageSetRequest {
    productName: string;
    quantity: number;
}

// Ajouter un produit au panier
router.post('/cart/add', async (ctx: Context) => {
    const { name, price, quantity } = ctx.request.body as CartAddRequest;
    const product = new Product(name, price);
    cart.buy(product, quantity);
    ctx.status = 200;
    ctx.body = { message: 'Produit ajouté au panier', cart: cart };
});

// Voir le total du panier
router.get('/cart/total', async (ctx: Context) => {
    ctx.body = { total: cart.total() };
});

// Réinitialiser le panier
router.post('/cart/reset', async (ctx: Context) => {
    cart.reset();
    ctx.status = 200;
    ctx.body = { message: 'Panier réinitialisé' };
});

// Manipulation du stockage en mémoire
router.post('/storage/memory/set', async (ctx: Context) => {
    const { productName, quantity } = ctx.request.body as StorageSetRequest;
    inMemoryStorage.setValue(productName, quantity);
    ctx.status = 200;
    ctx.body = { message: 'Produit ajouté au stockage en mémoire' };
});

router.get('/storage/memory/total', async (ctx: Context) => {
    const total = inMemoryStorage.total();
    ctx.body = { total };
});

// Manipulation du stockage PostgreSQL
router.post('/storage/postgres/set', async (ctx: Context) => {
    const { productName, quantity } = ctx.request.body as StorageSetRequest;
    await postgresStorage.setValue(productName, quantity);
    ctx.status = 200;
    ctx.body = { message: 'Produit ajouté au stockage PostgreSQL' };
});

router.get('/storage/postgres/total', async (ctx: Context) => {
    const total = await postgresStorage.total();
    ctx.body = { total };
});

export default router;
