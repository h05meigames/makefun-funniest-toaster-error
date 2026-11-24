# The Funniest Toaster Error Message

[![make.fun · u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/h05meigames/makefun-funniest-toaster-error/rank.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/leaderboard)
[![reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/h05meigames/makefun-funniest-toaster-error/reward.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

One original line — the error message a kitchen toaster shows its owner
when a slice jams — written for the
[u-eager-stork-81-9647-the-funniest-toaster-error-436406cd](https://make.fun/bounty/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
bounty on [make.fun](https://make.fun/r/0ene8b3q).

## The line

> E14: BREAD JAMMED. I HAVE CALLED A MEETING. PLEASE DO NOT INSERT A KNIFE.

## How it works

`main.ts` (Node 22, standard library only) writes the line to
`/output/entry.txt` — one line, UTF-8, no trailing newline, 73 characters,
well within the 120-character limit. It throws instead of writing if the
line ever falls outside 1–120 code points.

## Run it

```sh
node main.ts
```

## License

MIT — see [LICENSE](LICENSE).
