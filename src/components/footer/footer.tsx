import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Container from "../container/container";
import Spacer from "../spacer/spacer";
import LogoRM from "../../assets/images/logo-rm.svg";
import GithubCircleIcon from "../../assets/images/iconoir_github_circle.svg";
import LinkedinIcon from "../../assets/images/iconoir_linkedin.svg";

const Footer = (): JSX.Element => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer className="bg-light-grey">
        <Spacer height={6} />
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{
            type: "spring",
            delay: 0.3,
            easeInOut: "linear",
            duration: 2,
          }}
        >
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <p>
              <Link to="/">
                <img src={LogoRM} className="logo" alt="Randy Assani RM Logo" />
              </Link>
            </p>
            <p className="text-center">
              <span className="font-w-extra-bold">CONTACT ME</span>
              <br />
              randymuhema@gmail.com
            </p>
            <p className="text-center">
              <span className="font-w-extra-bold">FOLLOW ME ON</span>
              <br />
              <a href="https://github.com/Randy-RM" target="_blank">
                <img src={GithubCircleIcon} alt="Randy Assani Github profile" />
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/randy-assani-beni-ab101216b/"
                target="_blank"
              >
                <img src={LinkedinIcon} alt="Randy Assani Linkdin profile" />
              </a>
            </p>
          </Container>
          <Spacer height={6} />
          <Container
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            flexWrap="wrap"
          >
            <p className="text-center">
              Designed & Built by Randy Assani
              <br />
              Copyright © {`${currentYear}`} Randy Assani
            </p>
          </Container>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
