---
contentId: "04"
contentType: "post"
contentSlug: "/precommit-lint-prettier-expressjs"
date: "2026-03-23"
language: "fr"
contentTags: ["Backend", "Tooling", "Express.js", "DX"]
contentTitle: "MISE EN PLACE D'UN SYSTEME DE PRE-COMMIT, LINT ET PRETTIER SUR UN PROJET EXPRESS.JS"
contentDescription: "Guide pratique pour configurer ESLint, Prettier et les hooks de pre-commit avec Husky et lint-staged sur un projet Express.js. Un socle de qualite de code indispensable pour toute equipe."
---

Sur un projet Express.js, la qualite du code ne se decrète pas : elle se construit avec des outils automatises qui protegent chaque commit. Cet article presente la mise en place complete d'un systeme de pre-commit base sur ESLint, Prettier, Husky et lint-staged.

## Pourquoi automatiser la qualite du code

Quand plusieurs developpeurs contribuent au meme projet, les conventions de style divergent rapidement. Les revues de code se transforment en debats sur les points-virgules au lieu de se concentrer sur la logique metier. Automatiser le formatage et le linting resout ce probleme a la source.

L'objectif est simple : aucun code mal formate ou contenant des erreurs de lint ne doit atteindre le depot distant. Ce filet de securite libere l'equipe et reduit le bruit dans les pull requests.

## Initialiser le projet Express.js

Si le projet n'existe pas encore, on part d'une base propre :

```bash
mkdir mon-api-express && cd mon-api-express
npm init -y
npm install express
```

On cree un fichier d'entree minimal pour avoir du code a analyser :

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

## Installer et configurer ESLint

ESLint detecte les erreurs de syntaxe, les variables inutilisees, les imports manquants et bien d'autres problemes avant l'execution.

```bash
npm install --save-dev eslint @eslint/js globals
```

On cree un fichier de configuration `eslint.config.mjs` a la racine du projet (format flat config, recommande depuis ESLint v9) :

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

On ajoute le script dans `package.json` :

```json
{
  "scripts": {
    "lint": "eslint src/",
    "lint:fix": "eslint src/ --fix"
  }
}
```

A ce stade, `npm run lint` analyse le code et remonte les problemes.

## Installer et configurer Prettier

Prettier prend en charge le formatage automatique : indentation, guillemets, points-virgules, longueur de ligne. Il n'a aucune opinion sur la logique du code, uniquement sur sa forme.

```bash
npm install --save-dev prettier eslint-config-prettier
```

Le paquet `eslint-config-prettier` desactive les regles ESLint qui entrent en conflit avec Prettier. On l'ajoute en dernier dans la configuration ESLint :

```js
// eslint.config.mjs (mise a jour)
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

On cree le fichier `.prettierrc` a la racine :

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

Et un fichier `.prettierignore` pour eviter de formater ce qui ne doit pas l'etre :

```
node_modules
dist
coverage
package-lock.json
```

On ajoute le script :

```json
{
  "scripts": {
    "format": "prettier --write \"src/**/*.{js,json}\"",
    "format:check": "prettier --check \"src/**/*.{js,json}\""
  }
}
```

## Installer Husky pour les hooks Git

Husky permet d'executer des scripts automatiquement avant chaque commit. C'est le gardien qui empeche le code non conforme d'etre enregistre.

```bash
npm install --save-dev husky
npx husky init
```

La commande `husky init` cree un dossier `.husky/` et ajoute un script `prepare` dans le `package.json`. Ce script s'execute automatiquement apres chaque `npm install` pour activer les hooks.

## Installer et configurer lint-staged

lint-staged execute les verifications uniquement sur les fichiers modifies dans le commit en cours. Cela evite d'analyser l'ensemble du projet a chaque commit et garde le processus rapide.

```bash
npm install --save-dev lint-staged
```

On ajoute la configuration dans `package.json` :

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

Puis on configure le hook de pre-commit pour appeler lint-staged :

```bash
echo "npx lint-staged" > .husky/pre-commit
```

## Tester le systeme complet

On introduit volontairement une erreur dans le code pour verifier que le systeme fonctionne :

```js
// src/index.js — ajout temporaire
const inutile = 42;
if (true == false) {
  console.log('dead code');
}
```

On tente un commit :

```bash
git add .
git commit -m "test: verification du hook pre-commit"
```

Le hook intercepte le commit, ESLint signale la variable inutilisee et l'operateur `==` au lieu de `===`. Prettier reformate les fichiers. Si les erreurs bloquantes ne sont pas corrigees, le commit est refuse.

## Recapitulatif de la chaine

| Outil | Role |
|---|---|
| **ESLint** | Detecte les erreurs logiques et les mauvaises pratiques |
| **Prettier** | Formate le code de maniere uniforme |
| **Husky** | Execute des scripts sur les hooks Git |
| **lint-staged** | Limite les verifications aux fichiers staged |

## Structure finale du projet

```
mon-api-express/
  .husky/
    pre-commit
  src/
    index.js
  .prettierrc
  .prettierignore
  eslint.config.mjs
  package.json
```

## Aller plus loin

Quelques pistes pour renforcer le systeme :

- Ajouter un hook `commit-msg` avec **commitlint** pour imposer le format Conventional Commits.
- Integrer **TypeScript** avec `@typescript-eslint/parser` si le projet evolue vers TS.
- Configurer la meme chaine dans la CI (GitHub Actions, GitLab CI) comme filet de securite supplementaire.
- Ajouter **EditorConfig** pour harmoniser les reglages entre editeurs.

Ce type de configuration prend moins d'une heure a mettre en place et evite des dizaines d'heures de friction sur la duree de vie du projet. C'est un investissement minimal pour un gain de productivite et de coherence immediat.
