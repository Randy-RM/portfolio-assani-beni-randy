import { motion } from "framer-motion";
import { graphql, HeadFC } from "gatsby";
import { getImage } from "gatsby-plugin-image";
import * as React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import {
  BaseHead,
  BaseLayout,
  BouncingArrow,
  Container,
  ProjectCardLarge,
  ProjectCardLargeSkeleton,
  Spacer,
} from "../components";
import { extractDataFromAllMarkdownRemark, isProjectType } from "../utils";

export const Head: HeadFC = () => {
  return (
    <BaseHead>
      <>
        <title>Visit my works | Randy Assani RM</title>
        {/**metaDescription start */}
        <meta
          name="description"
          content={`Here are some Project I made recently`}
        />
        <meta
          name="og:description"
          key="og:description"
          content={`Here are some Project I made recently`}
        />
        <meta
          name="twitter:description"
          key="twitter:description"
          content={`Here are some Project I made recently`}
        />
        {/**metaDescription end */}
      </>
    </BaseHead>
  );
};

type VisitMyWorksProps = {
  data: ContentProps;
};

const VisitMyWorks = ({ data }: VisitMyWorksProps): JSX.Element => {
  const [isProjectLoading, setIsProjectLoading] = useState<boolean>(true);
  const { t } = useTranslation();
  useEffect(() => {
    setTimeout(() => {
      setIsProjectLoading(false);
    }, 6000);
  }, []);

  const projects = extractDataFromAllMarkdownRemark(data);

  // Split the characters, including spaces
  const heroText = t(`projectPage.heroSection.visitMyWorks`).split("");

  return (
    <>
      {/**Hero section start */}
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
                  {t(`projectPage.heroSection.leadText`)}
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
      <section className="bg-primary-color">
        {isProjectLoading ? (
          <div className="container">
            {projects.map((project, index) => {
              return (
                <ProjectCardLargeSkeleton
                  key={`${index}-${project.contentId}-skeleton`}
                />
              );
            })}
          </div>
        ) : (
          <div className="container">
            {projects.map((project, index) => {
              const image = getImage(project.featuredImage);
              const projectType = isProjectType(project.contentType)
                ? project.contentType
                : null;
              return (
                <ProjectCardLarge
                  key={`${index}-${project.contentId}`}
                  projectName={project.contentTitle}
                  projectDescription={project.contentDescription}
                  projectSkills={project.projectSkills}
                  projectImageUrl={image}
                  projectType={projectType}
                  projectUrl={project.liveProjectPreview}
                />
              );
            })}
          </div>
        )}
      </section>
      {/**My works section end */}
    </>
  );
};

VisitMyWorks.Layout = BaseLayout;
export default VisitMyWorks;

export const query = graphql`
  query {
    allMarkdownRemark(
      filter: { frontmatter: { contentType: { eq: "project" } } }
    ) {
      edges {
        node {
          frontmatter {
            contentId
            contentType
            contentSlug
            date
            language
            featuredImage {
              childImageSharp {
                gatsbyImageData(
                  layout: FULL_WIDTH
                  placeholder: BLURRED
                  formats: [AUTO, WEBP, AVIF]
                )
              }
            }
            liveProjectPreview
            contentTitle
            projectSkills
            contentDescription
          }
        }
      }
    }
  }
`;
