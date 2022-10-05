import { Product } from './product.js';
export declare class Notepad implements Product {
    name: string;
    price: number;
    constructor(name: string, price: number);
    getProductDescription(): string;
}
