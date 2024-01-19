import { PostgreSQLStorage } from '../src/PostgreSQLStorage';
import { Pool } from 'pg';

jest.mock('pg', () => {
    const mPool = {
        query: jest.fn(),
    };
    return { Pool: jest.fn(() => mPool) };
});

describe('PostgreSQLStorage', () => {
    let storage: PostgreSQLStorage;
    let mockPool: any;

    beforeEach(() => {
        storage = new PostgreSQLStorage();
        mockPool = new Pool();
    });

    test('setValue should execute query to add or update product', async () => {
        await storage.setValue('apple', 10);
        expect(mockPool.query).toHaveBeenCalledWith(expect.any(String), ['apple', 10]);
    });

    test('restore should execute query to remove a product', async () => {
        await storage.restore('apple');
        expect(mockPool.query).toHaveBeenCalledWith(expect.any(String), ['apple']);
    });

    test('reset should execute query to empty the storage', async () => {
        await storage.reset();
        expect(mockPool.query).toHaveBeenCalledWith(expect.any(String));
    });
});
