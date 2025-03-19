import  { useState } from 'react';
import styles from './Form.module.css';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  return (
    <form>
      <div className={styles.formGroup}>
        <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} required />
        <label htmlFor="name">Nom</label>
      </div>
      <div className={styles.formGroup}>
        <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} required />
        <label htmlFor="email">E-mail</label>
      </div>
      <div className={styles.formGroup}>
        <textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
        <label htmlFor="message">Message</label>
      </div>
      <div className={`${styles.btnArrow} ${styles.linearBg1}`}>
        Envoyer le message
        <svg width="24" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon}>
          {/* SVG Path */}
        </svg>
      </div>
    </form>
  );
};

export default Form;