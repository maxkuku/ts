export declare class Collection<V, K extends number | string | symbol = string> {
    items: Record<K, V>;
    get size(): number;
    set(key: K, value: V): void;
    get(key: K): V;
    has(key: K): boolean;
    delete(key: K): boolean;
    clear(): void;
}
