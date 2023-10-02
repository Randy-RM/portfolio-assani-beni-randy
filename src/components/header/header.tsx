import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LogoRM from "../../assets/images/logo-rm.svg";

const Header = (): JSX.Element => {
  return (
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
          <nav className="nav-bar">
            <div className="">
              <Link to="/">
                <img src={LogoRM} className="logo" alt="RM Randy Assani Logo" />
              </Link>
            </div>
            <div className="">
              <label htmlFor="check">
                <input type="checkbox" id="check" />
                <span></span>
                <span></span>
              </label>
            </div>
          </nav>
        </motion.div>
      </div>
    </header>
  );
};

export default Header;
