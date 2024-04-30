import { Icon } from "@iconify/react";
import { motion } from "framer-motion";
import { HeadFC, Link } from "gatsby";
import { AnchorLink } from "gatsby-plugin-anchor-links";
import { StaticImage } from "gatsby-plugin-image";
import * as React from "react";
import { useTranslation } from "react-i18next";
import {
  Badge,
  BaseHead,
  ContactMeForm,
  Container,
  FrontOfficeLayout,
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
import { returnResumeInCorrectLanguage } from "../utils";

export const Head: HeadFC = () => {
  return (
    <BaseHead>
      <>
        <title>About me | Randy Assani RM</title>
        {/**metaDescription start */}
        <meta
          name="description"
          content={`I'm Software Engineer with a Computer Science degree and experience on computer engineering, software development & graphic design.`}
        />
        <meta
          name="og:description"
          key="og:description"
          content={`I'm Software Engineer with a Computer Science degree and experience on computer engineering, software development & graphic design.`}
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content={`I'm Software Engineer with a Computer Science degree and experience on computer engineering, software development & graphic design.`}
        />
        {/**metaDescription end */}
      </>
    </BaseHead>
  );
};

const HomePage = (): JSX.Element => {
  const { t, i18n } = useTranslation();

  return (
    <FrontOfficeLayout>
      <div>
        {/**Hero section start */}
        <section className="bg-primary-color">
          <div className="container">
            <Spacer height={2} />
            <Container
              flexDirection="row"
              justifyContent="space-between"
              alignItems="center"
              flexWrap="wrap"
            >
              <motion.div
                className="width-50 text-center-on-mobile"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  delay: 0.3,
                  easeInOut: "linear",
                  duration: 2,
                  // bounce: 0.6,
                }}
              >
                <h2 className="font-big-hero font-w-Black">
                  <span className="font-outlined">
                    {t(`homePage.heroSection.iAm`)}
                  </span>
                  <br />
                  <span className="">{`Software`}</span>
                  <br />
                  <span className="font-animated-gradient-color">
                    {`Engineer`}
                  </span>
                </h2>
                <p className="font-lead-hero">
                  {t(`homePage.heroSection.myPassionsP1`)}
                  <br />
                  {t(`homePage.heroSection.myPassionsP2`)}
                </p>
                <Container
                  flexDirection="row"
                  // justifyContent="space-between"
                  alignItems="center"
                  flexWrap="wrap"
                >
                  <p className="width-40 width-35-on-large">
                    <AnchorLink
                      stripHash
                      to="/#sendMeMessage"
                      className="btn btn-primary"
                    >
                      {t(`homePage.heroSection.contactBtn`)}
                    </AnchorLink>
                  </p>
                  <p className="width-40 width-35-on-large">
                    &nbsp;
                    <a
                      href={returnResumeInCorrectLanguage(i18n.language)}
                      className="btn"
                      target="_blank"
                    >
                      {t(`homePage.heroSection.myResume`)}{" "}
                      <Icon icon="iconoir:google-docs" />
                    </a>
                  </p>
                </Container>
              </motion.div>
              <motion.div
                className="width-40 hide-bloc-on-mobile"
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  delay: 0.3,
                  easeInOut: "linear",
                  duration: 2,
                  // bounce: 0.6,
                }}
              >
                <div>
                  <StaticImage
                    // loading="lazy"
                    src="../images/rm-hero-photo.png"
                    alt="Randy Assani Picture"
                    className="hero-image"
                  />
                </div>
              </motion.div>
            </Container>
            <Spacer height={6} />
          </div>
        </section>
        {/**Hero section end */}
        {/**About me section start */}
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
                transition={{
                  type: "spring",
                  delay: 0.3,
                  easeInOut: "linear",
                  duration: 2,
                  // bounce: 0.6,
                }}
              >
                <h2 className="font-w-Black h2 margin-0">
                  {t(`homePage.aboutMeSection.aboutMeTitleP1`)}{" "}
                  <span className="">
                    {t(`homePage.aboutMeSection.aboutMeTitleP2`)}
                  </span>
                </h2>
                <p>
                  <span className="font-w-extra-bold">{t(`followMe`)}</span>
                  <br />
                  <a
                    href="https://github.com/Randy-RM"
                    target="_blank"
                    aria-label="Go to my github"
                  >
                    <GithubIcon
                      className="themed-stroke-icon"
                      alt={t(`githubIconDesc`)}
                    />
                  </a>
                  &nbsp;
                  <a
                    href="https://www.linkedin.com/in/randy-assani-beni-ab101216b/"
                    target="_blank"
                    aria-label="Go to my linkedin"
                  >
                    <LinkedinIcon
                      className="themed-stroke-icon"
                      alt={t(`LinkdinIconDesc`)}
                    />
                  </a>
                </p>
              </motion.div>
              <motion.div
                className="width-50 p-2 bg-tertiary-color text-center-on-mobile"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{
                  type: "spring",
                  delay: 0.5,
                  easeInOut: "linear",
                  duration: 2,
                  // bounce: 0.6,
                }}
              >
                <h1 className="font-h1-unstyled">
                  {t(`homePage.aboutMeSection.aboutMeDescriptionP1`)}
                </h1>
                <p>
                  {t(`homePage.aboutMeSection.aboutMeDescriptionP2`)}{" "}
                  <mark>
                    {t(`homePage.aboutMeSection.aboutMeDescriptionP3`)}
                  </mark>{" "}
                  {t(`homePage.aboutMeSection.aboutMeDescriptionP4`)}
                </p>
                <p>{t(`homePage.aboutMeSection.aboutMeDescriptionP5`)}</p>
              </motion.div>
            </Container>
            <Spacer height={6} />
            <Spacer height={3} />
          </div>
        </section>
        {/**About me section end */}
        {/**About me teaching section start */}
        <section className="bg-primary-color">
          <motion.div
            className=""
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              type: "spring",
              delay: 0.3,
              easeInOut: "linear",
              duration: 2,
              // bounce: 0.6,
            }}
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
                    {t(`homePage.teachingExperience`)}
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
        {/**About me teaching section end */}
        {/**Technologies section start */}
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
                transition={{
                  type: "spring",
                  delay: 0.3,
                  easeInOut: "linear",
                  duration: 2,
                  // bounce: 0.6,
                }}
              >
                <h2 className="font-w-Black h2 margin-0">
                  <span className="">
                    {t(`homePage.technologiesSection.technologiesTitleP1`)}
                  </span>
                  {t(`homePage.technologiesSection.technologiesTitleP2`)}
                </h2>
                <p>{t(`homePage.technologiesSection.technologiesDesc`)}</p>
              </motion.div>
              <div className="width-50 text-center">
                <Spacer />
                {technologies.map((technology, index): JSX.Element => {
                  return (
                    <motion.span
                      key={`${index}-technology`}
                      initial={{ opacity: 0, y: 40 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{
                        type: "spring",
                        delay: 0.2 * index,
                        easeInOut: "linear",
                        duration: 1,
                      }}
                    >
                      <Badge badgeText={technology} />
                    </motion.span>
                  );
                })}
                <Spacer />
              </div>
            </Container>
            <Spacer height={6} />
          </div>
        </section>
        {/**Technologies section end */}
        {/**Visit work section start */}
        <section className="bg-primary-color">
          <div className="container">
            <Spacer height={6} />

            <motion.div
              className=""
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                delay: 0.3,
                easeInOut: "linear",
                duration: 2,
                // bounce: 0.6,
              }}
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
                    data-text={t(`homePage.visitWorkSection.visitWorkTitle`)}
                  >
                    {t(`homePage.visitWorkSection.visitWorkTitle`)}
                  </h2>
                  <Spacer height={2} />
                  <p>
                    <Link to="/visit-my-works" className="btn btn-primary">
                      {t(`homePage.visitWorkSection.visitWorkButton`)}
                    </Link>
                  </p>
                  <Spacer />
                </div>
              </Container>
            </motion.div>
            <Spacer height={6} />
          </div>
        </section>
        {/**Visit work section end */}
        {/**Experience section start */}
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
                transition={{
                  type: "spring",
                  delay: 0.3,
                  easeInOut: "linear",
                  duration: 2,
                  // bounce: 0.6,
                }}
              >
                <h2 className="font-w-Black h2 margin-0">
                  <span className="">
                    {t(`homePage.experienceSection.experienceTitleP1`)}
                  </span>
                  {t(`homePage.experienceSection.experienceTitleP2`)}
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
                  <motion.div
                    className="width-100"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      delay: 0.3 * 1,
                      easeInOut: "linear",
                      duration: 2,
                      // bounce: 0.6,
                    }}
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
                              `homePage.experienceSection.engineeringCard.engineeringCardIconDesc`
                            )}
                          />
                        </p>
                      </div>
                      <div className="width-70">
                        <h3 className="h3 font-w-extra-bold margin-0">
                          {t(
                            `homePage.experienceSection.engineeringCard.engineeringCardTitle`
                          )}
                        </h3>
                        <p>
                          {t(
                            `homePage.experienceSection.engineeringCard.engineeringCardDesc`
                          )}
                        </p>
                      </div>
                    </Container>
                    <Spacer height={2} />
                  </motion.div>
                  <motion.div
                    className="width-100"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      delay: 0.3 * 1,
                      easeInOut: "linear",
                      duration: 2,
                      // bounce: 0.6,
                    }}
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
                            alt={t(
                              `homePage.experienceSection.designCard.designCardIconDesc`
                            )}
                            className="themed-stroke-icon card-img-responsive"
                          />
                        </p>
                      </div>
                      <div className="width-70">
                        <h3 className="h3 font-w-extra-bold margin-0">
                          {t(
                            `homePage.experienceSection.designCard.designCardTitle`
                          )}
                        </h3>
                        <p>
                          {t(
                            `homePage.experienceSection.designCard.designCardDesc`
                          )}
                        </p>
                      </div>
                    </Container>
                    <Spacer height={6} />
                  </motion.div>
                  <motion.div
                    className="width-100"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      delay: 0.3 * 1,
                      easeInOut: "linear",
                      duration: 2,
                      // bounce: 0.6,
                    }}
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
                            alt={t(
                              `homePage.experienceSection.projectCard.projectCardIconDesc`
                            )}
                            className="themed-stroke-icon card-img-responsive"
                          />
                        </p>
                      </div>
                      <div className="width-70">
                        <h3 className="h3 font-w-extra-bold margin-0">
                          {t(
                            `homePage.experienceSection.projectCard.projectCardTitle`
                          )}
                        </h3>
                        <p>
                          {t(
                            `homePage.experienceSection.projectCard.projectCardDesc`
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
        {/**Experience section end */}
        {/**Send message section start */}
        <section className="bg-primary-color" id="sendMeMessage">
          <div className="container">
            <Spacer height={6} />
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: "spring",
                delay: 0.3,
                easeInOut: "linear",
                duration: 2,
                // bounce: 0.6,
              }}
            >
              <Container
                flexDirection="column"
                justifyContent="center"
                alignItems="center"
                flexWrap="wrap"
              >
                <div className="width-100 text-center bg-paper-plane-right">
                  <h2 className="font-w-semi-medium h2 margin-0">
                    {t(`homePage.sendMessageSection.sendMessageTitle`)}
                  </h2>
                  <p>
                    {t(`homePage.sendMessageSection.sendMessageDescP1`)} <br />{" "}
                    {t(`homePage.sendMessageSection.sendMessageDescP2`)}
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
        {/**Send message section end */}
      </div>
    </FrontOfficeLayout>
  );
};

export default HomePage;
