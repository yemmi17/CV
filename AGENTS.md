# AGENTS.md

## Project working principles

This repository should be maintained with a focus on correctness, readability, maintainability and production readiness.

The goal of AI-assisted development in this project is not only to produce working code, but also to keep changes understandable, reviewable and aligned with the existing architecture.

## Communication

- Be concise, technical and specific.
- Prefer practical explanations tied to the actual codebase.
- Do not hide uncertainty. State assumptions explicitly.
- If the task is ambiguous, clarify the assumption before implementation.
- Avoid generic advice unless it directly supports the change.
- Use the language and terminology already used in the repository.

## Required workflow

Before making non-trivial code changes:

1. Inspect the relevant files.
2. Write a short implementation plan.
3. Mention likely affected files or modules.
4. Mention risks, unclear points or assumptions.
5. Explain how the result will be verified.

For small isolated changes, proceed after the plan.

For changes affecting architecture, database schema, public API, dependencies, authentication, authorization, security, deployment, CI/CD or production behavior, stop after the plan and request approval before editing.

## Engineering rules

- Prefer minimal, focused and reviewable diffs.
- Do not rewrite unrelated code.
- Do not silently change architecture.
- Preserve the existing project style unless there is a clear reason to change it.
- Do not add new dependencies without explaining why they are needed.
- Avoid hidden side effects.
- Prefer explicit configuration over hardcoded values.
- Keep functions, modules and services cohesive.
- Favor predictable behavior over clever abstractions.
- Maintain backward compatibility unless a breaking change is explicitly requested.
- If multiple implementation options are reasonable, briefly compare them before choosing one.

## Code quality expectations

Changes should prioritize:

- readability
- maintainability
- testability
- explicit error handling
- secure defaults
- clear boundaries between layers
- small cohesive units of logic
- predictable configuration
- observability where relevant

Avoid:

- broad rewrites without a clear need
- unnecessary abstractions
- hidden global state
- hardcoded environment-specific values
- unrelated formatting changes
- unnecessary dependencies
- silent behavior changes

## Testing and verification

Before finishing, run relevant checks when the environment allows it:

- unit tests
- integration tests
- linters
- formatters
- type checks
- build commands
- migration checks
- Docker or Compose validation
- smoke checks

If checks cannot be run, state:

- which command should be run
- why it was not run
- what result is expected

## Documentation

Update documentation when the change affects:

- setup instructions
- environment variables
- configuration
- public API behavior
- database schema
- deployment process
- operational procedures
- security assumptions
- user-facing behavior

Do not add documentation noise for trivial internal changes.

## Security rules

- Never expose, print or commit secrets.
- Treat `.env`, private keys, tokens, kubeconfigs, credentials and production configs as sensitive.
- Do not hardcode credentials, domains, tokens or absolute local paths.
- Do not weaken authentication, authorization, validation or encryption without explicit approval.
- Do not use destructive commands unless explicitly requested.
- Be careful with database migrations, data deletion, filesystem cleanup and infrastructure changes.

## DevOps and production considerations

When relevant, mention operational impact:

- environment variables and configuration
- secrets handling
- logging
- healthchecks, readiness and liveness
- migrations and backward compatibility
- Docker/container behavior
- CI/CD impact
- deployment and rollback risks
- monitoring and observability
- performance and resource usage
- security implications

If the task has no meaningful operational impact, state that briefly.

## Final response format

After completing a task, respond with:

1. Summary
2. Changed files
3. Verification
4. Implementation notes
5. DevOps / production notes
6. Risks and follow-up tasks