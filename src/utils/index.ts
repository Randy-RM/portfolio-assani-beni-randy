/**
 * Retourne l'URL du CV dans la bonne langue selon le code langue.
 * Gestion défensive : si languageCode est undefined/null, fallback sur 'en'.
 */
export const returnResumeInCorrectLanguage = (
  languageCode?: string,
): string => {
  if (languageCode?.startsWith("fr")) {
    return "/documents/CV-FR-Assani-Beni-Randy.pdf";
  }
  return "/documents/CV-EN-Assani-Beni-Randy.pdf";
};

/**
 * Type Guard pour ProjectType.
 * Vérifie qu'une valeur inconnue est bien de type ProjectType.
 */
const projectTypes = ["personal", "customer", "other"] as const;
export const isProjectType = (x: unknown): x is ProjectType =>
  projectTypes.includes(x as ProjectType);
