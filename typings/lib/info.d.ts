export const cache: Cache;
export const cookieCache: Cache;
export const watchPageCache: Cache;
export function getBasicInfo(id: string, options: Object): Promise<Object>;
export function getInfo(id: string, options: Object): Promise<Object>;
import Cache = require("./cache");
export { validateID, validateURL, getURLVideoID, getVideoID };
