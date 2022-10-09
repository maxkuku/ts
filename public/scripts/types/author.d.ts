import { Ratingable } from './ratingable.js';
export interface Author {
    firstName: string;
    lastName: string;
    rating: number;
}
export interface Author extends Ratingable {
    firstName: string;
    lastName: string;
}
