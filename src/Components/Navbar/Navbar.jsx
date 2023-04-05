import styles from "./Navbar.module.css";

import CartWidget from "../CartWidget/CartWidget";

import { Link } from "react-router-dom";


const Navbar = ({ children }) => {

  return (
    <div>
      <div className={styles.containerNavbar}>
              <Link to ="/">
       <img className={styles.navbarLogo} src="https://res.cloudinary.com/djwfnuabs/image/upload/v1677175484/LogoPlantasName_white-01_lnkqcr.png" alt="" />
      </Link>

      <ul className={styles.navbarList}>
        <Link to="/" className={styles.navbarItem}>
          Todas
        </Link>

        <Link to="/category/arboles" className={styles.navbarItem}>
          Arboles
        </Link>

        <Link to="/category/palmeras" className={styles.navbarItem}>
          Palmeras
        </Link>

        <Link to="/category/plantas" className={styles.navbarItem}>
          Plantas
        </Link>
      </ul>
        <CartWidget />
      </div>
      {children}
    </div>
  );
};

export default Navbar;
