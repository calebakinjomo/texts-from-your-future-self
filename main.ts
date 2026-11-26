// Texts From Your Future Self — make.fun bounty entry (program/v1).
// Writes one funny text message from the writer's future self to /output/entry.txt.
// The joke: a 2am "temporary" fix becomes load-bearing company infrastructure —
// a flash of recognition for any developer, with the punchline landing on the
// last line. Under 200 characters, no setup outside the message itself.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "Future you here. That 'temporary' fix you shipped at 2am? Still running the whole company in 2036. They named a conference room after it. Please — for both our sakes — add a comment.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY + "\n", "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
