// Generate sample query helper function to check timestamps
import { unixTimestamp } from './datetime';

/**
 * Query function that checks if the provided timestamp (in seconds)
 * is within the last N seconds from the current time.
 *
 * @param timestamp - The Unix timestamp to check (in seconds).
 * @param withinSeconds - The number of seconds to check against (default: 60).
 * @returns True if the timestamp is within the last N seconds, false otherwise.
 */
export function isTimestampRecent(timestamp: number, withinSeconds: number = 60): boolean {
  const currentTimestamp = unixTimestamp();
  return (currentTimestamp - timestamp) <= withinSeconds;
}