import type { Purse } from "@/schemas/RaceSchema";

const thousandsFormat = new Intl.NumberFormat("en-GB");

const MINUTE_MS = 60_000;
const HOUR_MS = 60 * MINUTE_MS;
const DAY_MS = 24 * HOUR_MS;

/**
 * Countdown until the race starts, e.g. "6min", "3h 20min" or "20d 23h".
 */
export function formatRemainingTime({ postTime, now }: { postTime: number; now: number }): string {
  const remainingMs = postTime * 1000 - now;

  if (remainingMs <= 0) {
    return "Off";
  }

  if (remainingMs < HOUR_MS) {
    return `${Math.ceil(remainingMs / MINUTE_MS)}min`;
  }

  if (remainingMs < DAY_MS) {
    return `${Math.floor(remainingMs / HOUR_MS)}h ${Math.floor((remainingMs % HOUR_MS) / MINUTE_MS)}min`;
  }

  return `${Math.floor(remainingMs / DAY_MS)}d ${Math.floor((remainingMs % DAY_MS) / HOUR_MS)}h`;
}

/**
 * e.g. 2100 -> "2,100 m"
 */
export function formatDistance(distanceInMeters: number): string {
  return `${thousandsFormat.format(distanceInMeters)} m`;
}

/**
 * e.g. { amount: 17000, currency: "EUR" } -> "17,000 EUR"
 */
export function formatPurse(purse: Purse): string {
  return `${thousandsFormat.format(purse.amount)} ${purse.currency}`;
}

/**
 * e.g. 1.9 -> "1.9"
 */
export function formatOdds(odds: number): string {
  return odds.toFixed(1);
}

/**
 * Resolves a silk file name from the race data to its public asset path.
 */
export function silkUrl(silkFileName: string): string {
  return `/silks/${silkFileName}`;
}
