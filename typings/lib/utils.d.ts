export function between(haystack: string, left: string, right: string): string;
export function parseAbbreviatedNumber(string: string): number;
export function cutAfterJSON(mixedJson: string): string;
export function playError(player_response: Object, statuses: Array<string>, ErrorType?: Error): Error;
export function exposedMiniget(url: string, options: Object | undefined, requestOptionsOverwrite: Object): miniget.Stream;
export function deprecate(obj: Object, prop: string, value: Object, oldPath: string, newPath: string): void;
export const lastUpdateCheck: number;
export function checkForUpdates(): Promise<void> | null;
