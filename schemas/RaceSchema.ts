import p from "pema";

export const RACE_TYPES = ["T", "G", "D", "J"] as const;

export type RaceType = (typeof RACE_TYPES)[number];

export const Event = p.object({
  title: p.string,
  country: p.string,
});

export type Event = typeof Event.infer;

export const Purse = p.object({
  amount: p.number,
  currency: p.string,
});

export type Purse = typeof Purse.infer;

export const Runner = p.object({
  id_runner: p.u32,
  name: p.string,
  odds: p.number,
  silk: p.string,
});

export type Runner = typeof Runner.infer;

export const Runners = p.array(Runner).max(3);

export const raceType = p.union("T", "G", "D", "J");

export const Race = p.object({
  id_race: p.u32,
  event: p.json(Event),
  race_type: raceType,
  post_time: p.u32,
  num_runners: p.u32,
  distance: p.u32,
  purse: p.json(Purse),
  runners: p.json(Runners),
});

export type Race = typeof Race.infer;
