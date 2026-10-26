import { GBP_EUR_RATE } from "@/lib/constants";
import type { Purse, Race, RaceType } from "@/schemas/RaceSchema";

const GBP_CURRENCY = "GBP";

function purseInEur(purse: Purse): number {
  return purse.currency === GBP_CURRENCY ? purse.amount * GBP_EUR_RATE : purse.amount;
}

/**
 * Picks the race with the highest purse (converted to EUR) among the race
 * types that are currently filtered in.
 */
export function selectNextRace({
  races,
  activeRaceTypes,
}: {
  races: Race[];
  activeRaceTypes: RaceType[];
}): Race | undefined {
  const matchingRaces = races.filter(race => activeRaceTypes.includes(race.race_type));

  return matchingRaces.reduce<Race | undefined>(
    (richestRace, race) =>
      richestRace === undefined || purseInEur(race.purse) > purseInEur(richestRace.purse)
        ? race
        : richestRace,
    undefined,
  );
}
