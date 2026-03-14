# Git Workflow

This document defines a lightweight Git workflow for this repository.

## Branch Naming

Use explicit branch names based on intent:

- `feat/<topic>` for new features
- `fix/<topic>` for bug fixes
- `chore/<topic>` for maintenance, tooling, dependency updates
- `docs/<topic>` for documentation updates

Examples:

- `feat/i18n-language-switch`
- `fix/header-active-menu`
- `chore/security-remediation`

## Commit Message Convention

Use Conventional Commits for regular commits:

- `feat(scope): add ...`
- `fix(scope): correct ...`
- `refactor(scope): simplify ...`
- `chore(scope): update ...`
- `docs(scope): document ...`

Examples:

- `fix(header): handle trailing slash in active nav path detection`
- `chore(deps): upgrade Astro stack and apply security audit fixes`

## Pull Request Checklist

Before opening a PR:

1. Sync branch with target branch (`fetch` then `rebase` or `merge`).
2. Run local validation:
   - `npm run typecheck`
   - `npm run build`
3. Run security checks when relevant:
   - `npm audit`
   - `npm audit --omit=dev`
4. Ensure PR description includes:
   - context/problem
   - changes made
   - validation results
   - impact/risk

## Merge Strategy (No Squash)

When using merge commits (no squash), keep merge messages consistent.

Recommended merge commit title format:

`chore(merge): merge <source-branch> into <target-branch>`

Examples:

- `chore(merge): merge chore/security-remediation into app-version-03`
- `chore(merge): merge fix/header-active-menu into app-version-03`

Optional merge commit body:

- `Validation passed (typecheck/build)`
- `Security status summary`
- `Breaking changes: none|list`

## Post-Merge Checklist

1. Pull latest target branch locally.
2. Confirm CI/Netlify deployment succeeded.
3. Delete source branch if no longer needed.

## Notes

- Keep commits small and focused.
- Avoid mixing unrelated changes in the same commit.
- Prefer one logical change per commit.
