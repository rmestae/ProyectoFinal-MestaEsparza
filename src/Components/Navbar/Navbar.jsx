import styles from "./Navbar.module.css";
import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <div className={styles.containerNavbar}>
      <img className={styles.navbarLogo} src="https://res.cloudinary.com/djwfnuabs/image/upload/v1677175484/LogoPlantasName_white-01_lnkqcr.png" alt="" />
      <ul className={styles.navbarList}>
        <li>
          <a href="">Todas</a>
        </li>
        <li>
          <a href="">Palmeras</a>
        </li>
        <li>
          <a href="">Arbustos</a>
        </li>
        <li>
          <a href="">Cactus</a>
        </li>
      </ul>
      <CartWidget className={styles.CartWidget} />
    </div>
  );
};

export default Navbar;
