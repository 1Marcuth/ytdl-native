export { humanStr as parseTimestamp };
/** TAKEN FROM: https://github.com/fent/node-m3u8stream/blob/master/src/parse-time.ts
 *  TYPES HAVE BEEN STRIPPED
 *
 * Converts human friendly time to milliseconds. Supports the format
 * 00:00:00.000 for hours, minutes, seconds, and milliseconds respectively.
 * And 0ms, 0s, 0m, 0h, and together 1m1s.
 *
 *
 * @param {string|number} time
 * @return {number}
 */
declare function humanStr(time: string | number): number;
