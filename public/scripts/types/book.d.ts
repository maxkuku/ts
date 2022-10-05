import { Author } from './author.js';
import { Ratingable } from './ratingable.js';
import { Product } from './product.js';
import { Review, Genre } from './types.js';
export declare class Book implements Ratingable, Product {
    name: string;
    genre: Genre;
    price: number;
    author: Partial<Author>;
    reviews: Review[];
    rating: number;
    constructor(name: string, genre: Genre, price: number, author: Partial<Author>, reviews?: Review[]);
    getProductDescription(): string;
}
