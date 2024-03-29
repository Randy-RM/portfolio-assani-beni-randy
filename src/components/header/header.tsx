import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { NavLink, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ThemeSwitcher } from "../";
import { LogoRm, GithubIcon, LinkedinIcon } from "../../assets/images";

const Header = (): JSX.Element => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);
  const { t } = useTranslation();

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
                <NavLink to="/" onClick={handleMenuByLogo}>
                  <LogoRm className="logo" alt={t(`logoDesc`)} />
                </NavLink>
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
            <NavLink
              to="/"
              onClick={handleIsDropdown}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active-menu-link" : ""
              }
            >
              {t(`header.AboutMeLink`)}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/visit-my-works"
              onClick={handleIsDropdown}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active-menu-link" : ""
              }
            >
              {t(`header.projectsLink`)}
            </NavLink>
          </li>
          <li>
            <Link to="/documents/CV-EN-Assani-Beni-Randy.pdf" target="_blank">
              {t(`header.resumeLink`)}
            </Link>
          </li>
          <li>
            <span className="font-w-extra-bold h2">{t(`followMe`)}</span>
            <br />
            <a href="https://github.com/Randy-RM" target="_blank">
              <GithubIcon
                className="themed-stroke-icon"
                alt={t(`githubIconDesc`)}
              />
            </a>
            &nbsp;
            <a
              href="https://www.linkedin.com/in/randy-assani-beni-ab101216b/"
              target="_blank"
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
