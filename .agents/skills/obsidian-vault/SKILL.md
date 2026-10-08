---
name: obsidian-vault
description: Search, create, and manage notes in the Obsidian vault with wikilinks and index notes. Use when user wants to find, create, or organize notes in Obsidian.
---

# Obsidian Vault

## Vault location

Configure your Obsidian vault path here or point to a local directory:
`./vault/` or your custom vault path (e.g. `~/Documents/Obsidian Vault/`).

Mostly flat at root level.

## Naming conventions

- **Index notes**: aggregate related topics (e.g., `Design Index.md`, `Skills Index.md`, `Cases Index.md`)
- **Title case** for all note names
- No folders for organization - use links and index notes instead

## Linking

- Use Obsidian `[[wikilinks]]` syntax: `[[Note Title]]`
- Notes link to dependencies/related notes at the bottom
- Index notes are just lists of `[[wikilinks]]`

## Workflows

### Search for notes

Search by filename or content using Glob / Grep tools on the vault path.

### Create a new note

1. Use **Title Case** for filename
2. Write content as a unit of learning (per vault rules)
3. Add `[[wikilinks]]` to related notes at the bottom

### Find related notes

Search for `[[Note Title]]` across the vault to find backlinks.
