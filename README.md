# Portfolio Assani Beni Randy

Portfolio personnel construit avec Astro, React et TypeScript.

## Objectif du projet

Ce projet sert à présenter :
- le profil du développeur,
- ses compétences,
- ses projets,
- un formulaire de contact,
- une expérience bilingue français / anglais,
- un thème clair / sombre.

## Stack

- Astro
- React
- TypeScript
- Sass
- Zustand
- react-i18next
- Framer Motion
- EmailJS
- react-hook-form
- zod

## Démarrage rapide

## 1. Installer les dépendances

```bash
npm install
```

## 2. Créer le fichier d'environnement

Créer un fichier `.env` à la racine à partir de `sample.env`.

Variables attendues :

- `HOME_LOCATION`
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

## 3. Lancer le projet en local

```bash
npm run dev
```

## 4. Vérifier le typage

```bash
npm run typecheck
```

## 5. Générer la version de production

```bash
npm run build
```

## Scripts disponibles

- `npm run dev` : lance le serveur de développement
- `npm run start` : alias de développement
- `npm run build` : génère le site statique
- `npm run preview` : prévisualise le build localement
- `npm run typecheck` : lance les vérifications Astro + TypeScript

## Variables d'environnement

Voir [sample.env](sample.env).

### Variables utilisées

- `HOME_LOCATION` : URL publique du site
- `PUBLIC_EMAILJS_SERVICE_ID` : identifiant du service EmailJS
- `PUBLIC_EMAILJS_TEMPLATE_ID` : identifiant du template EmailJS
- `PUBLIC_EMAILJS_PUBLIC_KEY` : clé publique EmailJS

## Documentation

### Déploiement sur Netlify

Voir [docs/deployment-netlify.md](docs/deployment-netlify.md).

Le dépôt contient aussi [netlify.toml](netlify.toml) pour préconfigurer le build Netlify.

### Structure et fonctionnement du projet

Voir [docs/architecture.md](docs/architecture.md).

## Architecture rapide

Le projet suit ce principe :

```text
Pages Astro
  -> shell HTML global
  -> hydratation des pages React
  -> composants UI + stores Zustand
  -> contenus statiques et contenus Markdown
```

## Pages principales

- `/` : accueil
- `/visit-my-works` : projets
- `/404` : page d'erreur

## Répertoires clés

- [src/pages](src/pages) : routes Astro
- [src/react-pages](src/react-pages) : pages React
- [src/components](src/components) : composants UI
- [src/content](src/content) : contenus Markdown
- [src/store](src/store) : stores Zustand
- [src/translations](src/translations) : i18n
- [src/styles](src/styles) : styles Sass
- [static](static) : assets statiques

## Notes importantes

- Le projet est généré en statique.
- Les assets publics sont servis depuis [static](static), car `astro.config.mjs` utilise `publicDir: "./static"`.
- Le formulaire de contact dépend d'EmailJS côté client.
- Les projets affichés dans `/visit-my-works` proviennent des collections Astro dans [src/content](src/content).

## Recommandation

Avant chaque mise en production :

1. vérifier les variables d'environnement,
2. lancer `npm run typecheck`,
3. lancer `npm run build`,
4. tester avec `npm run preview`.
