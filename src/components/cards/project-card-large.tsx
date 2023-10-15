import { motion } from "framer-motion";
import { Icon } from "@iconify/react";
import { Container, Spacer, Badge } from "../../components";
import KadeaOnlineLogo from "../../assets/images/my-works/kda-learning-plateform-landing-logo.png";

const ProjectCardLarge = (): JSX.Element => {
  return (
    <>
      <Spacer height={6} />
      <Container
        flexDirection="row"
        justifyContent="space-between"
        alignItems="flex-start"
        flexWrap="wrap"
      >
        <motion.div
          className="width-50 text-center-on-mobile"
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
          <p>
            <img
              src={KadeaOnlineLogo}
              alt="Randy Assani Picture"
              className="hero-image"
            />
          </p>
        </motion.div>
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
          <h2 className="font-w-Black h2 margin-0">KADEA ONLINE</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt
            quod autem necessitatibus soluta quibusdam ab id qui accusamus
            quaerat harum.
          </p>
          <div>
            <Badge badgeText={"HTML"} />
            <Badge badgeText={"CSS"} />
            <Badge badgeText={"JavaScript"} />
            <Badge badgeText={"TypeScript"} />
            <Badge badgeText={"Node Js"} />
            <Badge badgeText={"React Js"} />
            <Badge badgeText={"Express Js"} />
            <Badge badgeText={"MongDB"} />
          </div>
          <p className="font-w-extra-bold text-center-on-mobile">
            <a href="#">
              SEE MORE <Icon icon="iconoir:arrow-tr-square" />
            </a>
          </p>
        </motion.div>
      </Container>
      <Spacer height={6} />
    </>
  );
};

export default ProjectCardLarge;
