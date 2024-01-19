import { Pool } from 'pg';

export class PostgreSQLStorage {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: 'your_username',
            host: 'localhost',
            database: 'your_database',
            password: 'your_password',
            port: 5432,
        });
    }

    async setValue(productName: string, quantity: number): Promise<void> {
        await this.pool.query('INSERT INTO in_memory_storage (product_name, quantity) VALUES ($1, $2) ON CONFLICT (product_name) DO UPDATE SET quantity = $2', [productName, quantity]);
    }

    async restore(productName: string): Promise<void> {
        await this.pool.query('DELETE FROM in_memory_storage WHERE product_name = $1', [productName]);
    }

    async reset(): Promise<void> {
        await this.pool.query('TRUNCATE in_memory_storage');
    }

    async total(): Promise<number> {
        const result = await this.pool.query('SELECT SUM(quantity) AS total FROM in_memory_storage');
        return result.rows[0].total || 0;
    }
}
