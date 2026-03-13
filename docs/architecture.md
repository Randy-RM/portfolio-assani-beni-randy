# Architecture et fonctionnement du projet

## Vue d'ensemble

Ce projet est un portfolio statique construit avec Astro et React.

- Astro gère le shell HTML, le routage par fichiers et le build statique.
- React gère les parties interactives de l'interface.
- `react-i18next` gère l'internationalisation.
- Zustand gère l'état UI côté client.
- EmailJS permet l'envoi du formulaire de contact sans backend dédié.
- Sass centralise les styles globaux et thématiques.

## Stack technique

- Astro 4
- React 18
- TypeScript
- Sass
- Zustand
- react-i18next + i18next-browser-languagedetector
- react-hook-form + zod
- Framer Motion
- EmailJS

## Structure du projet

```text
.
├─ astro.config.mjs           # Configuration Astro/Vite
├─ package.json               # Scripts et dépendances
├─ sample.env                 # Exemple de variables d'environnement
├─ static/                    # Assets statiques servis à la racine
├─ src/
│  ├─ components/             # Composants UI React réutilisables
│  ├─ constants/              # Constantes métier/UI
│  ├─ content/                # Contenus Markdown Astro Collections
│  ├─ hooks/                  # Hooks React personnalisés
│  ├─ images/                 # Icônes et composants SVG React
│  ├─ layouts/                # Shell HTML Astro
│  ├─ pages/                  # Routes Astro
│  ├─ react-pages/            # Pages React montées dans les pages Astro
│  ├─ store/                  # Stores Zustand
│  ├─ styles/                 # Organisation Sass
│  ├─ translations/           # Ressources i18n
│  ├─ types/                  # Types globaux
│  └─ utils/                  # Fonctions utilitaires
└─ docs/                      # Documentation projet
```

## Rôles des dossiers principaux

### `src/pages`

Ce dossier contient les routes Astro.

- `index.astro` : page d'accueil
- `visit-my-works.astro` : page des projets
- `404.astro` : page 404

Chaque page Astro :
1. utilise `src/layouts/BaseLayout.astro` pour le document HTML,
2. monte ensuite une page React avec `client:load`.

## `src/layouts`

### `BaseLayout.astro`

C'est le shell HTML global.

Responsabilités :
- balises SEO,
- favicon,
- meta Open Graph / Twitter,
- prévention du flash de thème au chargement,
- conteneur `<slot />` pour les pages.

## `src/react-pages`

Contient la logique de page côté React.

- `HomeApp.tsx` : contenu de la page d'accueil
- `VisitMyWorksApp.tsx` : rendu de la page projets
- `NotFoundApp.tsx` : rendu de la page 404

Ces composants sont enveloppés par `AppShell`.

## `src/components`

Composants UI et layout.

Exemples :
- `layout/app-shell.tsx` : point d'entrée React commun
- `layout/frontoffice-layout.tsx` : header, footer, loader, modal, scroll-to-top
- `form/contact-me-form.tsx` : formulaire de contact
- `cards/project-card-large.tsx` : carte projet
- `theme-switcher/theme-switcher.tsx` : bascule du thème

## `src/content`

Contenus éditoriaux gérés avec Astro Content Collections.

- `content/projects/en/*.md`
- `content/projects/fr/*.md`
- `content/posts/en/*.md`
- `content/posts/fr/*.md`
- `content/config.ts` : schémas de validation des collections

Les projets affichés dans `/visit-my-works` sont lus au build via `getCollection("projects")`.

## `src/translations`

Gestion des textes traduits.

- `i18n.ts` initialise `i18next`
- `en/global.json` contient les textes anglais
- `fr/global.json` contient les textes français

Détection de langue :
1. `localStorage`
2. langue du navigateur
3. fallback anglais

## `src/store`

Stores Zustand utilisés côté client.

- `theme-store.ts` : thème clair/sombre, persisté en `sessionStorage`
- `loader-store.ts` : affichage du loader au chargement
- `mails-per-day-store.ts` : limite d'envoi du formulaire par session
- `modal-status-store.ts` : état du modal de feedback

## `static`

Assets servis à la racine du site.

Exemples :
- `/projects-images/...`
- `/documents/...`
- `/fonts/...`
- `/loader-img/...`
- `/background-img/...`

Le projet utilise explicitement `publicDir: "./static"` dans `astro.config.mjs`.

## Fonctionnement du rendu

## 1. Entrée HTTP

Astro sert une route basée sur un fichier de `src/pages`.

Exemple :
- `src/pages/index.astro` → `/`
- `src/pages/visit-my-works.astro` → `/visit-my-works`

## 2. Shell HTML Astro

La page Astro utilise `BaseLayout.astro` pour :
- définir le `<head>`,
- injecter les métadonnées SEO,
- poser la classe de thème avant hydratation React.

## 3. Hydratation React

Les pages React sont montées avec `client:load`.

Conséquence :
- Astro produit le HTML de page,
- React prend la main côté client dès le chargement.

## 4. AppShell

`AppShell` est le wrapper React principal.

Il :
- charge les styles globaux Sass,
- initialise le provider i18n,
- synchronise la classe de thème sur `<html>`,
- rend `FrontOfficeLayout`.

## 5. Layout front office

`FrontOfficeLayout` injecte l'ossature UI commune :
- `Header`
- `Modal`
- `Loader`
- contenu principal
- `ScrollToTopButton`
- `Footer`

## 5.1 Transition entre pages

La navigation interne attend une animation de sortie avant de changer d'URL.

Réglage principal :
- `PAGE_LEAVE_DURATION_MS` dans `src/components/layout/app-shell.tsx`

Propagation automatique :
- la valeur est utilisée par la logique JS (délai avant `window.location.href`),
- la même valeur est injectée en variable CSS `--page-leave-duration`,
- `src/styles/sass/layout/_page-transition.scss` consomme cette variable.

Effet :
- un seul endroit à modifier pour garder synchronisés
  le timing React + le timing SCSS.

## 6. Gestion du thème

Le thème est géré via Zustand.

- valeur persistée dans `sessionStorage`
- lecture anticipée dans `BaseLayout.astro`
- re-synchronisation dans `AppShell`

Objectif : éviter le flash entre thème clair et sombre au chargement.

## 7. Gestion des traductions

Les composants React utilisent `useTranslation()`.

Le changement de langue impacte :
- les labels de l'interface,
- le lien du CV,
- le filtrage des projets dans `VisitMyWorksApp`.

## 8. Chargement des projets

La page `visit-my-works.astro` :
1. lit les entrées de la collection `projects`,
2. sérialise le frontmatter,
3. passe les données à `VisitMyWorksApp`.

Ensuite côté React :
- la langue courante est détectée,
- les projets sont filtrés par `language`,
- des skeletons sont affichés pendant le chargement visuel.

## 9. Formulaire de contact

`ContactMeForm` fonctionne côté client.

Étapes :
1. validation avec `react-hook-form` + `zod`
2. anti-spam simple via champ honeypot caché
3. lecture des variables `PUBLIC_EMAILJS_*`
4. envoi via EmailJS
5. feedback utilisateur via le store modal
6. limite d'envois par session via Zustand

## Flux de données simplifié

```text
Route Astro
  -> BaseLayout.astro
  -> React page (client:load)
  -> AppShell
  -> FrontOfficeLayout
  -> composants métier/UI
```

Pour `/visit-my-works` :

```text
Astro Content Collection
  -> getCollection("projects")
  -> props React
  -> filtre par langue
  -> cartes projet
```

## Styling

Les styles sont centralisés dans `src/styles/sass/main.scss`.

Organisation Sass :
- `abstracts/` : variables, fonctions
- `base/` : reset, typo, fonts
- `components/` : styles de composants
- `layout/` : structure de mise en page
- `themes/` : variations de thème
- `vendors/` : styles spécifiques complémentaires

## Variables d'environnement

Voir `sample.env`.

Variables attendues :
- `HOME_LOCATION`
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

## Scripts disponibles

- `npm run dev` : serveur local Astro
- `npm run build` : build statique
- `npm run preview` : aperçu de production local
- `npm run typecheck` : vérification Astro + TypeScript

## Parcours typique de développement

1. lancer `npm run dev`
2. modifier une page Astro ou React
3. ajuster les traductions si nécessaire
4. ajouter/modifier le contenu Markdown dans `src/content`
5. valider avec `npm run typecheck`
6. générer la version de production avec `npm run build`
