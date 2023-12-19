import { Link } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Container, Spacer, Badge, ContactMeForm } from "../../components";
import { technologies } from "../../db";
import RandyPicture from "../../assets/images/rm-hero-photo.png";
import GithubCircleIcon from "../../assets/images/iconoir_github_circle.svg";
import LinkedinIcon from "../../assets/images/iconoir_linkedin.svg";
import ToolsIcon from "../../assets/images/iconoir_tools.svg";
import DesignPencilIcon from "../../assets/images/iconoir_design_pencil.svg";
import LeaderboardStarIcon from "../../assets/images/iconoir_leaderboard_star.svg";

const HomePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About me | Randy Assani RM</title>
      </Helmet>
      <main className="font-w-light">
        {/**Hero section start */}
        <section className="bg-light-grey">
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
                    <a href="#sendMeMessage" className="btn btn-primary">
                      {t(`homePage.heroSection.contactBtn`)}
                    </a>
                  </p>
                  <p className="width-40 width-35-on-large">
                    &nbsp;
                    <Link
                      to="/documents/CV-EN-Assani-Beni-Randy.pdf"
                      className="btn"
                      target="_blank"
                    >
                      {t(`homePage.heroSection.myResume`)}{" "}
                      <Icon icon="iconoir:google-docs" />
                    </Link>
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
                <p>
                  <img
                    src={RandyPicture}
                    alt="Randy Assani Picture"
                    className="hero-image"
                  />
                </p>
              </motion.div>
            </Container>
            <Spacer height={6} />
          </div>
        </section>
        {/**Hero section end */}
        {/**About me section start */}
        <section className="bg-light-grey">
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
                  <a href="https://github.com/Randy-RM" target="_blank">
                    <img src={GithubCircleIcon} alt={t(`githubIconDesc`)} />
                  </a>
                  &nbsp;
                  <a
                    href="https://www.linkedin.com/in/randy-assani-beni-ab101216b/"
                    target="_blank"
                  >
                    <img src={LinkedinIcon} alt={t(`LinkdinIconDesc`)} />
                  </a>
                </p>
              </motion.div>
              <motion.div
                className="width-50 p-2 bg-mid-grey text-center-on-mobile"
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
        <section className="bg-light-grey">
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
        <section className="bg-light-grey">
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
        {/**Experience section start */}
        <section className="bg-light-grey">
          <div className="container">
            <Spacer height={6} />
            <Container
              flexDirection="column"
              justifyContent="center"
              alignItems="flex-start"
              flexWrap="wrap"
            >
              <motion.div
                className="width-100 text-center-on-mobile"
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
                <Spacer height={3} />
              </motion.div>
              <div className="width-100 text-center-on-mobile">
                <Container
                  flexDirection="column"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  flexWrap="wrap"
                >
                  <motion.div
                    className="width-100"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
                      flexDirection="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <div className="width-20 p-2">
                        <p>
                          <img
                            src={ToolsIcon}
                            alt={t(
                              `homePage.experienceSection.engineeringCard.engineeringCardIconDesc`
                            )}
                            className="card-img-responsive"
                          />
                        </p>
                      </div>
                      <div className="width-50">
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
                    initial={{ opacity: 0, x: 40 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
                      flexDirection="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <div className="width-20 p-2">
                        <p>
                          <img
                            src={DesignPencilIcon}
                            alt={t(
                              `homePage.experienceSection.designCard.designCardIconDesc`
                            )}
                            className="card-img-responsive"
                          />
                        </p>
                      </div>
                      <div className="width-50">
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
                    <Spacer height={2} />
                  </motion.div>
                  <motion.div
                    className="width-100"
                    initial={{ opacity: 0, x: -40 }}
                    whileInView={{ opacity: 1, x: 0 }}
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
                      flexDirection="row"
                      justifyContent="space-evenly"
                      alignItems="center"
                      flexWrap="wrap"
                    >
                      <div className="width-20 p-2">
                        <p>
                          <img
                            src={LeaderboardStarIcon}
                            alt={t(
                              `homePage.experienceSection.projectCard.projectCardIconDesc`
                            )}
                            className="card-img-responsive"
                          />
                        </p>
                      </div>
                      <div className="width-50">
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
        <section className="bg-light-grey" id="sendMeMessage">
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
      </main>
    </>
  );
};

export default HomePage;
