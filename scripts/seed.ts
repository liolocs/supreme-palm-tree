import type { Race as RaceRecord } from "../schemas/RaceSchema";
import Race from "../stores/Race";

const minutes = (n: number) => new Date(Date.now() + n * 60_000);

// Real-world meetings and runner names inspired by racebets.com racecards.
// Post times are relative to the seed run so the countdown widget always has
// upcoming races to display.
const races = [
  // Trot
  {
    event: { title: "Vincennes", country_code: "FR" },
    race_type: "T",
    post_time: minutes(8),
    num_runners: 18,
    distance: 2700,
    purse: 700_000,
    runners: [
      { name: "Idao de Tillard", odds: 2.8, silk: "fr-idao-de-tillard.png" },
      { name: "Hooker Berry", odds: 4.5, silk: "fr-hooker-berry.png" },
      { name: "Vivid Wise As", odds: 6.0, silk: "fr-vivid-wise-as.png" },
    ],
  },
  {
    event: { title: "Solvalla", country_code: "SE" },
    race_type: "T",
    post_time: minutes(21),
    num_runners: 16,
    distance: 1609,
    purse: 3_000_000,
    runners: [
      { name: "San Moteur", odds: 3.25, silk: "se-san-moteur.png" },
      { name: "Hail Mary", odds: 4.0 },
      { name: "Önas Prince", odds: 7.5, silk: "se-onas-prince.png" },
    ],
  },
  {
    event: { title: "Enghien", country_code: "FR" },
    race_type: "T",
    post_time: minutes(38),
    num_runners: 15,
    distance: 2875,
    purse: 400_000,
    runners: [
      { name: "Bold Eagle", odds: 2.4, silk: "fr-bold-eagle.png" },
      { name: "Face Time Bourbon", odds: 3.1, silk: "fr-face-time-bourbon.png" },
      { name: "Davidson du Pont", odds: 8.0 },
    ],
  },

  // Gallop
  {
    event: { title: "ParisLongchamp", country_code: "FR" },
    race_type: "G",
    post_time: minutes(47),
    num_runners: 20,
    distance: 2400,
    purse: 5_000_000,
    runners: [
      { name: "Ace Impact", odds: 2.75, silk: "fr-ace-impact.png" },
      { name: "Continuous", odds: 5.5, silk: "gb-continuous.png" },
      { name: "Westover", odds: 7.0, silk: "gb-westover.png" },
    ],
  },
  {
    event: { title: "York", country_code: "GB" },
    race_type: "G",
    post_time: minutes(59),
    num_runners: 12,
    distance: 2092,
    purse: 1_000_000,
    runners: [
      { name: "City Of Troy", odds: 1.9, silk: "gb-city-of-troy.png" },
      { name: "Alflaila", odds: 6.0, silk: "gb-alflaila.png" },
      { name: "Feed The Flame", odds: 9.5 },
    ],
  },
  {
    event: { title: "Flemington", country_code: "AU" },
    race_type: "G",
    post_time: minutes(72),
    num_runners: 24,
    distance: 3200,
    purse: 8_000_000,
    runners: [
      { name: "Without A Fight", odds: 4.2, silk: "au-without-a-fight.png" },
      { name: "Soulcombe", odds: 5.0, silk: "gb-soulcombe.png" },
      { name: "Sheraz", odds: 11.0 },
    ],
  },

  // Jumping
  {
    event: { title: "Cheltenham", country_code: "GB" },
    race_type: "J",
    post_time: minutes(88),
    num_runners: 15,
    distance: 5290,
    purse: 625_000,
    runners: [
      { name: "Galopin Des Champs", odds: 2.5, silk: "gb-galopin-des-champs.png" },
      { name: "Gerri Colombe", odds: 4.0, silk: "gb-gerri-colombe.png" },
      { name: "Bravemansgame", odds: 7.5 },
    ],
  },
  {
    event: { title: "Aintree", country_code: "GB" },
    race_type: "J",
    post_time: minutes(105),
    num_runners: 40,
    distance: 6900,
    purse: 1_000_000,
    runners: [
      { name: "I Am Maximus", odds: 6.0, silk: "gb-i-am-maximus.png" },
      { name: "Delta Work", odds: 9.0, silk: "ie-delta-work.png" },
      { name: "Minella Indo", odds: 14.0 },
    ],
  },

  // Dogs
  {
    event: { title: "Towcester", country_code: "GB" },
    race_type: "D",
    post_time: minutes(120),
    num_runners: 6,
    distance: 500,
    purse: 175_000,
    runners: [
      { name: "King Memphis", odds: 2.1, silk: "gb-king-memphis.png" },
      { name: "De Lahdedah", odds: 4.5, silk: "ie-de-lahdedah.png" },
      { name: "Whyaye Man", odds: 8.0 },
    ],
  },
  {
    event: { title: "Shelbourne Park", country_code: "IE" },
    race_type: "D",
    post_time: minutes(140),
    num_runners: 6,
    distance: 550,
    purse: 300_000,
    runners: [
      { name: "Bockos Diamond", odds: 1.75, silk: "ie-bockos-diamond.png" },
      { name: "Born Warrior", odds: 5.0, silk: "ie-born-warrior.png" },
      { name: "Ballymac Finn", odds: 10.0 },
    ],
  },
] satisfies RaceRecord[];

await Race.drop();
await Race.create();

for (const race of races) {
  const inserted = await Race.insert(race);
  console.log(`Seeded ${race.race_type} ${race.event.title} (${inserted.id})`);
}

console.log(`Seeded ${races.length} races.`);
