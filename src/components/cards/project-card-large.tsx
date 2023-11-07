import { Icon } from "@iconify/react";
import { Container, Spacer, Badge } from "../../components";
import rmLandingImgUrl from "../../assets/images/my-works/rm-landing-logo.png";

const ProjectCardLarge = (props: Project): JSX.Element => {
  let { projectSkills, projectImageUrl, projectType, projectUrl } = props;
  const { projectName, projectDescription } = props;

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
          <p>
            <img
              src={projectImageUrl ? projectImageUrl : rmLandingImgUrl}
              alt="Randy Assani Picture"
              className="card-img"
            />
          </p>
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
            {projectType && (
              <a
                href={
                  projectType == "other" ? (projectUrl ? projectUrl : "") : "#"
                }
                target="_blank"
              >
                SEE MORE <Icon icon="iconoir:arrow-tr-square" />
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
