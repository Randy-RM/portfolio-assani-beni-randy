import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BouncingArrow,
  Container,
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

  // Découpe en lettres pour l'animation hero
  const heroText = t("projectPage.heroSection.visitMyWorks").split("");

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
                {heroText.map((letter, index) => (
                  <motion.span
                    className="font-outlined"
                    key={`${index}-letter-a`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.1 * index }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <br />
                {heroText.map((letter, index) => (
                  <motion.span
                    key={`${index}-letter-b`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.1 * index }}
                  >
                    {letter}
                  </motion.span>
                ))}
                <br />
                {heroText.map((letter, index) => (
                  <motion.span
                    className="font-outlined"
                    key={`${index}-letter-c`}
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ type: "spring", delay: 0.1 * index }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </h1>

              <p className="text-center">
                <motion.span
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.6, duration: 3 }}
                >
                  {t("projectPage.heroSection.leadText")}
                </motion.span>
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ type: "spring", delay: 0.9, duration: 3 }}
              >
                <BouncingArrow />
              </motion.div>
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
