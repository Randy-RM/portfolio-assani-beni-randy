import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
import LogoRM from "../../assets/images/logo-rm.svg";
import GithubCircleIcon from "../../assets/images/iconoir_github_circle.svg";
import LinkedinIcon from "../../assets/images/iconoir_linkedin.svg";
import RandyAssaniCv from "../../assets/documents/CV-EN-Assani-Beni-Randy.pdf";

const Header = (): JSX.Element => {
  const [isDropdown, setIsDropdown] = useState<boolean>(false);

  const handleIsDropdown = () => {
    setIsDropdown(isDropdown ? false : true);
    if (isDropdown) {
      document.body.style.overflowY = "scroll";
    } else {
      document.body.style.overflowY = "hidden";
    }
  };

  const handleMenuButton = () => {
    setIsDropdown(!isDropdown);
  };

  const handleMenuByLogo = () => {
    if (isDropdown) {
      setIsDropdown(false);
    }
  };

  useEffect(() => {
    document.body.style.overflowY = "scroll";
    setIsDropdown(false);
  }, []);

  return (
    <>
      <header className="bg-light-grey">
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
                  <img
                    src={LogoRM}
                    className="logo"
                    alt="RM Randy Assani Logo"
                  />
                </NavLink>
              </div>
              <div className="">
                <label htmlFor="menuButton">
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
          </motion.div>
        </div>
        <motion.nav
          className={isDropdown ? "nav-menu" : "nav-menu hide-nav-menu"}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{
            type: "spring",
            delay: 0.3,
            easeInOut: "linear",
            duration: 2,
          }}
        >
          <ul className="font-big-hero text-center">
            <li>
              <NavLink
                to="/"
                onClick={handleIsDropdown}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active-menu-link" : ""
                }
              >
                A bout me
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/projects"
                onClick={handleIsDropdown}
                className={({ isActive, isPending }) =>
                  isPending ? "pending" : isActive ? "active-menu-link" : ""
                }
              >
                My Project
              </NavLink>
            </li>
            <li>
              <a href={RandyAssaniCv} target="_blank">
                Get my resume
              </a>
            </li>
            <li>
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
            </li>
          </ul>
        </motion.nav>
      </header>
    </>
  );
};

export default Header;
