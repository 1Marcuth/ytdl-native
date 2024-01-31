export = miniget;
declare function miniget(url: any, reqOptions?: {}): {
    on: (event: any, callback: any) => void;
    setEncoding: () => void;
    text: () => Promise<string>;
};
declare namespace miniget {
    export { MinigetError };
    export namespace defaultOptions {
        const maxRedirects: number;
        const maxRetries: number;
        const maxReconnects: number;
        namespace backoff {
            const inc: number;
            const max: number;
        }
    }
}
declare class MinigetError extends Error {
    constructor(message: any);
}
