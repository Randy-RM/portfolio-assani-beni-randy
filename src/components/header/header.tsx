import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav style={{ margin: 10 }}>
        <Link to="/" style={{ padding: 5 }}>
          Home
        </Link>
        <Link to="/projects" style={{ padding: 5 }}>
          My projects
        </Link>
      </nav>
    </header>
  );
};

export default Header;
