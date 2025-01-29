import styles from "./Gallery.module.scss";
import Banner from "../Banner/Banner";
import Card from "../Card/Card";

const Gallery = () => {
  return (
    <div className={styles.container}>
      <Banner />
      <div className={styles.gallery}>
        <Card />
      </div>
    </div>
  );
};

export default Gallery;
