import { motion } from "framer-motion";
import { Link } from "gatsby";
import * as React from "react";
import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "../";
import { GithubIcon, LinkedinIcon, LogoRm } from "../../images";
import { returnResumeInCorrectLanguage } from "../../utils";

const Header = (): JSX.Element => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const { t, i18n } = useTranslation();

  const handleIsDropdown = () => {
    setIsDropdown(!isDropdown);
    if (isDropdown) {
      //activ scrollbar when menu is close
      document.body.style.overflowY = "scroll";
    } else {
      //hide and disable scrollbar when menu is open
      document.body.style.overflowY = "hidden";
    }
  };

  const handleMenuButton = () => {
    setIsDropdown(!isDropdown);
  };

  const handleMenuByLogo = () => {
    if (isDropdown) {
      setIsDropdown(false);
      document.body.style.overflowY = "scroll";
    }
  };

  useEffect(() => {
    setIsDropdown(false);
    document.body.style.overflowY = "scroll";
  }, []);

  return (
    <>
      <header className="bg-primary-color">
        <div className="container">
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
            <div className="nav-bar">
              <div className="">
                <Link
                  to="/"
                  onClick={handleMenuByLogo}
                  aria-label="Go to about me"
                >
                  <LogoRm className="logo" alt={t(`logoDesc`)} />
                </Link>
              </div>
              <div className="menu">
                <ThemeSwitcher />
                <div className="menu-icon-bloc">
                  <label htmlFor="menuButton" className="menu-icon">
                    <input
                      type="checkbox"
                      id="menuButton"
                      onClick={handleIsDropdown}
                      onChange={handleMenuButton}
                      checked={isDropdown}
                    />
                    <span></span>
                    <span></span>
                  </label>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </header>
      <nav
        className={
          isDropdown
            ? "nav-menu bg-primary-color show-nav-menu"
            : "nav-menu bg-primary-color hide-nav-menu"
        }
      >
        <ul className="text-center font-secondary-color">
          <li>
            <Link
              to="/"
              onClick={handleIsDropdown}
              activeClassName="active-menu-link"
            >
              {t(`header.AboutMeLink`)}
            </Link>
          </li>
          <li>
            <Link
              to="/visit-my-works"
              onClick={handleIsDropdown}
              activeClassName="active-menu-link"
            >
              {t(`header.projectsLink`)}
            </Link>
          </li>
          <li>
            <a
              href={returnResumeInCorrectLanguage(i18n.language)}
              target="_blank"
            >
              {t(`header.resumeLink`)}
            </a>
          </li>
          <li>
            <span className="font-w-extra-bold h2">{t(`followMe`)}</span>
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
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
