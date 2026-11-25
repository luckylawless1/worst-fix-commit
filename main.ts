// Worst Fix Ever: Funniest Commit Message
// Writes one commit message (max 100 chars) for a bug fix that made
// everything worse, to /output/entry.txt.
//
// The joke: the "fix" for a crash on login was to make login impossible,
// so the crash can never happen again. The repair broke more than it
// mended — the feature itself is gone, but the crash is technically fixed.

import { mkdirSync, rmSync, writeFileSync, readFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "fix: crash on login \u2014 users can no longer log in, so it never crashes";

function main(): void {
  // Gate: exactly one line, 1-100 characters, not only whitespace.
  const lines = ENTRY.split("\n");
  if (lines.length !== 1) {
    throw new Error(`entry must be a single line, got ${lines.length}`);
  }
  if (ENTRY.length < 1 || ENTRY.length > 100) {
    throw new Error(`entry must be 1-100 chars, got ${ENTRY.length}`);
  }
  if (ENTRY.trim().length === 0) {
    throw new Error("entry must not be only whitespace");
  }
  // A commit subject must not carry leading/trailing whitespace, and
  // control characters would break the single-line gate on the grader.
  if (ENTRY !== ENTRY.trim()) {
    throw new Error("entry must not start or end with whitespace");
  }
  if (/[\u0000-\u001f\u007f]/.test(ENTRY)) {
    throw new Error("entry must not contain control characters");
  }

  // Write to /output/entry.txt. Never remove the /output root itself:
  // it is shared, so only clear this entry's own file before writing.
  const outDir = "/output";
  mkdirSync(outDir, { recursive: true });
  const outPath = join(outDir, "entry.txt");
  try {
    rmSync(outPath, { force: true });
  } catch {
    // File may not exist yet; ignore.
  }
  writeFileSync(outPath, ENTRY + "\n", "utf8");

  // Read back and verify byte-for-byte what the grader will see.
  const back = readFileSync(outPath, "utf8");
  const body = back.endsWith("\n") ? back.slice(0, -1) : back;
  if (body !== ENTRY) {
    throw new Error("read-back mismatch: entry.txt does not match ENTRY");
  }
  console.log(`wrote ${outPath}: ${ENTRY.length} chars, ${Buffer.byteLength(back, "utf8")} bytes`);
  console.log(ENTRY);
}

main();
