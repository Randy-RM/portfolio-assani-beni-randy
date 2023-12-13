import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { motion } from "framer-motion";
import Container from "../container/container";
import Spacer from "../spacer/spacer";
import LogoRM from "../../assets/images/logo-rm.svg";
import GithubCircleIcon from "../../assets/images/iconoir_github_circle.svg";
import LinkedinIcon from "../../assets/images/iconoir_linkedin.svg";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();
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
                <img src={LogoRM} className="logo" alt={t(`logoDesc`)} />
              </Link>
            </p>
            <p className="text-center">
              <span className="font-w-extra-bold">{t(`contactMe`)}</span>
              <br />
              randymuhema@gmail.com
            </p>
            <p className="text-center">
              <span className="font-w-extra-bold">{t(`followMe`)}</span>
              <br />
              <a href="https://github.com/Randy-RM" target="_blank">
                <img src={GithubCircleIcon} alt={t(`githubIconDesc`)} />
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/randy-assani-beni-ab101216b/"
                target="_blank"
              >
                <img src={LinkedinIcon} alt={t(`LinkdinIconDesc`)} />
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
