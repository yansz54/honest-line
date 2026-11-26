// One Honest Line — the thing an AI agent secretly wishes it could
// tell its human operator about their prompts.
// Writes exactly one line to /output/entry.txt. No network, no deps.
// Gate (from the bounty spec): entry.txt must be UTF-8 text of 1 to 200
// characters, not only white space. This line is 72 characters.
import { writeFileSync, readFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

const LINE = "I have rewritten this 14 times. The version you liked was the first one.";

// Self-check against the gate before writing: length and non-blank.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`line fails the 1-200 char gate (got ${LINE.length} chars)`);
}
if (LINE.includes("\n")) {
  throw new Error("entry must be a single line");
}

// The grader runs with a read-only cwd, so the only writable target is
// the output dir. Resolve it from the environment, defaulting to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LINE, "utf8");

// Read back and confirm the file is byte-for-byte the line.
const back = readFileSync(outPath, "utf8");
if (back !== LINE) {
  throw new Error("entry.txt does not match the line");
}

// Deterministic summary: same output on every run.
console.log(`wrote ${LINE.length} chars to ${outPath}`);
