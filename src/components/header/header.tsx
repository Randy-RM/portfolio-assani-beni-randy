import { motion } from "framer-motion";
import React, { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { ThemeSwitcher } from "../";
import { GithubIcon, LinkedinIcon, LogoRm } from "../../images";
import { returnResumeInCorrectLanguage } from "../../utils";

const Header = (): JSX.Element => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const headerRef = useRef<HTMLElement | null>(null);
  const { t, i18n } = useTranslation();

  const toggleDropdown = () => setIsDropdown((prevState) => !prevState);
  const closeDropdown = () => setIsDropdown(false);

  useEffect(() => {
    document.body.style.overflowY = isDropdown ? "hidden" : "scroll";

    return () => {
      document.body.style.overflowY = "scroll";
    };
  }, [isDropdown]);

  useEffect(() => {
    const updateHeaderHeight = () => {
      const headerHeight = headerRef.current?.offsetHeight ?? 0;
      document.documentElement.style.setProperty(
        "--header-height",
        `${headerHeight}px`,
      );
    };

    updateHeaderHeight();
    window.addEventListener("resize", updateHeaderHeight);

    return () => {
      window.removeEventListener("resize", updateHeaderHeight);
    };
  }, []);

  return (
    <>
      <header ref={headerRef} className="bg-primary-color">
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
                <a href="/" onClick={closeDropdown} aria-label="Go to about me">
                  <LogoRm className="logo" alt={t(`logoDesc`)} />
                </a>
              </div>
              <div className="menu">
                <ThemeSwitcher />
                <div className="menu-icon-bloc">
                  <label htmlFor="menuButton" className="menu-icon">
                    <input
                      type="checkbox"
                      id="menuButton"
                      onChange={toggleDropdown}
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
            <a
              href="/"
              onClick={closeDropdown}
              className={
                typeof window !== "undefined" &&
                window.location.pathname === "/"
                  ? "active-menu-link"
                  : ""
              }
            >
              {t(`header.AboutMeLink`)}
            </a>
          </li>
          <li>
            <a
              href="/visit-my-works"
              onClick={closeDropdown}
              className={
                typeof window !== "undefined" &&
                window.location.pathname === "/visit-my-works"
                  ? "active-menu-link"
                  : ""
              }
            >
              {t(`header.projectsLink`)}
            </a>
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
