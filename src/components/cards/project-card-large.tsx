import { Icon } from "@iconify/react";
import { GatsbyImage } from "gatsby-plugin-image";
import * as React from "react";
import { useTranslation } from "react-i18next";
import { Badge, Container, Spacer } from "../";

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
            <GatsbyImage
              image={projectImageUrl}
              alt={`${projectName}`}
              className="card-img"
            />
          </div>
        </div>
        <div className="width-40 text-center-on-mobile">
          <h2 className="font-w-Black h2 margin-0">{`${projectName}`}</h2>
          <p>{`${projectDescription}`}</p>
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
        </div>
      </Container>
      <Spacer height={6} />
      <Spacer height={2} />
    </>
  );
};

export default ProjectCardLarge;
