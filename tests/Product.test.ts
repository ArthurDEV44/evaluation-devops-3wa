import { Product } from '../src/Product';

describe('Product', () => {
    let product: Product;

    beforeEach(() => {
        product = new Product('apple', 10);
    });

    test('getName should return the name of the product', () => {
        expect(product.name).toBe('apple');
    });

    test('getPrice should return the price of the product', () => {
        expect(product.price).toBe(10);
    });

    test('setName should update the name of the product', () => {
        product.name = 'orange';
        expect(product.name).toBe('orange');
    });

    test('setPrice should update the price of the product', () => {
        product.price = 15;
        expect(product.price).toBe(15);
    });

    test('setPrice should throw an error for negative prices', () => {
        expect(() => {
            product.price = -5;
        }).toThrow("Le prix ne peut pas être négatif");
    });
});
