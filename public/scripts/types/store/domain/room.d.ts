import { Id } from '../../types.js';
export declare class CRoom {
    private readonly provider;
    readonly originalId: string;
    placeId: Id;
    name: string;
    description: string;
    image: string;
    remoteness?: number;
    bookedDates?: [];
    price?: number;
    constructor(provider: string, originalId: string, placeId: Id, name: string, description: string, image: string, remoteness?: number, bookedDates?: [], price?: number);
    get id(): Id;
    isProvidedBy(providerName: string): boolean;
}
export declare class FRoom {
    private readonly provider;
    readonly originalId: string;
    placeId: Id;
    name: string;
    description: string;
    image: string;
    remoteness: number;
    bookedDates?: [];
    price?: number;
    constructor(provider: string, originalId: string, placeId: Id, name: string, description: string, image: string, remoteness: number, bookedDates?: [], price?: number);
    get id(): Id;
    isProvidedBy(providerName: string): boolean;
}
