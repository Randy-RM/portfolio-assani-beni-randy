import i18next from "i18next";
import kadeaLandingImgUrl from "../assets/images/my-works/kadea-online-landing-logo.png";
import cameoLiveLandingImgUrl from "../assets/images/my-works/cameolive-landing-logo.png";
import rmLandingImgUrl from "../assets/images/my-works/rm-landing-logo.png";

const projects: Project[] = [
  {
    idProject: "01",
    projectName: "KADEA ONLINE",
    projectDescription: i18next.t("projects.kadeaOnlineDesc"),
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
    projectDescription: i18next.t("projects.kameoliveDesc"),
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
    projectDescription: i18next.t("projects.robotFrindDesc"),
    projectSkills: ["HTML", "CSS", "JavaScript", "Node Js", "React Js", "API"],
    projectImageUrl: `${rmLandingImgUrl}`,
    projectType: "other",
    projectUrl: "https://happy-robot-friend-toy.netlify.app",
  },
];

export default projects;
