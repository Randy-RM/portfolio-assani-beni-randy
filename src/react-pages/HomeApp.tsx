import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Badge,
  ContactMeForm,
  Container,
  GsapRevealImage,
  GsapRevealText,
  GsapScrollBanner,
  GsapSplitText,
  Spacer,
} from "../components";
import { technologies } from "../constants";
import {
  DesignPencilIcon,
  GithubIcon,
  LeaderboardStarIcon,
  LinkedinIcon,
  ToolsIcon,
} from "../images";
import AppShell from "../components/layout/app-shell";
import { returnResumeInCorrectLanguage } from "../utils";

/**
 * HomeApp - Application React complète pour la page d'accueil.
 * Inclut AppShell (thème + layout) et tout le contenu de la page.
 * Rendu côté client via `client:load` dans index.astro
 */
const HomeApp = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <AppShell>
      {/* Hero section */}
      <section className="bg-primary-color">
        <div className="container">
          <Spacer height={2} />
          <Container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            {/* <motion.div
              className="width-50 text-center-on-mobile"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3, duration: 2 }}
            >
            </motion.div> */}
            <div className="width-50 text-center-on-mobile">
              <h2 className="font-big-hero font-w-Black">
                <GsapSplitText
                  className="font-outlined"
                  duration={0.65}
                  content={t("homePage.heroSection.iAm")}
                />
                <br />
                <GsapSplitText duration={0.9} content="Software" />
                <br />
                <GsapRevealText
                  className="font-animated-gradient-color"
                  duration={1.5}
                  content="Engineer"
                />
              </h2>
              <p className="font-lead-hero">
                {t("homePage.heroSection.myPassionsP1")}
                <br />
                {t("homePage.heroSection.myPassionsP2")}
              </p>
              <Container
                flexDirection="row"
                alignItems="center"
                flexWrap="wrap"
              >
                <p className="width-40 width-35-on-large">
                  <a href="#sendMeMessage" className="btn btn-primary">
                    {t("homePage.heroSection.contactBtn")}
                  </a>
                </p>
                <p className="width-40 width-35-on-large">
                  &nbsp;
                  <a
                    href={returnResumeInCorrectLanguage(i18n.language)}
                    className="btn"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {t("homePage.heroSection.myResume")}{" "}
                    <Icon icon="iconoir:google-docs" />
                  </a>
                </p>
              </Container>
            </div>

            <GsapRevealImage
              className="width-40 hide-bloc-on-mobile"
              imageClassName="hero-image"
              src="/rm-hero-photo.png"
              alt="Randy Assani Picture"
              duration={1.15}
            />
          </Container>
          <Spacer height={6} />
        </div>
      </section>

      {/* Hybrid animation sample (GSAP only on this block) */}
      <section className="bg-primary-color">
        <div className="container">
          <Spacer height={2} />
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <GsapScrollBanner
              text={t("homePage.visitWorkSection.visitWorkTitle")}
            />
          </Container>
          <Spacer height={2} />
        </div>
      </section>

      {/* About me section */}
      <section className="bg-primary-color">
        <div className="container">
          <Spacer height={3} />
          <Spacer height={6} />
          <Container
            flexDirection="row"
            justifyContent="space-between"
            alignItems="center"
            flexWrap="wrap"
          >
            <motion.div
              className="width-40 text-center-on-mobile"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3, duration: 2 }}
            >
              <h2 className="font-w-Black h2 margin-0">
                {t("homePage.aboutMeSection.aboutMeTitleP1")}{" "}
                <span>{t("homePage.aboutMeSection.aboutMeTitleP2")}</span>
              </h2>
              <p>
                <span className="font-w-extra-bold">{t("followMe")}</span>
                <br />
                <a
                  href="https://github.com/Randy-RM"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to my github"
                >
                  <GithubIcon
                    className="themed-stroke-icon"
                    alt={t("githubIconDesc")}
                  />
                </a>
                &nbsp;
                <a
                  href="https://www.linkedin.com/in/randy-assani-beni-ab101216b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Go to my linkedin"
                >
                  <LinkedinIcon
                    className="themed-stroke-icon"
                    alt={t("LinkdinIconDesc")}
                  />
                </a>
              </p>
            </motion.div>

            <motion.div
              className="width-50 p-2 bg-tertiary-color text-center-on-mobile"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.5, duration: 2 }}
            >
              <h1 className="font-h1-unstyled">
                {t("homePage.aboutMeSection.aboutMeDescriptionP1")}
              </h1>
              <p>
                {t("homePage.aboutMeSection.aboutMeDescriptionP2")}{" "}
                <mark>{t("homePage.aboutMeSection.aboutMeDescriptionP3")}</mark>{" "}
                {t("homePage.aboutMeSection.aboutMeDescriptionP4")}
              </p>
              <p>{t("homePage.aboutMeSection.aboutMeDescriptionP5")}</p>
            </motion.div>
          </Container>
          <Spacer height={6} />
          <Spacer height={3} />
        </div>
      </section>

      {/* Teaching experience section */}
      <section className="bg-primary-color">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ type: "spring", delay: 0.3, duration: 2 }}
        >
          <div className="container bg-graduation-image">
            <Spacer height={6} />
            <Spacer height={6} />
            <Container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
            >
              <div className="width-70">
                <p className="text-left font-big-braket-top font-w-Black margin-0">
                  "
                </p>
                <p className="text-center font-w-light margin-0">
                  {t("homePage.teachingExperience")}
                </p>
                <p className="text-right font-big-braket-bottom font-w-Black margin-0">
                  "
                </p>
              </div>
            </Container>
            <Spacer height={2} />
          </div>
        </motion.div>
      </section>

      {/* Technologies section */}
      <section className="bg-primary-color">
        <div className="container">
          <Spacer height={6} />
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <motion.div
              className="width-50 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3, duration: 2 }}
            >
              <h2 className="font-w-Black h2 margin-0">
                <span>
                  {t("homePage.technologiesSection.technologiesTitleP1")}
                </span>
                {t("homePage.technologiesSection.technologiesTitleP2")}
              </h2>
              <p>{t("homePage.technologiesSection.technologiesDesc")}</p>
            </motion.div>

            <div className="width-50 text-center">
              <Spacer />
              {technologies.map((technology, index) => (
                <motion.span
                  key={`${index}-technology`}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    delay: 0.2 * index,
                    duration: 1,
                  }}
                >
                  <Badge badgeText={technology} />
                </motion.span>
              ))}
              <Spacer />
            </div>
          </Container>
          <Spacer height={6} />
        </div>
      </section>

      {/* Visit work section */}
      <section className="bg-primary-color">
        <div className="container">
          <Spacer height={6} />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3, duration: 2 }}
          >
            <Container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
            >
              <div className="width-50 text-center">
                <h2
                  className="secondary-font dashed-shadow-text dashed-shadow margin-0"
                  data-text={t("homePage.visitWorkSection.visitWorkTitle")}
                >
                  {t("homePage.visitWorkSection.visitWorkTitle")}
                </h2>
                <Spacer height={2} />
                <p>
                  <a href="/visit-my-works" className="btn btn-primary">
                    {t("homePage.visitWorkSection.visitWorkButton")}
                  </a>
                </p>
                <Spacer />
              </div>
            </Container>
          </motion.div>
          <Spacer height={6} />
        </div>
      </section>

      {/* Experience section */}
      <section className="bg-primary-color">
        <div className="container">
          <Spacer height={6} />
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            flexWrap="wrap"
          >
            <motion.div
              className="width-100 text-center"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ type: "spring", delay: 0.3, duration: 2 }}
            >
              <h2 className="font-w-Black h2 margin-0">
                <span>{t("homePage.experienceSection.experienceTitleP1")}</span>
                {t("homePage.experienceSection.experienceTitleP2")}
              </h2>
              <Spacer height={1} />
            </motion.div>

            <div className="width-100 text-center">
              <Container
                flexDirection="column"
                justifyContent="space-between"
                alignItems="flex-start"
                flexWrap="wrap"
              >
                {/* Engineering card */}
                <motion.div
                  className="width-100"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.3, duration: 2 }}
                >
                  <Spacer height={2} />
                  <Container
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <div className="width-20 p-2">
                      <p>
                        <ToolsIcon
                          className="themed-stroke-icon card-img-responsive"
                          alt={t(
                            "homePage.experienceSection.engineeringCard.engineeringCardIconDesc",
                          )}
                        />
                      </p>
                    </div>
                    <div className="width-70">
                      <h3 className="h3 font-w-extra-bold margin-0">
                        {t(
                          "homePage.experienceSection.engineeringCard.engineeringCardTitle",
                        )}
                      </h3>
                      <p>
                        {t(
                          "homePage.experienceSection.engineeringCard.engineeringCardDesc",
                        )}
                      </p>
                    </div>
                  </Container>
                  <Spacer height={2} />
                </motion.div>

                {/* Design card */}
                <motion.div
                  className="width-100"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.3, duration: 2 }}
                >
                  <Spacer height={6} />
                  <Container
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <div className="width-20 p-2">
                      <p>
                        <DesignPencilIcon
                          className="themed-stroke-icon card-img-responsive"
                          alt={t(
                            "homePage.experienceSection.designCard.designCardIconDesc",
                          )}
                        />
                      </p>
                    </div>
                    <div className="width-70">
                      <h3 className="h3 font-w-extra-bold margin-0">
                        {t(
                          "homePage.experienceSection.designCard.designCardTitle",
                        )}
                      </h3>
                      <p>
                        {t(
                          "homePage.experienceSection.designCard.designCardDesc",
                        )}
                      </p>
                    </div>
                  </Container>
                  <Spacer height={6} />
                </motion.div>

                {/* Project card */}
                <motion.div
                  className="width-100"
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ type: "spring", delay: 0.3, duration: 2 }}
                >
                  <Spacer height={2} />
                  <Container
                    flexDirection="column"
                    justifyContent="space-evenly"
                    alignItems="center"
                    flexWrap="wrap"
                  >
                    <div className="width-20 p-2">
                      <p>
                        <LeaderboardStarIcon
                          className="themed-stroke-icon card-img-responsive"
                          alt={t(
                            "homePage.experienceSection.projectCard.projectCardIconDesc",
                          )}
                        />
                      </p>
                    </div>
                    <div className="width-70">
                      <h3 className="h3 font-w-extra-bold margin-0">
                        {t(
                          "homePage.experienceSection.projectCard.projectCardTitle",
                        )}
                      </h3>
                      <p>
                        {t(
                          "homePage.experienceSection.projectCard.projectCardDesc",
                        )}
                      </p>
                    </div>
                  </Container>
                  <Spacer height={2} />
                </motion.div>
              </Container>
            </div>
          </Container>
          <Spacer height={6} />
        </div>
      </section>

      {/* Contact form section */}
      <section className="bg-primary-color" id="sendMeMessage">
        <div className="container">
          <Spacer height={6} />
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", delay: 0.3, duration: 2 }}
          >
            <Container
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              flexWrap="wrap"
            >
              <div className="width-100 text-center bg-paper-plane-right">
                <h2 className="font-w-semi-medium h2 margin-0">
                  {t("homePage.sendMessageSection.sendMessageTitle")}
                </h2>
                <p>
                  {t("homePage.sendMessageSection.sendMessageDescP1")} <br />{" "}
                  {t("homePage.sendMessageSection.sendMessageDescP2")}
                </p>
              </div>
              <div className="width-70">
                <Spacer />
                <ContactMeForm />
                <Spacer />
              </div>
            </Container>
          </motion.div>
          <Spacer height={6} />
        </div>
      </section>
    </AppShell>
  );
};

export default HomeApp;
