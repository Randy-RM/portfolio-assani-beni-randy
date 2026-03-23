import { Icon } from "@iconify/react";
import React from "react";
import { useTranslation } from "react-i18next";
import {
  Badge,
  Container,
  GsapInView,
  GsapRevealImage,
  GsapRevealText,
  GsapSplitText,
  Spacer,
} from "../";

const ProjectCardLarge = (props: Project): JSX.Element => {
  let { projectSkills, projectImageUrl, projectType, projectUrl } = props;
  const { projectName, projectDescription } = props;
  const { t } = useTranslation();

  projectSkills = projectSkills || null;
  projectImageUrl = projectImageUrl || null;
  projectType = projectType || null;
  projectUrl = projectUrl || null;

  return (
    <>
      <Spacer height={2} />
      <Spacer height={6} />
      <Container
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <div className="width-50 text-center-on-mobile">
          <div>
            {projectImageUrl && (
              <GsapRevealImage
                imageClassName="card-img"
                src={projectImageUrl}
                alt={`${projectName}`}
                duration={1.8}
                delay={0.4}
              />
            )}
          </div>
        </div>
        <div className="width-40 text-center-on-mobile">
          <h2 className="font-w-Black h2 margin-0">
            <GsapSplitText
              duration={0.8}
              delay={0.6}
              direction="bottom-to-top"
              content={projectName ?? ""}
            />
          </h2>
          <p>
            <GsapRevealText
              duration={0.8}
              delay={1}
              direction="bottom-to-top"
              content={projectDescription ?? ""}
            />
          </p>
          <GsapInView as="div" delay={0.8} duration={1}>
            {projectSkills && (
              <div>
                {projectSkills.map((projectSkill, index) => {
                  return <Badge key={index} badgeText={`${projectSkill}`} />;
                })}
              </div>
            )}
            <p className="font-w-extra-bold text-center-on-mobile">
              {projectUrl && (
                <a href={projectUrl} target="_blank">
                  {t(`seeMore`)} <Icon icon="iconoir:arrow-tr-square" />
                </a>
              )}
            </p>
          </GsapInView>
        </div>
      </Container>
      <Spacer height={6} />
      <Spacer height={2} />
    </>
  );
};

export default ProjectCardLarge;
