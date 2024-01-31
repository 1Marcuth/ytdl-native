export = Cache;
declare class Cache extends Map<any, any> {
    constructor(timeout?: number);
    timeout: number;
    set(key: any, value: any): void;
    get(key: any): any;
    getOrSet(key: any, fn: any): any;
    delete(key: any): void;
}
