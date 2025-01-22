import { Link } from "react-router-dom";
import styles from "./Header.module.scss";

const Header = () => {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <img src="/logos_pictos/LOGO.png" alt="Logo" className={styles.logo} />
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li>
              <Link to="/Home" className={styles.link}>
                Accueil
              </Link>
            </li>
            <li>
              <Link to="/About" className={styles.link}>
                À propos
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;
