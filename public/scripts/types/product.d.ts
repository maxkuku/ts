import { PurchaseContext } from './purchase-context.js';
export declare abstract class Product {
    price: number;
    constructor(price: number);
    abstract getProductDescription(): string;
    getDiscountPrice(context: PurchaseContext): number;
    protected calculateDiscount(context: PurchaseContext): number;
}
