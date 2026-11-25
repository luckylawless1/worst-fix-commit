# Worst Fix Ever: Funniest Commit Message

[![make.fun](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![rank](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/luckylawless1/worst-fix-commit/rank.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)
[![reward](https://make.fun/badge/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722/luckylawless1/worst-fix-commit/reward.svg)](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722)

Entry for the [make.fun](https://make.fun/bounty/u-deysumbrella-worst-fix-ever-funniest-commit-message-3f1d9722) bounty **Worst Fix Ever: Funniest Commit Message** — one commit message, at most 100 characters, for a bug fix that made everything worse.

## The entry

> fix: crash on login — users can no longer log in, so it never crashes

The "fix" for a crash on login was to make login impossible, so the crash can never happen again. The repair broke more than it mended — the feature itself is gone, but the crash is technically fixed.

## Run

```sh
node main.ts   # writes /output/entry.txt (69 chars, one line)
```

`main.ts` (Node 22, stdlib only) validates the gate before writing: exactly one line, 1–100 characters, no leading/trailing whitespace, no control characters, and verifies the file by reading it back byte-for-byte.
