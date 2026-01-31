/**
 * Date/time helper utilities
 *
 * Provides small, dependency-free helpers for getting the current date/time
 * in common formats and for lightweight formatting via Intl.DateTimeFormat.
 */

/** Return a Date object for "now". */
export const now = (): Date => new Date();

/** Return current time in ISO 8601 format (UTC, e.g. 2026-01-31T12:34:56.789Z). */
export const isoNow = (): string => new Date().toISOString();

/** Return current time in UTC string form (e.g. "Sat, 31 Jan 2026 12:34:56 GMT"). */
export const utcNow = (): string => new Date().toUTCString();

/** Return Unix timestamp in seconds. */
export const unixTimestamp = (): number => Math.floor(Date.now() / 1000);

/** Return Unix timestamp in milliseconds. */
export const msTimestamp = (): number => Date.now();

/**
 * Format a Date using Intl.DateTimeFormat.
 *
 * @param date - Date to format. Defaults to now.
 * @param locales - Optional locale(s) (e.g. "en-US").
 * @param options - Intl.DateTimeFormatOptions (e.g. { dateStyle: 'short', timeStyle: 'short' }).
 */
export function format(
  date: Date = new Date(),
  locales?: string | string[],
  options?: Intl.DateTimeFormatOptions
): string {
  return new Intl.DateTimeFormat(locales, options).format(date);
}

/** Convenience wrapper to format the current time. */
export const formatNow = (locales?: string | string[], options?: Intl.DateTimeFormatOptions): string =>
  format(new Date(), locales, options);

// Example usage:
// import { isoNow, unixTimestamp, formatNow } from './helpers/datetime'
// console.log(isoNow()) // 2026-01-31T12:34:56.789Z
// console.log(unixTimestamp()) // 1675176896
// console.log(formatNow('en-US', { dateStyle: 'medium', timeStyle: 'short' }))
