import { motion } from "framer-motion";
import styles from "./HeroSection.module.css";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <section className={styles.hero}>
      {/* Video Section */}
      <motion.div
        className={styles.videoContainer}
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <iframe
          className={styles.video}
          src="https://www.youtube.com/embed/your-video-id"
          title="NGO Video"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
        <div className={styles.languageSwitch}>
          <button className={styles.active}>हिंदी</button>
          <button>English</button>
        </div>
      </motion.div>

      {/* Text Section */}
      <motion.div
        className={styles.textContainer}
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        <h3 className={styles.tagline}>SERVICE OF OPPRESSED</h3>
        <h1 className={styles.heading}>
          HUMANITY IS SERVICE OF <span className={styles.highlight}>THE ALMIGHTY</span>
        </h1>
        <motion.button
          className={styles.donateButton}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
       <Link to="/Donates">  Donate Now</Link> 
        </motion.button>
      </motion.div>
    </section>
  );
};
export default HeroSection;
