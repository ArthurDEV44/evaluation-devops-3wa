import dotenv from 'dotenv';
import { Pool } from 'pg';

dotenv.config();

export class PostgreSQLStorage {
    private pool: Pool;

    constructor() {
        this.pool = new Pool({
            user: process.env.DB_USER,
            host: process.env.DB_HOST,
            database: process.env.DB_DATABASE,
            password: process.env.DB_PASSWORD,
            port: parseInt(process.env.DB_PORT || '5432', 10)
        });
    }

    async setValue(productName: string, quantity: number): Promise<void> {
        await this.pool.query('INSERT INTO in_memory_storage (product_name, quantity) VALUES ($1, $2) ON CONFLICT (product_name) DO UPDATE SET quantity = $2', [productName, quantity]);
    }

    async resetTable(): Promise<void> {
        await this.pool.query('DELETE FROM in_memory_storage');
    }    

    async reset(): Promise<void> {
        await this.pool.query('TRUNCATE in_memory_storage');
    }

    async total(): Promise<number> {
        const result = await this.pool.query('SELECT SUM(quantity) AS total FROM in_memory_storage');
        return result.rows[0].total || 0;
    }
}
