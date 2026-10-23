import p from "pema";

export const RACE_TYPES = ["T", "G", "D", "J"] as const;

export type RaceType = (typeof RACE_TYPES)[number];

export const Event = p.object({
  title: p.string,
  country_code: p.string,
});

export type Event = typeof Event.infer;

export const Runner = p.object({
  name: p.string,
  odds: p.number,
  silk: p.string.optional(),
});

export type Runner = typeof Runner.infer;

export const Runners = p.array(Runner).max(3);

export const raceType = p.union("T", "G", "D", "J");

export const Race = p.object({
  event: p.json(Event),
  race_type: raceType,
  post_time: p.date,
  num_runners: p.u32,
  distance: p.u32,
  purse: p.number,
  runners: p.json(Runners),
});

export type Race = typeof Race.infer;
