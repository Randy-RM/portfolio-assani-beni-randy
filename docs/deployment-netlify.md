# Déploiement sur Netlify

Ce projet est compatible avec un déploiement statique sur Netlify.

## Résumé de configuration

- Framework : Astro
- Type de sortie : statique (`output: "static"`)
- Dossier publié : `dist`
- Commande de build : `npm run build`
- Fichier de config versionné : [netlify.toml](../netlify.toml)

## Prérequis

- un dépôt Git connecté à Netlify
- Node.js LTS sur votre machine pour les tests locaux
- les variables d'environnement configurées dans Netlify

## Variables d'environnement à configurer

Définir les variables suivantes dans Netlify :

- `HOME_LOCATION`
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

### Valeurs attendues

#### `HOME_LOCATION`

URL publique du site, par exemple :

- `https://mon-site.netlify.app`
- `https://www.mondomaine.com`

Cette variable est utilisée pour :
- les meta tags SEO,
- les URLs sociales (Open Graph / Twitter),
- la cohérence des URLs absolues.

#### Variables EmailJS

Elles permettent au formulaire de contact de fonctionner côté client.

- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

Sans elles, le formulaire de contact ne pourra pas envoyer d'email.

## Déploiement via l'interface Netlify

## 1. Importer le dépôt

Dans Netlify :
- cliquez sur **Add new site**
- choisissez **Import an existing project**
- connectez votre provider Git
- sélectionnez le repository

## 2. Renseigner les paramètres de build

Utiliser :

- **Build command** : `npm run build`
- **Publish directory** : `dist`

Si Netlify détecte automatiquement [netlify.toml](../netlify.toml), ces valeurs seront déjà préremplies.

## 3. Ajouter les variables d'environnement

Dans **Site configuration > Environment variables**, ajouter :

- `HOME_LOCATION`
- `PUBLIC_EMAILJS_SERVICE_ID`
- `PUBLIC_EMAILJS_TEMPLATE_ID`
- `PUBLIC_EMAILJS_PUBLIC_KEY`

## 4. Lancer le premier déploiement

Netlify installera les dépendances puis exécutera le build.

## Vérification locale avant déploiement

Avant de pousser, vérifier :

1. `npm install`
2. `npm run typecheck`
3. `npm run build`
4. `npm run preview`

Cela permet de valider :
- le typage,
- la génération du site statique,
- le rendu de production en local.

## Fonctionnement du build sur Netlify

Lors du build :

1. Astro compile les pages de `src/pages`
2. le contenu de `src/content` est validé et intégré
3. React est bundle pour les composants hydratés côté client
4. les assets statiques de `static/` sont copiés dans `dist/`

## Points d'attention

## 1. Dossier des assets statiques

Le projet utilise :

- `publicDir: "./static"`

Cela signifie que les fichiers de `static/` sont servis à la racine du site.

Exemples :
- `static/projects-images/demo.png` → `/projects-images/demo.png`
- `static/documents/cv.pdf` → `/documents/cv.pdf`

## 2. Formulaire de contact

Le formulaire repose sur EmailJS côté client.

Implications :
- les variables `PUBLIC_EMAILJS_*` doivent être présentes,
- le navigateur doit pouvoir appeler EmailJS,
- les paramètres du service EmailJS doivent correspondre au template configuré.

## 3. SEO

La variable `HOME_LOCATION` doit être l'URL finale du site en production.

Sinon :
- les images sociales peuvent être incorrectes,
- certaines URLs absolues de meta tags seront fausses.

## 4. Internationalisation

La langue est détectée côté client.

Comportement :
- préférence sauvegardée dans `localStorage`
- fallback sur la langue du navigateur
- fallback final sur l'anglais

## Déploiement avec un domaine personnalisé

Si vous ajoutez un domaine personnalisé sur Netlify :

1. configurez le domaine dans Netlify
2. mettez à jour `HOME_LOCATION` avec ce domaine
3. relancez un déploiement

Exemple :
- avant : `https://mon-site.netlify.app`
- après : `https://www.mondomaine.com`

## Vérifications après déploiement

Après publication, tester :

- la page d'accueil
- la page `/visit-my-works`
- la page 404
- le changement de thème
- le changement de langue
- le formulaire de contact
- les images de projets
- les documents PDF du CV

## Dépannage

## Le build échoue

Vérifier :
- que les dépendances s'installent correctement
- que `npm run build` passe en local
- que les variables d'environnement sont définies
- que les contenus Markdown respectent le schéma défini dans `src/content/config.ts`

## Les images ou fichiers statiques ne s'affichent pas

Vérifier :
- qu'ils sont bien dans `static/`
- que les chemins commencent par `/`
- qu'ils existent après build dans `dist/`

## Le formulaire ne fonctionne pas

Vérifier :
- les variables `PUBLIC_EMAILJS_*`
- la configuration EmailJS
- le template et les paramètres attendus

## Recommandation pratique

Pour fiabiliser le déploiement :

- valider systématiquement avec `npm run typecheck`
- lancer un build local avant chaque mise en production
- garder `HOME_LOCATION` synchronisé avec l'URL publique réelle du site
