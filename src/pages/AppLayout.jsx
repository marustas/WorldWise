import SideBar from "../components/SideBar";
import Map from "../components/Map";
import { app } from "./AppLayout.module.css";
import User from "../components/User";

const AppLayout = () => {
  return (
    <div className={app}>
      <SideBar />
      <Map />
      <User />
    </div>
  );
};

export default AppLayout;
