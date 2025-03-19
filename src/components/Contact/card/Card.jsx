import { motion } from "framer-motion";
import styles from "./ContactUs.module.css";

const ContactUs = () => {
  return (
    <div className={styles.container}>
      <motion.div
        className={styles.contactSection}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        <h2 className={styles.title}>CONTACT US</h2>
        <p className={styles.info}><strong>📞 +91-7023509999</strong></p>
        <p className={styles.info}><strong>☎️ 0294-6622222</strong></p>
        <p className={styles.info}><strong>✉️ info@narayanseva.org</strong></p>
      </motion.div>
<div className={styles.ContactUs}>
      <motion.div
        className={styles.getInTouch}
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1.2, delay: 0.5 }}
      >
        <h3>GET IN TOUCH</h3>
        <p><strong>Head Office</strong></p>
        <p>Address:</p>
        <p>Narayan Seva Sansthan, Seva Dham, Seva Nagar,</p>
        <p>Hiran Magri, Sector - 4,</p>
        <p>Udaipur (Rajasthan) – 313001 INDIA</p>
      </motion.div>

      <motion.div
        className={styles.mapContainer}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.5, delay: 0.8 }}
      >
        <iframe
          className={styles.map}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3672.2413025985513!2d73.69355091544299!3d24.58730438418342!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3967e533b4bde13f%3A0x95d3e2c9c9480c4!2sNarayan%20Seva%20Sansthan!5e0!3m2!1sen!2sin!4v1620103745489!5m2!1sen!2sin"
          allowFullScreen
          loading="lazy"
        ></iframe>
      </motion.div></div>
    </div>
  );
};

export default ContactUs;
