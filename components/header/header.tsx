import Image from "next/image";

const Header = (): JSX.Element => {
  return (
    <header className="bg-blue">
      <div className="container">
        <nav className="nav-bar">
          <div className="logo">
            <Image
              src="/logo-rm.svg"
              alt="Vercel Logo"
              width={60}
              height={24}
              priority
            />
          </div>
          <div className="menu">
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
