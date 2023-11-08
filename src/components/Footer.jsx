import { footer, copyright } from "./Footer.module.css";
const Footer = () => {
  return (
    <footer className={footer}>
      <p className={copyright}>
        &copy; Copyright: {new Date().getFullYear()} by WorldWise Inc.
      </p>
    </footer>
  );
};

export default Footer;
