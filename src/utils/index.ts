import i18n from "../translations/i18n";

export const returnResumeInCorrectLanguage = (languageCode: string): string => {
  if (languageCode === "fr") {
    return "/documents/CV-FR-Assani-Beni-Randy.pdf";
  }
  return "/documents/CV-EN-Assani-Beni-Randy.pdf";
};

export const extractDataFromAllMarkdownRemark = (datas: {
  allMarkdownRemark: { edges: IEdge[] };
}) => {
  const dataExtracted = datas.allMarkdownRemark.edges.map((data) => {
    return data.node.frontmatter;
  });
  return dataExtracted.filter((data) => {
    return data.language == i18n.language;
  });
};

// Type Guard for ProjectType
const projectType = ["personal", "customer", "other"] as const;
export const isProjectType = (x: any): x is ProjectType =>
  projectType.includes(x);
