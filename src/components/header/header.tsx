// import { Link } from "react-router-dom";
import LogoRM from "../../assets/images/logo-rm.svg";

const Header = (): JSX.Element => {
  // return (
  //   <header>
  //     <nav style={{ margin: 10 }}>
  //       <Link to="/" style={{ padding: 5 }}>
  //         Home
  //       </Link>
  //       <Link to="/projects" style={{ padding: 5 }}>
  //         My projects
  //       </Link>
  //     </nav>
  //   </header>
  // );
  return (
    <header className="bg-light-grey">
      <div className="container">
        <nav className="nav-bar">
          <div className="">
            <img src={LogoRM} className="logo" />
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
