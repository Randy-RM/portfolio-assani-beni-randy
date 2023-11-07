import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import {
  Container,
  Spacer,
  BouncingArrow,
  ProjectCardLarge,
} from "../../components";
import { projects } from "../../db";

const WorksPage = (): JSX.Element => {
  const heroText = [
    "V",
    "i",
    "s",
    "i",
    "t",
    " ",
    "m",
    "y",
    " ",
    "w",
    "o",
    "r",
    "k",
    "s",
  ];
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Visit my works | Randy Assani RM</title>
      </Helmet>
      <main className="font-w-light">
        {/**Hero section start */}
        <section className="bg-light-grey">
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
                  {heroText.map((letter, index) => {
                    return (
                      <motion.span
                        className="font-outlined"
                        key={`${index}-technology`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          delay: 0.1 * index,
                          easeInOut: "linear",
                          // duration: 0.5,
                        }}
                      >
                        {`${letter}`}
                      </motion.span>
                    );
                  })}
                  <br />
                  {heroText.map((letter, index) => {
                    return (
                      <motion.span
                        key={`${index}-technology`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          delay: 0.1 * index,
                          easeInOut: "linear",
                          // duration: 0.5,
                        }}
                      >
                        {`${letter}`}
                      </motion.span>
                    );
                  })}
                  <br />
                  {heroText.map((letter, index) => {
                    return (
                      <motion.span
                        className="font-outlined"
                        key={`${index}-technology`}
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                          type: "spring",
                          delay: 0.1 * index,
                          easeInOut: "linear",
                          // duration: 0.5,
                        }}
                      >
                        {`${letter}`}
                      </motion.span>
                    );
                  })}
                </h1>
                <p className="text-center">
                  <motion.span
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{
                      type: "spring",
                      delay: 0.6,
                      easeInOut: "linear",
                      duration: 3,
                    }}
                  >
                    {`Here are some Project I made recently`}
                  </motion.span>
                </p>
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    delay: 0.9,
                    easeInOut: "linear",
                    duration: 3,
                  }}
                >
                  <BouncingArrow />
                </motion.div>
              </div>
            </Container>
            <Spacer height={6} />
          </div>
        </section>
        {/**Hero section end */}
        {/**My works section start */}
        <section className="bg-light-grey">
          <div className="container">
            {projects.map((project, index) => {
              return (
                <motion.div
                  key={`project-${index}`}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    // delay: 0.2,
                    easeInOut: "linear",
                    duration: 0.3,
                  }}
                >
                  <ProjectCardLarge
                    projectName={project.projectName}
                    projectDescription={project.projectDescription}
                    projectSkills={project.projectSkills}
                    projectImageUrl={project.projectImageUrl}
                    projectType={project.projectType}
                    projectUrl={project.projectUrl}
                  />
                </motion.div>
              );
            })}
          </div>
        </section>
        {/**My works section end */}
      </main>
    </>
  );
};

export default WorksPage;
