import { Link } from "react-router-dom";
import LogoRM from "../../assets/images/logo-rm.svg";

const Header = (): JSX.Element => {
  return (
    <header className="bg-light-grey">
      <div className="container">
        <nav className="nav-bar">
          <div className="">
            <Link to="/">
              <img src={LogoRM} className="logo" />
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
      </div>
    </header>
  );
};

export default Header;
