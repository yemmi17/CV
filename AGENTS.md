# Repository instructions

## Public repository safety gate

This repository is public. Before every push, the primary agent must spawn an independent subagent to review the exact staged or committed diff from a security, privacy, and production-safety perspective.

The review must cover at least:

- secrets, credentials, tokens, private keys, environment data, and internal infrastructure identifiers;
- personal data and unintended privacy exposure;
- dependency and lockfile risks;
- XSS, unsafe HTML, redirects, external links, authentication and authorization boundaries;
- deployment metadata, CI permissions, public assets, logs, debug files, and generated artifacts;
- whether the diff introduces insecure defaults or expands the public attack surface.

The subagent must remain read-only and must not push, commit, modify files, or publish review comments unless explicitly requested.

The primary agent must resolve blocking findings before pushing. For accepted non-blocking findings, it must state the trade-off in the final response. A push must not proceed if the security review was skipped, failed to run, or found unresolved high/critical issues.

## GitHub identity

All commits must use the repository-local Git identity associated with GitHub user `yemmi17`:

- `user.name`: `yemmi17`
- `user.email`: `116037023+yemmi17@users.noreply.github.com`

Verify the author before pushing. Use `--force-with-lease` instead of `--force` when a branch rewrite is explicitly required.
