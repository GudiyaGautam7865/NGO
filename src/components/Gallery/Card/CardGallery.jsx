
import styles from "./Gallery.module.css";
import image1 from "../../../assets/image1.jpeg";
import image2 from "../../../assets/image1.jpeg";
import image3 from "../../../assets/image1.jpeg";

const images = [image1, image2, image3];

const Gallery = () => {
  return (
    <div className={styles.galleryContainer}>
      <h2 className={styles.galleryTitle}>Gallery</h2>
      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={img} alt={`Gallery ${index + 1}`} className={styles.galleryImage} />
          </div>
        ))}
      </div>
      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={img} alt={`Gallery ${index + 1}`} className={styles.galleryImage} />
          </div>
        ))}
      </div>
      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={img} alt={`Gallery ${index + 1}`} className={styles.galleryImage} />
          </div>
        ))}
      </div>
      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={img} alt={`Gallery ${index + 1}`} className={styles.galleryImage} />
          </div>
        ))}
      </div>
      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={img} alt={`Gallery ${index + 1}`} className={styles.galleryImage} />
          </div>
        ))}
      </div>
      <div className={styles.galleryGrid}>
        {images.map((img, index) => (
          <div key={index} className={styles.galleryItem}>
            <img src={img} alt={`Gallery ${index + 1}`} className={styles.galleryImage} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
