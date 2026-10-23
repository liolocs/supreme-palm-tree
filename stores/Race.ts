import db from "@/config/db";
import { Event, Runners, raceType } from "@/schemas/RaceSchema";
import p from "pema";
import store from "primate/store";

export default store({
  table: "race",
  db,
  schema: {
    id: store.key.primary(p.u32),
    event: p.json(Event),
    race_type: raceType,
    post_time: p.date,
    num_runners: p.u32,
    distance: p.u32,
    purse: p.number,
    runners: p.json(Runners),
    updated_at: p.date.default(() => new Date()),
    created: p.date.default(() => new Date()),
  },
});
