 // Make sure to provide the correct image path


 import healImage from "../../../assets/aboutcrad1.webp"
 
 import healImage1 from "../../../assets/aboutcrad2.webp"
 
 import healImage2 from "../../../assets/aboutcrad3.webp"

import styles from "./Card.module.css";

const Card = () => {
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>WHAT WE DO</h2>
      <div className={styles.cardsContainer}>
        <div className={styles.card}>
          <img src={healImage}  alt="Heal" className={styles.image} />
          <h3 className={styles.title}>HEAL</h3>
        </div>
        <div className={styles.card}>
          <img src={healImage1} alt="Enrich" className={styles.image} />
          <h3 className={styles.title}>ENRICH</h3>
        </div>
        <div className={styles.card}>
          <img src={healImage2} alt="Empower" className={styles.image} />
          <h3 className={styles.title}>EMPOWER</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
