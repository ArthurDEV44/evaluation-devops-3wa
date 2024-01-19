import { Product } from './Product';
export declare class Cart {
    private items;
    buy(product: Product, quantity: number): void;
    reset(): void;
    restore(productName: string): void;
    total(): number;
}
