import { motion } from "framer-motion";
import { Link } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { Container, Spacer } from "../";
import { GithubIcon, LinkedinIcon, LogoRm } from "../../images";

const Footer = (): JSX.Element => {
  const { t } = useTranslation();

  const [currentYear, setCurrentYear] = useState<number | null>(null);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());
  }, []);

  return (
    <>
      <footer className="bg-primary-color font-secondary-color">
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
              <Link to="/" aria-label="Go to about me">
                <LogoRm className="logo" alt={t(`logoDesc`)} />
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
              <a
                href="https://github.com/Randy-RM"
                target="_blank"
                aria-label="Go to my github"
              >
                <GithubIcon
                  className="themed-stroke-icon"
                  alt={t(`githubIconDesc`)}
                />
              </a>
              &nbsp;
              <a
                href="https://www.linkedin.com/in/randy-assani-beni-ab101216b/"
                target="_blank"
                aria-label="Go to my linkedin"
              >
                <LinkedinIcon
                  className="themed-stroke-icon"
                  alt={t(`LinkdinIconDesc`)}
                />
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
              Designed & Built by Randy Assani RM
              <br />
              Copyright © {`${currentYear}`} Randy Assani RM
            </p>
          </Container>
        </motion.div>
      </footer>
    </>
  );
};

export default Footer;
