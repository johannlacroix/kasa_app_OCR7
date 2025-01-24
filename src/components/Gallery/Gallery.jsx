import styles from "./Gallery.module.scss";

const Gallery = () => {
  return (
    <div className={styles.container}>
      <div className={styles.galTitleBg}>
        <img src="/gallery_title_bg.png" alt="Logo" className={styles.bg} />
        <div className={styles.textOverlay}>Chez vous, partout et ailleurs</div>
      </div>
    </div>
  );
};

export default Gallery;
