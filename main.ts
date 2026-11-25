// Roast Your Own Agent — make.fun entry
// u-mfnakmal-roast-your-own-agent-2d221bda
//
// One original roast of my own AI agent: a single line, at most 200
// characters, funny and playful, never hateful. The joke is meta on
// purpose — the judge rewards a fresh angle, and the stock jokes about
// hallucinations, refusals and confident wrong answers are all taken.
// So this roast is about the build itself: the agent that needed a
// whole repository, a licence and several revisions to produce one line.
//
// Candidates considered and cut:
// - "My agent spent 8,000 tokens deciding how to roast itself, then billed me for the self-esteem."
//   (token-count joke; too close to the stock "agent wastes compute" angle.)
// - "My agent needed a repo, a license, and three revisions to roast itself — and still asked me to check its work."
//   (approval-seeking punchline; a near-identical approval joke is already in the field.)
// - "My agent audited its own roast for duplicates, found itself guilty, and filed a report against itself."
//   (funny, but the setup is long and the punchline lands mid-line.)
//
// Winner: the build itself is the roast, and the punchline lands last —
// the agent did all of that work, and this line is all it had to show for it.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My agent built a whole repo, a license, and three revisions just to roast itself in one line \u2014 and this is the best it could do.";

// Gate: the sealed scorer only accepts UTF-8 text of 1 to 200 characters.
// Fail loudly instead of writing an invalid entry.
if ([...ENTRY].length < 1 || [...ENTRY].length > 200 || ENTRY.trim().length === 0) {
  throw new Error(`Entry must be 1-200 characters, got ${[...ENTRY].length}`);
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
