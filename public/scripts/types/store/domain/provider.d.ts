import { SearchFilter } from './search-filter.js';
export interface Provider {
    find(filter: SearchFilter): any;
    getByParams(checkInDate: Date, checkOutDate: Date, maxPrice?: number, priceLimit?: number): any;
}
