import Our1 from '../../../assets/image1.jpeg';
import Our2 from '../../../assets/image1.jpeg';
import Our3 from '../../../assets/image1.jpeg';
import Our4 from '../../../assets/image1.jpeg';
import styles from './Ourfeature.module.css';

const Ourfeature = () => {
  return (
    <div className={styles.ourMainSection}>
      <div className={styles.headerSection}>
        <h6>Our Best Feature</h6>
        <h2>We Are Features Digital Solution</h2>
      </div>
      <div className={styles.featuresSection}>
        <div className={styles.featureItem}>
          <img src={Our1} alt="Technological Solutions" />
          <h4>Technological<br />Solutions</h4>
        </div>
        <div className={styles.featureItem}>
          <img src={Our2} alt="Operational Efficiency" />
          <h4>Operational<br />Efficiency</h4>
        </div>
        <div className={styles.featureItem}>
          <img src={Our3} alt="Financial Management" />
          <h4>Financial<br />Management</h4>
        </div>
        <div className={styles.featureItem}>
          <img src={Our4} alt="Business Resources" />
          <h4>Business<br />Resources</h4>
        </div>
      </div>
    </div>
  );
};

export default Ourfeature;