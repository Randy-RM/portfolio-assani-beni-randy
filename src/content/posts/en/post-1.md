---
contentId: "04"
contentType: "post"
contentSlug: "/precommit-lint-prettier-expressjs"
date: "2026-03-23"
language: "en"
contentTags: ["Backend", "Tooling", "Express.js", "DX"]
contentTitle: "SETTING UP PRE-COMMIT HOOKS, LINTING AND PRETTIER ON AN EXPRESS.JS PROJECT"
contentDescription: "A practical guide to configuring ESLint, Prettier, and pre-commit hooks with Husky and lint-staged on an Express.js project. An essential code quality foundation for any team."
---

On an Express.js project, code quality is not declared — it is built with automated tools that protect every commit. This article walks through the full setup of a pre-commit system based on ESLint, Prettier, Husky, and lint-staged.

## Why automate code quality

When multiple developers contribute to the same project, style conventions diverge quickly. Code reviews turn into debates about semicolons instead of focusing on business logic. Automating formatting and linting solves this problem at the source.

The goal is simple: no poorly formatted code or lint errors should ever reach the remote repository. This safety net frees the team and reduces noise in pull requests.

## Initialize the Express.js project

If the project does not exist yet, start from a clean base:

```bash
mkdir my-express-api && cd my-express-api
npm init -y
npm install express
```

Create a minimal entry file to have some code to analyze:

```js
// src/index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
```

## Install and configure ESLint

ESLint detects syntax errors, unused variables, missing imports, and many other issues before runtime.

```bash
npm install --save-dev eslint @eslint/js globals
```

Create a configuration file `eslint.config.mjs` at the project root (flat config format, recommended since ESLint v9):

```js
// eslint.config.mjs
import js from '@eslint/js';
import globals from 'globals';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      eqeqeq: 'error',
      curly: 'error',
    },
  },
  {
    ignores: ['node_modules/', 'dist/', 'coverage/'],
  },
];
```

Add the scripts to `package.json`:

```json
{
  "scripts": {
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix"
  }
}
```

At this point, `npm run lint` analyzes the code and reports any issues.

## Install and configure Prettier

Prettier handles automatic formatting: indentation, quotes, semicolons, line length. It has no opinion on code logic — only on its shape.

```bash
npm install --save-dev prettier eslint-config-prettier
```

The `eslint-config-prettier` package disables ESLint rules that conflict with Prettier. Add it last in the ESLint configuration:

```js
// eslint.config.mjs (updated)
import js from '@eslint/js';
import globals from 'globals';
import prettierConfig from 'eslint-config-prettier';

export default [
  js.configs.recommended,
  {
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'commonjs',
      globals: {
        ...globals.node,
      },
    },
    rules: {
      'no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'no-console': 'off',
      eqeqeq: 'error',
      curly: 'error',
    },
  },
  prettierConfig,
  {
    ignores: ['node_modules/', 'dist/', 'coverage/'],
  },
];
```

Create a `.prettierrc` file at the root:

```json
{
  "semi": true,
  "singleQuote": true,
  "trailingComma": "all",
  "printWidth": 100,
  "tabWidth": 2,
  "arrowParens": "always",
  "endOfLine": "lf"
}
```

And a `.prettierignore` file to avoid formatting what should not be:

```
node_modules
dist
coverage
package-lock.json
```

Add the scripts:

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.{js,json}\"",
    "format:check": "prettier --check \"src/**/*.{js,json}\""
  }
}
```

## Install Husky for Git hooks

Husky allows running scripts automatically before each commit. It acts as the gatekeeper that prevents non-compliant code from being recorded.

```bash
npm install --save-dev husky
npx husky init
```

The `husky init` command creates a `.husky/` directory and adds a `prepare` script to `package.json`. This script runs automatically after every `npm install` to activate the hooks.

## Install and configure lint-staged

lint-staged runs checks only on the files modified in the current commit. This avoids analyzing the entire project on every commit and keeps the process fast.

```bash
npm install --save-dev lint-staged
```

Add the configuration to `package.json`:

```json
{
  "lint-staged": {
    "src/**/*.{js,json}": [
      "eslint --fix",
      "prettier --write"
    ]
  }
}
```

Then configure the pre-commit hook to call lint-staged:

```bash
echo "npx lint-staged" > .husky/pre-commit
```

## Test the complete system

Intentionally introduce an error in the code to verify that the system works:

```js
// src/index.js — temporary addition
const unused = 42;
if (true == false) {
  console.log('dead code');
}
```

Attempt a commit:

```bash
git add .
git commit -m "test: verify pre-commit hook"
```

The hook intercepts the commit, ESLint flags the unused variable and the `==` operator instead of `===`. Prettier reformats the files. If blocking errors are not fixed, the commit is rejected.

## Summary

| Tool | Role |
|---|---|
| **ESLint** | Detects logical errors and bad practices |
| **Prettier** | Formats code uniformly |
| **Husky** | Runs scripts on Git hooks |
| **lint-staged** | Limits checks to staged files only |

## Final project structure

```
my-express-api/
  .husky/
    pre-commit
  src/
    index.js
  .prettierrc
  .prettierignore
  eslint.config.mjs
  package.json
```

## Going further

A few ways to strengthen the system:

- Add a `commit-msg` hook with **commitlint** to enforce the Conventional Commits format.
- Integrate **TypeScript** with `@typescript-eslint/parser` if the project evolves toward TS.
- Configure the same pipeline in CI (GitHub Actions, GitLab CI) as an additional safety net.
- Add **EditorConfig** to harmonize settings across editors.

This type of setup takes less than an hour to implement and saves dozens of hours of friction over the project's lifetime. It is a minimal investment for an immediate gain in productivity and consistency.
