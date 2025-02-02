import styles from "./Banner.module.scss";

const Banner = () => {
  return (
    <div className={styles.galTitleBg}>
      <div className={styles.overlay}></div> {/* Overlay sombre */}
      <img
        src="/gallery_title_bg.png"
        alt="landscape picture"
        className={styles.bg}
      />
      <div className={styles.textOverlay}>Chez vous, partout et ailleurs</div>
    </div>
  );
};

export default Banner;
