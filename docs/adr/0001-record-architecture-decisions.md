# ADR 0001: Record Architecture Decisions

## Status
Accepted

## Context
Decisions about the architecture, tech stack, and design system of this portfolio were previously implicit or scattered in commit messages. As the project evolves across multiple AI development tools (Lovable, Cursor, Claude Code, Antigravity), we need a single, immutable record of architectural decisions to prevent regressions.

## Decision
We adopt Architecture Decision Records (ADRs) stored in `docs/adr/` in standard markdown format.
Each record follows the structure:
- Title with sequential number
- Status (Proposed, Accepted, Deprecated, Superseded)
- Context
- Decision
- Consequences

## Consequences
- Every significant architectural change (framework choice, image optimization pipeline, routing) will have an associated ADR.
- Skills like `grill-with-docs` and `improve-codebase-architecture` will automatically inspect and respect these records.
