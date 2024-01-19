interface StorageItem {
    quantity: number;
}

export class InMemoryStorage {
    private storage: Record<string, StorageItem> = {};

    setValue(productName: string, quantity: number): void {
        this.storage[productName] = { quantity };
    }

    restore(productName: string): void {
        delete this.storage[productName];
    }

    reset(): void {
        this.storage = {};
    }

    total(): number {
        return Object.values(this.storage).reduce((total, item) => total + item.quantity, 0);
    }
}
