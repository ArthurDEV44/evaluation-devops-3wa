export declare class PostgreSQLStorage {
    private pool;
    constructor();
    setValue(productName: string, quantity: number): Promise<void>;
    restore(productName: string): Promise<void>;
    reset(): Promise<void>;
    total(): Promise<number>;
}
