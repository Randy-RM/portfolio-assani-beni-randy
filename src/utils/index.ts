export const returnResumeInCorrectLanguage = (languageCode: string): string => {
  if (languageCode === "fr") {
    return "/documents/CV-FR-Assani-Beni-Randy.pdf";
  }
  return "/documents/CV-EN-Assani-Beni-Randy.pdf";
};
