export const cache: Cache;
export function getTokens(html5playerfile: string, options: Object): Promise<Array<string>>;
export function decipher(tokens: Array<string>, sig: string): string;
export function extractActions(body: string): Array<string>;
export function setDownloadURL(format: Object, sig: string): void;
export function decipherFormats(formats: Array<Object>, html5player: string, options: Object): Promise<{}>;
import Cache = require("./cache");
