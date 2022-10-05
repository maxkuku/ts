import { Book } from './book.js';
import { Collection } from './collection.js';
import { Product } from './product.js';
export declare class ProductCollection<T extends Product> extends Collection<T> {
    get price(): number;
}
export declare class BookCollection extends ProductCollection<Book> {
}
