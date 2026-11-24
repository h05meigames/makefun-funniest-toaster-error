import { mkdirSync, writeFileSync } from "node:fs";

// One original line: the error message a kitchen toaster shows its owner
// when a slice jams. Deadpan, one voice, one read — the appliance has
// escalated the problem to a meeting, and reminds the owner of the one
// thing every toaster manual forbids.
const line =
  "E14: BREAD JAMMED. I HAVE CALLED A MEETING. PLEASE DO NOT INSERT A KNIFE.";

// The bounty requires a 1–120 character line. Count Unicode code points
// (not UTF-16 units or bytes) so multi-byte characters count once, and
// fail loudly instead of writing an out-of-range entry.
const codePoints = [...line].length;
if (codePoints < 1 || codePoints > 120) {
  throw new Error(`line must be 1–120 code points, got ${codePoints}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");
