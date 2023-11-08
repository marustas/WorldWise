import { NavLink } from "react-router-dom";
import { nav } from "./PageNav.module.css";

const PageNav = () => {
  return (
    <nav className={nav}>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/pricing">Pricing</NavLink>
        </li>
        <li>
          <NavLink to="/product">Product</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default PageNav;
