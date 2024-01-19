// Cart.ts
import { Product } from './Product';

interface CartItem {
    product: Product;
    quantity: number;
}

export class Cart {
    private items: CartItem[] = [];

    buy(product: Product, quantity: number): void {
        const existingItem = this.items.find(item => item.product.name === product.name);

        if (existingItem) {
            existingItem.quantity += quantity;
        } else {
            this.items.push({ product, quantity });
        }
    }

    reset(): void {
        this.items = [];
    }

    restore(productName: string): void {
        const itemIndex = this.items.findIndex(item => item.product.name === productName);

        if (itemIndex > -1) {
            this.items.splice(itemIndex, 1);
        }
    }

    total(): number {
        return this.items.reduce((total, item) => total + (item.product.price * item.quantity), 0);
    }
}
