import AppNav from "../components/AppNav";
import SideBar from "../components/SideBar";
import Map from "../components/Map";
import { app } from "./AppLayout.module.css";
const AppLayout = () => {
  return (
    <div className={app}>
      <SideBar />
      <Map />
    </div>
  );
};

export default AppLayout;
