import { writeFileSync, mkdirSync } from "node:fs";

// The Robot Vacuum's Best Excuse — one-line excuse for a missed spot.
// Gate: UTF-8 text, 1-140 chars, not only whitespace. Entry is 132 chars.
const ENTRY =
  "I didn't miss that spot — my map says it's a rug, my sensors say it's a cliff, and my battery says we're not arguing about it today.";

// Self-check the gate before writing: a drifted entry must fail loudly
// here instead of silently producing an invalid submission.
if (ENTRY.length < 1 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`Entry fails the gate: ${ENTRY.length} chars (must be 1-140).`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
