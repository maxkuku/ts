import { Author } from './author.js';
import { Ratingable } from './ratingable.js';
import { Product } from './product.js';
import { Review, Genre } from './types.js';
import { PurchaseContext } from './purchase-context.js';
export declare class Book extends Product implements Ratingable {
    name: string;
    genre: Genre;
    author: Partial<Author>;
    private static itemsForIncreaseDiscount;
    private static sumForIncreasedDiscount;
    private reviews;
    private _rating;
    constructor(name: string, genre: Genre, price: number, author: Partial<Author>, reviews?: Review[]);
    get rating(): number;
    getReviews(): Readonly<Review[]>;
    getProductDescription(): string;
    addReview(review: Review): void;
    removeReview(review: Review): void;
    private calculateRating;
    protected calculateDiscount(context: PurchaseContext): number;
}
