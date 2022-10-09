import { Provider } from '../../domain/provider.js';
import { SearchFilter } from '../../domain/search-filter.js';
import { CRoom } from '../../domain/room.js';
export declare class HomyProvider implements Provider {
    static provider: string;
    private static apiUrl;
    find(filter: SearchFilter): Promise<CRoom[]>;
    getByParams(checkInDate: Date, checkOutDate: Date, maxPrice?: number): Promise<CRoom>;
    private assertIsValidResponse;
    private convertFilterToQueryString;
    private convertRoomListResponse;
    private convertRoomResponse;
}
