// Worst Fix Ever: Funniest Commit Message
// Writes one line — a commit message for a fix that made everything
// worse — to /output/entry.txt. The gate needs 1-100 chars of UTF-8
// text, not only whitespace.
//
// The joke: the "fix" for slow search works by making search return
// nothing at all — the repair is technically a success and practically
// a disaster, in the plain voice of a tired engineer typing at the end
// of a bad day. Deterministic: the same line on every run, no network,
// no randomness, no input read.
import { mkdirSync, writeFileSync } from "node:fs";

const COMMIT =
  "fix: the search is fixed; it now finds nothing, instantly";

// Fail loudly instead of ever writing an entry the judge cannot score.
const chars = [...COMMIT].length;
if (chars < 1 || chars > 100 || COMMIT.trim().length === 0) {
  throw new Error(`commit message is ${chars} chars, outside the 1-100 gate`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", COMMIT, "utf8");
console.log(COMMIT);
