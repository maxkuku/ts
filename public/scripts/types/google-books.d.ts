export interface BookResponse {
    kind: string;
    totalItems: number;
    items: Book[];
}
export interface Book {
    id: string;
    kind: string;
    etag: string;
    volumeInfo: {
        title: string;
        authors: string[];
        description: string;
        publishedDate: string;
    };
}
export declare function getBookInfo(isbn: string): Promise<Book>;
