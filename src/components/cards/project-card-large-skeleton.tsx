import { Container, Spacer } from "../../components";

const ProjectCardLargeSkeleton = (): JSX.Element => {
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
        <div className="width-50">
          <div className="skeleton-img-project-large margin-t-b-1"></div>
        </div>
        <div className="width-40">
          <div className="skeleton-h2 width-40  margin-t-b-1">Title</div>
          <div className="width-70 skeleton-text margin-t-b-1">Text</div>
          <div className="width-100 skeleton-text margin-t-b-1">Text</div>
          <div className="width-50 skeleton-text margin-t-b-1">Text</div>
          <div className="text-center-on-mobile">
            <span className="text-center skeleton-badg standard-radius">
              None
            </span>
            <span className="text-center skeleton-badg standard-radius">
              None
            </span>
            <span className="text-center skeleton-badg standard-radius">
              None
            </span>
            <span className="text-center skeleton-badg standard-radius">
              None
            </span>
            <span className="text-center skeleton-badg standard-radius">
              None
            </span>
            <span className="text-center skeleton-badg standard-radius">
              None
            </span>
            <span className="text-center skeleton-badg standard-radius">
              None
            </span>
          </div>
          <div className="width-30 skeleton-text margin-t-b-1">SEE MORE</div>
        </div>
      </Container>
      <Spacer height={6} />
      <Spacer height={2} />
    </>
  );
};

export default ProjectCardLargeSkeleton;
