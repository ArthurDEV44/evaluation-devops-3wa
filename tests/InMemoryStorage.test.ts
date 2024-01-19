import { InMemoryStorage } from '../src/InMemoryStorage';

describe('InMemoryStorage', () => {
    let storage: InMemoryStorage;

    beforeEach(() => {
        storage = new InMemoryStorage();
    });

    test('setValue should add a product with its quantity', () => {
        storage.setValue('apple', 10);
        expect(storage.total()).toBe(10);
    });

    test('setValue should update quantity of an existing product', () => {
        storage.setValue('apple', 5);
        storage.setValue('apple', 15);
        expect(storage.total()).toBe(15);
    });

    test('restore should remove a specific product', () => {
        storage.setValue('apple', 10);
        storage.setValue('orange', 20);
        storage.restore('apple');
        expect(storage.total()).toBe(20);
    });

    test('reset should empty the storage', () => {
        storage.setValue('apple', 10);
        storage.reset();
        expect(storage.total()).toBe(0);
    });

    test('total should return the correct total quantity', () => {
        storage.setValue('apple', 10);
        storage.setValue('orange', 20);
        expect(storage.total()).toBe(30);
    });
});
