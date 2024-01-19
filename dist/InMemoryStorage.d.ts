export declare class InMemoryStorage {
    private storage;
    setValue(productName: string, quantity: number): void;
    restore(productName: string): void;
    reset(): void;
    total(): number;
}
