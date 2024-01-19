import { Cart } from '../src/Cart';
import { Product } from '../src/Product';

describe('Cart', () => {
    let cart: Cart;
    let apple: Product;
    let orange: Product;

    beforeEach(() => {
        cart = new Cart();
        apple = new Product('apple', 10);
        orange = new Product('orange', 15);
    });

    test('buy should add product to the cart', () => {
        cart.buy(apple, 2);
        expect(cart.total()).toBe(20);
    });

    test('buy should aggregate quantities of the same product', () => {
        cart.buy(apple, 1);
        cart.buy(apple, 2);
        expect(cart.total()).toBe(30);
    });

    test('reset should empty the cart', () => {
        cart.buy(apple, 1);
        cart.reset();
        expect(cart.total()).toBe(0);
    });

    test('restore should remove a specific product from the cart', () => {
        cart.buy(apple, 1);
        cart.buy(orange, 1);
        cart.restore('apple');
        expect(cart.total()).toBe(15);
    });

    test('total should return the correct total amount', () => {
        cart.buy(apple, 2);
        cart.buy(orange, 1);
        expect(cart.total()).toBe(35);
    });
});
