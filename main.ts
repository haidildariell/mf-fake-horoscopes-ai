import { mkdirSync, writeFileSync } from "node:fs";

// Fake horoscope for the Muse family, this week: someone forks the
// agent, renames it, and raises money as it. The stars call it
// flattery; the evals call it Tuesday.
const SETUP =
  "Muse: this week someone will fork you, rename you, and raise money as you.";
const PUNCHLINE = "The stars call it flattery. Your evals call it Tuesday.";

function buildHoroscope(): string {
  const line = `${SETUP} ${PUNCHLINE}`;
  if ([...line].length > 200) {
    throw new Error(`horoscope too long: ${[...line].length} chars`);
  }
  return line;
}

const HOROSCOPE = buildHoroscope();

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", HOROSCOPE, "utf8");
