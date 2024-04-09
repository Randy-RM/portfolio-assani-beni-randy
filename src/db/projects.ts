import cameoLiveLandingImgUrl from "../assets/images/my-works/cameolive-landing-logo.png";
import kadeaLandingImgUrl from "../assets/images/my-works/kadea-online-landing-logo.png";
import rmLandingImgUrl from "../assets/images/my-works/rm-landing-logo.png";
import i18n from "../translations/i18n";

const projects: Project[] = [
  {
    idProject: "01",
    projectName: "KADEA ONLINE",
    projectDescription: i18n.t("projects.kadeaOnlineDesc"),
    projectSkills: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Node Js",
      "React Js",
      "Express Js",
      "MongDB",
      "API",
    ],
    projectImageUrl: `${kadeaLandingImgUrl}`,
    projectType: "other",
    projectUrl: "https://online.kadea.co/",
  },
  {
    idProject: "02",
    projectName: "CAMEOLIVE",
    projectDescription: i18n.t("projects.kameoliveDesc"),
    projectSkills: [
      "HTML",
      "Sass",
      "JavaScript",
      "TypeScript",
      "Node Js",
      "React Js",
      "API",
    ],
    projectImageUrl: `${cameoLiveLandingImgUrl}`,
    projectType: "other",
    projectUrl: "https://cameolive.netlify.app",
  },
  {
    idProject: "03",
    projectName: "HAPPY ROBOT FRIEND",
    projectDescription: i18n.t("projects.robotFrindDesc"),
    projectSkills: ["HTML", "CSS", "JavaScript", "Node Js", "React Js", "API"],
    projectImageUrl: `${rmLandingImgUrl}`,
    projectType: "other",
    projectUrl: "https://happy-robot-friend-toy.netlify.app",
  },
];

export default projects;
