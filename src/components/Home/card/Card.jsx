import { motion } from "framer-motion";
import styles from "./Card.module.css";
import image1 from "../../../assets/card1.jpg";
import image2 from "../../../assets/card2.jpg";
import image3 from "../../../assets/card4.jpg";
import image4 from "../../../assets/card5.jpg";
import image5 from "../../../assets/cars3.jpg";

const images = [
  { src: image1, title: "Education", desc: "Building Schools" },
  { src: image2, title: "Health", desc: "Medical Aid" },
  { src: image3, title: "Charity", desc: "Pure Water Supply" },
  { src: image4, title: "Support", desc: "Helping Orphans" },
  { src: image5, title: "Food", desc: "Providing Meals" },
];

const Card = () => {
  return (
    <div className={styles.galleryContainer}>
      {images.map((image, index) => (
        <motion.div
          key={index}
          className={styles.imageWrapper}
          whileHover={{ scale: 1.05 }}
        >
          {/* ✅ Corrected Image Reference */}
          <img src={image.src} alt={`Gallery ${index}`} className={styles.image} />

          <motion.div className={styles.overlay} initial={{ opacity: 0 }} whileHover={{ opacity: 1 }}>
            <motion.p className={styles.category} initial={{ y: 20 }} animate={{ y: 0 }}>
              {image.title}
            </motion.p>
            <motion.h3 className={styles.description} initial={{ y: 20 }} animate={{ y: 0 }}>
              {image.desc}
            </motion.h3>
            <motion.div className={styles.plusIcon} whileHover={{ rotate: 90 }}>
              +
            </motion.div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  );
};

export default Card;
