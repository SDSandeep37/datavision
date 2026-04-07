import Link from "next/link";
import "./navbar.css";
const Navbar = () => {
  return (
    <div className="navbarContainer flex h-15">
      <nav className="navbarWrapper w-full flex flex-row justify-between items-center">
        <div className="navbarLogo">
          <Link href="/">
            <img src="/logo.png" alt="logo" />
          </Link>
        </div>
        <ul className="navbarOptions flex flex-row gap-5">
          <li className="navbarOptionsItem">
            <a href="/dashboard">Dashboard</a>
          </li>
          <li className="navbarOptionsItem">
            <a href="/about">About</a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
