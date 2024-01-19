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

    test('resetTable should execute query to delete all products', async () => {
        await storage.resetTable();
        expect(mockPool.query).toHaveBeenCalledWith('DELETE FROM in_memory_storage');
    });    

    test('reset should execute query to empty the storage', async () => {
        await storage.reset();
        expect(mockPool.query).toHaveBeenCalledWith(expect.any(String));
    });
});
