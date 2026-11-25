// The Battery's Last Text to Its Charger — make.fun entry.
// One line of plain text: the phone battery's last text message to the
// charger it waited for all day. The grader runs this file and reads
// /output/entry.txt (gate: UTF-8, 1-200 characters, not whitespace only).
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "I spent all day at 1% rehearsing my dramatic goodbye, and you show up NOW? Plug me in before I forgive you. Too late — I already did.";

const OUT_DIR = "/output";
const OUT_FILE = `${OUT_DIR}/entry.txt`;

// Create the output directory if needed, but never delete it: the grader
// owns /output, so only add the entry file inside it.
mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, LINE, "utf8");
console.log(`wrote ${LINE.length} characters to ${OUT_FILE}`);
