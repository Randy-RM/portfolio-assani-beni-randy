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
      document.body.style.overflowY = "scroll";
    }
  };

  useEffect(() => {
    setIsDropdown(false);
    document.body.style.overflowY = "scroll";
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
      </header>
      <nav
        className={
          isDropdown
            ? "nav-menu bg-light-grey show-nav-menu"
            : "nav-menu bg-light-grey hide-nav-menu"
        }
      >
        <ul className="text-center">
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
              to="/visit-my-works"
              onClick={handleIsDropdown}
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "active-menu-link" : ""
              }
            >
              Visit my works
            </NavLink>
          </li>
          <li>
            <a href={RandyAssaniCv} target="_blank">
              Get my resume
            </a>
          </li>
          <li>
            <span className="font-w-extra-bold h2">FOLLOW ME ON</span>
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
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
