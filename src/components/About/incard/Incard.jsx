import { motion } from "framer-motion";
import im from "../../../assets/aboutinfo1.webp";
import styles from "./AboutUs.module.css";

const AboutUs = () => {
  return (
    <section className={styles.aboutUsSection}>
      <motion.h2
        className={styles.heading}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        ABOUT US
      </motion.h2>

      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Helping those in need through well-established NGO services in India is indeed a charitable act. 
        Narayan Seva Sansthan, one of the well-known non-profit charity organizations in India, 
        boasts of over 480 branches across the country and abroad.
      </motion.p>

      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 1 }}
      >
        Our commitment extends to empowering those with visual, hearing, and speech impairments through life skills training and specialised education. Additionally, we provide professional skill development programs for people with disabilities. Established in 1985, Narayan Seva Sansthan had a humble beginning as the charity foundation, ‘A Fistful of Flour’, serving meals to the physically and economically disadvantaged. Our mission has since evolved. Today, we offer free corrective surgeries to patients suffering from polio and congenital disabilities. We also provide free artificial limbs to amputees.{" "}
        <span className={styles.highlight}>skill development programs</span> for people with disabilities.
      </motion.p>

      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Several different charities in India are supported by Narayan Seva Sansthan, where you can make 
        charitable donations towards helping causes or initiatives that resonate with you.
      </motion.p>
      
      {/* Remove duplicate content if not necessary */}
      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        Helping those in need through well-established NGO services in India is indeed a charitable act. 
        Narayan Seva Sansthan, one of the well-known non-profit charity organizations in India, 
        boasts of over 480 branches across the country and abroad.
      </motion.p>
      <motion.p
        className={styles.paragraph}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 1 }}
      >
        Several different charities in India are supported by Narayan Seva Sansthan, where you can make 
        charitable donations towards helping causes or initiatives that resonate with you.
      </motion.p>

      <motion.img
        className={styles.donateButton}
        src={im}
        alt="ghg"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      />
    </section>
  );
};

export default AboutUs;
