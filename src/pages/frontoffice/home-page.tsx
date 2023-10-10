import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Container,
  Spacer,
  Badge,
  BasicInput,
  TextareaInput,
} from "../../components";
import RandyPicture from "../../assets/images/rm-hero-photo.png";
import GithubCircleIcon from "../../assets/images/iconoir_github_circle.svg";
import LinkedinIcon from "../../assets/images/iconoir_linkedin.svg";
import ToolsIcon from "../../assets/images/iconoir_tools.svg";
import DesignPencilIcon from "../../assets/images/iconoir_design_pencil.svg";
import LeaderboardStarIcon from "../../assets/images/iconoir_leaderboard_star.svg";
import PaperPlaneRight from "../../assets/images/paper_plane_right.svg";

const HomePage = (): JSX.Element => {
  const technologies: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "TypeScript",
    "Node Js",
    "Express Js",
    "Nest Js",
    "React Js",
    "React native",
    "Sass",
    "PHP",
    "WordPress",
    "Symfony",
    "Laravel",
    "MySql",
    "MongDB",
    "PostgreSql",
    "Linux",
  ];

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>About me | Randy Assani RM</title>
      </Helmet>
      <main>
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
                  {`Hi! I'm`}
                  <br />
                  <span className="font-semi-dark-grey">{`Software`}</span>
                  <br />
                  <span>
                    <mark className="special-mark">{`Engineer`}</mark>
                  </span>
                </h2>
                <p className="font-lead-hero">
                  {`Technology, software development`}
                  <br />
                  {`and design are my passions.`}
                </p>
                <p>
                  <a href="#" className="btn btn-primary">
                    CONTACT ME
                  </a>
                </p>
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
                  ABOUT <span className="font-brand-color">ME</span>
                </h2>
                <p>
                  <span className="font-w-extra-bold">FOLLOW ME ON</span>
                  <br />
                  <a href="https://github.com/Randy-RM" target="_blank">
                    <img
                      src={GithubCircleIcon}
                      alt="Randy Assani Github profile"
                    />
                  </a>
                  &nbsp;
                  <a
                    href="https://www.linkedin.com/in/randy-assani-beni-ab101216b/"
                    target="_blank"
                  >
                    <img
                      src={LinkedinIcon}
                      alt="Randy Assani Linkdin profile"
                    />
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
                  HI. I'm Randy Assani Beni (RM).
                </h1>
                <p>
                  I'm <mark>Software Engineer</mark> with a Computer Science
                  degree and experience on computer engineering, software
                  development & graphic design.
                </p>
                <p>
                  I am always developing my skills and learning something new. I
                  have a thirst for knowledge and a desire to understand how
                  things work; I'm a people person, a tinkerer, a lover of
                  technology/science."
                </p>
              </motion.div>
            </Container>
            <Spacer height={6} />
          </div>
        </section>
        {/**About me section end */}
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
                  <span className="font-brand-color">TECH</span>NOLOGIES
                </h2>
                <p>
                  Here are a few technologies I’ve been working with recently
                </p>
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
                  <span className="font-brand-color">EXP</span>ERIENCE
                </h2>
                <Spacer height={3} />
              </motion.div>
              <div className="width-100 text-center-on-mobile">
                <Container
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  flexWrap="wrap"
                >
                  <motion.div
                    className="width-30"
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
                    <div className="p-1">
                      <p>
                        <img src={ToolsIcon} alt="Github profile" />
                      </p>
                      <h3 className="h3 font-w-extra-bold margin-0">
                        Engineering
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Nec dictumst
                        urna neque id. Tortor morbi tempor
                      </p>
                    </div>
                    <Spacer height={2} />
                  </motion.div>
                  <motion.div
                    className="width-30"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      delay: 0.3 * 2,
                      easeInOut: "linear",
                      duration: 2,
                      // bounce: 0.6,
                    }}
                  >
                    <div className="p-1">
                      <p>
                        <img src={DesignPencilIcon} alt="Github profile" />
                      </p>
                      <h3 className="h3 font-w-extra-bold margin-0">
                        UX/UI design
                      </h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Nec dictumst
                        urna neque id. Tortor morbi tempor
                      </p>
                    </div>
                    <Spacer height={2} />
                  </motion.div>
                  <motion.div
                    className="width-30"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      delay: 0.3 * 3,
                      easeInOut: "linear",
                      duration: 2,
                      // bounce: 0.6,
                    }}
                  >
                    <div className="p-1">
                      <p>
                        <img src={LeaderboardStarIcon} alt="Github profile" />
                      </p>
                      <h3 className="h3 font-w-extra-bold margin-0">Project</h3>
                      <p>
                        Lorem ipsum dolor sit amet consectetur. Nec dictumst
                        urna neque id. Tortor morbi tempor
                      </p>
                    </div>
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
        <section className="bg-light-grey">
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
                <div
                  className="width-100 text-center bg-paper-plane-right"
                  style={{ backgroundImage: `url(${PaperPlaneRight})` }}
                >
                  <h2 className="font-w-semi-medium h2 margin-0">
                    Send me a message!
                  </h2>
                  <p>
                    Got a question or proposal, or just want <br /> to say
                    hello? Go ahead.
                  </p>
                </div>
                <div className="width-70">
                  <Spacer />
                  <div>
                    <form action="">
                      <Container
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <div className="width-50">
                          <BasicInput
                            id="contactName"
                            name="contactName"
                            label="YOUR NAME"
                            placeholder="Enter your name"
                            type="text"
                          />
                        </div>
                        <div className="width-50">
                          <BasicInput
                            id="contactMail"
                            name="contactMail"
                            label="EMAIL ADDRESS"
                            placeholder="Enter your email address"
                            type="email"
                          />
                        </div>
                      </Container>
                      <Container
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <div className="width-100">
                          <TextareaInput
                            id="contactMessage"
                            name="contactMessage"
                            label="YOUR MESSAGE"
                            placeholder="Enter your message"
                          />
                        </div>
                      </Container>
                      <Container
                        flexDirection="row"
                        justifyContent="center"
                        alignItems="center"
                        flexWrap="wrap"
                      >
                        <div className="width-100">
                          <button className="btn btn-primary btn-size-larg">
                            SEND YOUR MESSAGE
                          </button>
                        </div>
                      </Container>
                    </form>
                  </div>
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
