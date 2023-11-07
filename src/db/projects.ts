import kadeaLandingImgUrl from "../assets/images/my-works/kadea-online-landing-logo.png";
import cameoLiveLandingImgUrl from "../assets/images/my-works/cameolive-landing-logo.png";
import rmLandingImgUrl from "../assets/images/my-works/rm-landing-logo.png";

const projects: Project[] = [
  {
    idProject: "01",
    projectName: "KADEA ONLINE",
    projectDescription: `Kadea Online is an interactive online learning platform for digital professions. It's one of my favorite projects. I developed and maintained this project for the Kadea company.`,
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
    projectDescription: `Cameolive is an application that lets you search for information on series and films using a device connected to the Internet. This is a personal project.`,
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
    projectName: "HAPPY ROBOT FRIEND TOY",
    projectDescription: `Fun application that displays a list of funny and amusing characters. This application allows you to consult the list of characters and see details about them. This project is an exercise project.`,
    projectSkills: ["HTML", "CSS", "JavaScript", "Node Js", "React Js", "API"],
    projectImageUrl: `${rmLandingImgUrl}`,
    projectType: "other",
    projectUrl: "https://happy-robot-friend-toy.netlify.app",
  },
];

export default projects;
