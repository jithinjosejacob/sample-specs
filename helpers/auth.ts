// Simple auth helper
// Returns the current Unix timestamp (seconds since epoch)

import { unixTimestamp } from './datetime';

/**
 * Auth function that returns the current Unix timestamp.
 * Useful for lightweight auth tokens or timestamp-based checks.
 */
export function auth(): number {
  return unixTimestamp();
}

// Example:
// import { auth } from './helpers/auth'
// console.log(auth()) // 1675176896
