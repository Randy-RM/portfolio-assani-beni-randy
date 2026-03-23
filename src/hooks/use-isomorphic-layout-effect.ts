import { useEffect, useLayoutEffect } from "react";

/**
 * Hook isomorphique qui résout le warning React :
 * "useLayoutEffect does nothing on the server".
 *
 * Pendant le rendu SSR d'Astro, `window` n'existe pas et React
 * avertit que useLayoutEffect est inutile côté serveur.
 * Ce hook utilise :
 * - useLayoutEffect côté client (pour agir avant le premier paint)
 * - useEffect côté serveur (silencieux, sans warning)
 *
 * À utiliser partout où l'on aurait mis useLayoutEffect dans un
 * composant qui peut être rendu côté serveur (SSR / pre-rendering).
 */
const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;

export default useIsomorphicLayoutEffect;
