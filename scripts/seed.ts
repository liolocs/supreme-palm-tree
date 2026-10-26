import { readFile } from "node:fs/promises";
import type { Race as RaceRecord } from "../schemas/RaceSchema";
import Race from "../stores/Race";

interface NextRacesResponse {
  data: {
    races: RaceRecord[];
  };
}

const nextRacesFile = new URL("../fixtures/next_races.json", import.meta.url);
const nextRacesContent = await readFile(nextRacesFile, "utf8");
const nextRaces = JSON.parse(nextRacesContent) as NextRacesResponse;
const races = nextRaces.data.races;

await Race.drop();
await Race.create();

for (const race of races) {
  const inserted = await Race.insert(race);
  console.log(`Seeded ${race.race_type} ${race.event.title} (${inserted.id_race})`);
}

console.log(`Seeded ${races.length} races.`);
