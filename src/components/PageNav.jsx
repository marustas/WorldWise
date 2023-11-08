import { NavLink } from "react-router-dom";
import { nav } from "./PageNav.module.css";
import Logo from "./Logo";
const PageNav = () => {
  return (
    <nav className={nav}>
      <Logo />
      <ul>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
