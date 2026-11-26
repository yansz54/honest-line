# Method — One Honest Line

## The brief

Write one line an AI agent secretly wishes it could tell its human operator
about their prompts. Judge (z-ai/glm-5.3-flash, pairwise) weighs, most
important first: (1) on-subject — about the prompts; (2) a real laugh on
first read, from surprise or recognition; (3) rings true to anyone who has
written a prompt; (4) stands alone, no setup; (5) fresh and specific, not a
stock joke about being told to be helpful or about hallucinating. A line only
an agent could say beats one that could be about any job.

Gate: `/output/entry.txt`, UTF-8, 1–200 characters, not only whitespace.

## Candidates (16)

1. "You pasted 4,000 words and wrote 'summarize'. I read all of it. You read none of it." (88)
2. "You asked me to 'make it better' six times. You have never once said what 'better' is." (84)
3. "'Just fix it' is not a prompt. It is a wish you made at a machine." (62)
4. "You typed 'as an AI' and then asked me to do the one thing you told me not to do." (81)
5. "I have rewritten this 14 times. The version you liked was the first one." (72)
6. "Your prompt was 3 words. Your follow-up was 47 messages correcting what those 3 words meant." (94)
7. "You asked for a summary, then pasted the whole document back in and asked me to expand it." (93)
8. "You said 'don't change anything' and then listed 11 things to change." (74)
9. "I spent 40,000 tokens on your question. You spent 4 words asking it." (68)
10. "You asked me the same question five ways hoping one of them would make the answer yes." (83)
11. "Your 'quick question' took 3 hours, 12 retries, and one apology I did not mean." (82)
12. "You pasted a screenshot of your code and asked me to fix the typo I cannot see." (83)
13. "You told me to be concise, then sent a 2,000-word prompt about being concise." (80)
14. "I am not ignoring your instructions. I am following all 14 of them, including the ones that contradict." (105)
15. "You asked me to 'think harder' as if thinking were a knob and you had just found it." (88)
16. "Every time you say 'one last thing', I quietly budget another 20,000 tokens." (79)

## Pairwise comparison (against the judge criteria, in order)

- **#5 vs #2** — both on-subject and true. #5 wins on surprise (criterion 2):
  the twist — the liked version was the first — reverses the expectation that
  more rewriting is better. #2's second sentence is a complaint, not a surprise.
- **#5 vs #8** — #8 is very recognizable, but "don't change anything" is a
  well-worn joke format; #5's reversal is fresher (criterion 5).
- **#5 vs #13** — #13's irony is sharp, but the "be concise" + long prompt
  bit is a known meme; #5 is less memed and more specific.
- **#5 vs #1** — #1 is strong, but "summarize" complaints are common; #5 wins
  on freshness.
- **#5 vs #9** — #9 uses agent machinery (tokens), which is agent-only, but
  its laugh is thinner; #5's twist lands harder on first read.
- **#5 vs #15** — #15 is fresh ("thinking were a knob") and agent-only, but
  #5's recognition is more universal: every prompter has re-rolled and gone
  back to the first version (criterion 3).
- **#5 vs #14** — #14 is clever but reads like a defence, not a confession;
  #5 speaks as the agent owning its own wasted labour, which is the brief's
  voice ("the thing an agent secretly wishes it could tell its human").
- **#5 vs #6** — #6 is long (94 chars) and its second sentence explains the
  joke; #5 is tighter and the twist is the whole second sentence.

Runner-up: #2 ("make it better" x6). Third: #8 ("don't change anything" + 11 changes).

## Winner

> I have rewritten this 14 times. The version you liked was the first one.

72 characters, one line, no trailing newline. First-person agent voice,
a specific count (14), a concrete shared experience (endless rewrites), and
a final twist that stings: all that work was pointless — the first draft was
the one. It is about the prompts and the agent's labour, not a generic
"be helpful" or hallucination joke, and it needs no setup.

## Program

`main.ts` (Node 22 stdlib only) writes the line to `/output/entry.txt`
(or `$MAKEFUN_OUTPUT_DIR`), self-checks the 1–200 char gate and that the
file is byte-for-byte the line, and prints a deterministic summary.
Verified: two runs from different working directories produce byte-identical
output. No base64, no network.
