import { sidebar } from "./Sidebar.module.css";
import Logo from "./Logo";
import AppNav from "./AppNav";
import Footer from "./Footer";
const SideBar = () => {
  return (
    <div className={sidebar}>
      <Logo />
      <AppNav />
      <p>City lists</p>
      <Footer />
    </div>
  );
};

export default SideBar;
