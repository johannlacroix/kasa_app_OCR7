import styles from "./Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.container}>
      <header className={styles.footer}>
        <img
          src="/logos_pictos/LOGO_white_small.png"
          alt="Logo"
          className={styles.logo}
        />
        <p>© 2020 Kasa. All rights reserved</p>
      </header>
    </div>
  );
};

export default Footer;
