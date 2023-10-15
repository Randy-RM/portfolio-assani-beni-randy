import { Helmet } from "react-helmet-async";
import { motion } from "framer-motion";
import { Container, Spacer, ProjectCardLarge } from "../../components";

const WorksPage = (): JSX.Element => {
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
                <h1 className="font-big-hero text-center font-w-Black">
                  <span className="font-outlined">{`Visit my works`}</span>
                  <br />
                  <span className="">{`Visit my works`}</span>
                  <br />
                  <span className="font-outlined">{`Visit my works`}</span>
                </h1>
                <p className="text-center">
                  Here are some Project I made recently
                </p>
              </motion.div>
            </Container>
            <Spacer height={6} />
          </div>
        </section>
        {/**Hero section end */}
        {/**My works section start */}
        <section className="bg-light-grey">
          <div className="container">
            <Spacer height={2} />
            <ProjectCardLarge />
            <Spacer height={2} />
            <Spacer height={2} />
            <ProjectCardLarge />
            <Spacer height={2} />
            <Spacer height={2} />
            <ProjectCardLarge />
            <Spacer height={2} />
          </div>
        </section>
        {/**My works section end */}
      </main>
    </>
  );
};

export default WorksPage;
