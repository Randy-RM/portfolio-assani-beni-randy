import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BouncingArrow,
  Container,
  GsapInView,
  GsapRevealText,
  GsapSplitText,
  ProjectCardLarge,
  ProjectCardLargeSkeleton,
  Spacer,
} from "../components";
import AppShell from "../components/layout/app-shell";

/**
 * Forme sérialisée d'un projet passé depuis Astro.
 * Les types IGatsbyImageData sont remplacés par de simples URL string.
 */
export type AstroProjectData = {
  contentId: string;
  contentType: string;
  contentSlug: string;
  projectType?: "personal" | "customer" | "other";
  date: string;
  language: string;
  featuredImage?: string;
  liveProjectPreview?: string;
  contentTitle: string;
  projectSkills: string[];
  contentDescription: string;
};

type VisitMyWorksAppProps = {
  /** Tableau de tous les projets (toutes langues) passé par Astro getCollection() */
  projects: AstroProjectData[];
};

/**
 * VisitMyWorksApp - Application React pour la page des travaux.
 * Filtre les projets selon la langue détectée par react-i18next.
 * Reçoit `projects` depuis Astro Content Collections (sérialisé).
 */
const VisitMyWorksApp = ({ projects }: VisitMyWorksAppProps): JSX.Element => {
  const [isProjectLoading, setIsProjectLoading] = useState<boolean>(true);
  const [filteredProjects, setFilteredProjects] = useState<AstroProjectData[]>(
    [],
  );
  const { t, i18n } = useTranslation();

  useEffect(() => {
    // Filtre les projets selon la langue de l'utilisateur
    const lang = i18n.language?.startsWith("fr") ? "fr" : "en";
    setFilteredProjects(projects.filter((p) => p.language === lang));

    const timer = setTimeout(() => {
      setIsProjectLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, [i18n.language, projects]);

  const heroTitle = t("projectPage.heroSection.visitMyWorks");
  const splitDuration = 0.65;
  const splitStagger = 0.035;
  const splitAnimationTotalDuration =
    splitDuration +
    Math.max(Array.from(heroTitle).length - 1, 0) * splitStagger;

  return (
    <AppShell>
      {/* Hero section */}
      <section className="bg-primary-color">
        <div className="container">
          <Spacer height={4} />
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <div className="width-100">
              <h1 className="font-big-hero text-center font-w-Black">
                <GsapRevealText
                  className="font-outlined"
                  duration={splitDuration}
                  delay={splitAnimationTotalDuration}
                  direction="bottom-to-top"
                  content={heroTitle}
                />
                <br />
                <GsapSplitText
                  duration={splitDuration}
                  delay={0}
                  direction="bottom-to-top"
                  content={heroTitle}
                />
                <br />
                <GsapRevealText
                  className="font-outlined"
                  duration={splitDuration}
                  delay={splitAnimationTotalDuration}
                  direction="top-to-bottom"
                  content={heroTitle}
                />
              </h1>

              <p className="text-center">
                <GsapInView
                  as="span"
                  delay={0.6}
                  duration={3}
                  style={{ display: "inline-block" }}
                >
                  {t("projectPage.heroSection.leadText")}
                </GsapInView>
              </p>

              <GsapInView
                delay={0.9}
                duration={3}
                from={{ opacity: 0 }}
                to={{ opacity: 1 }}
              >
                <BouncingArrow />
              </GsapInView>
            </div>
          </Container>
          <Spacer height={6} />
        </div>
      </section>

      {/* Projects section */}
      <section className="bg-primary-color">
        {isProjectLoading ? (
          <div className="container">
            {[1, 2, 3].map((index) => (
              <ProjectCardLargeSkeleton key={`${index}-project-skeleton`} />
            ))}
          </div>
        ) : (
          <div className="container">
            {filteredProjects.map((project, index) => (
              <ProjectCardLarge
                key={`${index}-${project.contentId}`}
                projectName={project.contentTitle}
                projectDescription={project.contentDescription}
                projectSkills={project.projectSkills}
                projectImageUrl={project.featuredImage ?? null}
                projectType={project.projectType ?? null}
                projectUrl={project.liveProjectPreview ?? null}
              />
            ))}
          </div>
        )}
      </section>
    </AppShell>
  );
};

export default VisitMyWorksApp;
