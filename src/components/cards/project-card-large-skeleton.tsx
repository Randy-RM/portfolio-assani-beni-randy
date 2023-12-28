import { motion } from "framer-motion";
import { Container, Spacer } from "../";

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
        <motion.div
          className="width-50"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.2,
            easeInOut: "linear",
            duration: 1,
          }}
        >
          <div className="skeleton-img-project-large margin-t-b-1"></div>
        </motion.div>
        <motion.div
          className="width-40"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.2,
            easeInOut: "linear",
            duration: 1,
          }}
        >
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
          <div className="text-center-on-mobile margin-t-b-1">
            <span className="skeleton-text">SEE MORE</span>
          </div>
        </motion.div>
      </Container>
      <Spacer height={6} />
      <Spacer height={2} />
    </>
  );
};

export default ProjectCardLargeSkeleton;
