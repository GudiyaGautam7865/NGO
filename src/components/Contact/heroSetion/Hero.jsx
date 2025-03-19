import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./Hero.module.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    reason: "",
    firstName: "",
    lastName: "",
    email: "",
    contact: "",
    message: "",
    captcha: "",
    termsAgreed: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted Successfully!");
  };

  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
    >
      <h2 className={styles.heading}>Have Questions?</h2>

      <form onSubmit={handleSubmit} className={styles.form}>
        <motion.select
          name="reason"
          className={styles.input}
          value={formData.reason}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        >
          <option value="">Reason of contact*</option>
          <option value="donation">Donation Inquiry</option>
          <option value="volunteering">Volunteering</option>
          <option value="other">Other</option>
        </motion.select>

        <div className={styles.flex}>
          <motion.input
            type="text"
            name="firstName"
            placeholder="First Name*"
            className={styles.input}
            value={formData.firstName}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="text"
            name="lastName"
            placeholder="Last Name*"
            className={styles.input}
            value={formData.lastName}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        <div className={styles.flex}>
          <motion.input
            type="email"
            name="email"
            placeholder="Email*"
            className={styles.input}
            value={formData.email}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
          />
          <motion.input
            type="text"
            name="contact"
            placeholder="Contact*"
            className={styles.input}
            value={formData.contact}
            onChange={handleChange}
            whileFocus={{ scale: 1.05 }}
          />
        </div>

        <motion.textarea
          name="message"
          placeholder="Message"
          className={styles.textarea}
          value={formData.message}
          onChange={handleChange}
          whileFocus={{ scale: 1.05 }}
        ></motion.textarea>

        <motion.div
          className={styles.captcha}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
        >
          <p className={styles.captchaText}>G L C R</p>
          <input
            type="text"
            name="captcha"
            className={styles.input}
            placeholder="Enter Captcha"
            value={formData.captcha}
            onChange={handleChange}
          />
        </motion.div>

        <label className={styles.checkboxLabel}>
          <input
            type="checkbox"
            name="termsAgreed"
            checked={formData.termsAgreed}
            onChange={handleChange}
          />
          I agree to the <a href="#">Terms and Conditions</a>
        </label>

        <motion.button
          type="submit"
          className={styles.submitBtn}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          Submit
        </motion.button>
      </form>
    </motion.div>
  );
};

export default ContactForm;

