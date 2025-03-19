import Journey1 from "../../../assets/Journey1.webp"
import Journey2 from "../../../assets/Journey2.webp"
import HomeJourney1 from "../OurJourney/OurJourney1"
import Journey3 from "../../../assets/Journey3.webp"
import styles from './OurJourney.module.css';
const HomeJourney = () => {
  return (
    <div className={styles.homeusajourneymain }>
      <h1>OurJourneymain</h1> <div className={styles.homejmain}>
        <div className={styles.homej}>
          <div className={styles.homejinner}>
            <div className={styles.homejusth}>
              <img
                width="191px"
                height="200px"
                loading="lazy"
                src="https://nss-main.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/07/07175912/usa-step1.webp"
                alt="Established 1985"
                title="Established 1985"
              /></div>
            <div className={styles.homejcaption}>
              <h2>1985</h2> <h3>Established</h3>
            </div></div>
          <div className={styles.homejhover}>
            <h2>1985</h2><h3>Established</h3>
            <p> Free-of-cost food distribution for the patients and attendants in government hospitals. </p>  </div> </div>
      <div className={styles.homej}>
          <div className={styles.homejinner}>
            <div className={styles.homejusth}>
              <img
                width="191px"
                height="200px"
                loading="lazy"
                src="https://nss-main.s3.ap-south-1.amazonaws.com/wp-content/uploads/2024/07/07175912/usa-step2.webp"
                alt="Orphanage 1990"
                title="Orphanage 1990"
              /> </div>
            <div className={styles.homejcaption}>
              <h2>1990</h2> <h3>Orphanage</h3>
            </div></div>
          <div className={styles.homejhover}>
            <h2>1990</h2><h3>Orphanage</h3>
            <p> An orphanage providing education, health, nutrition, lodging &amp; boarding facilities, free of cost.  </p> </div></div>
        <div className={styles.homej}>
          <div className={styles.homejinner}>
            <div className={styles.homejusth}>
              <img
                width="191px"
                height="200px"
                loading="lazy"
                src={Journey3}
                alt="Established 19975"
                title="Established 1985"
              /></div>
            <div className={styles.homejcaption}>
              <h2>1985</h2><h3>Hospital for the Differently Abled</h3>
            </div> </div>
          <div className={styles.homejhover}>
            <h2>1985</h2><h3>Hospital for the Differently Abled</h3>
            <p>The first hospital for polio patients was established, providing treatments to the differently abled.</p> </div></div>
        <div className={styles.homej}>
          <div className={styles.homejinner}>
            <div className={styles.homejusth}>
              <img
                width="191px"
                height="200px"
                loading="lazy"
                src={Journey2}
                alt="Established 1985"
                title="Established 1985"
              /></div>
            <div className={styles.homejcaption}>
              <h2>2001</h2> <h3>Vocational Training Centre</h3>
            </div></div>
          <div className={styles.homejhover}>
            <h2>1985</h2><h3>Vocational Training Centre</h3>
            <p> The differently abled & underprivileged are trained for the real world & its struggles. </p>
     </div> </div>
        <div className={styles.homej}>
          <div className={styles.homejinner}>
            <div className={styles.homejusth}>
              <img
                width="191px"
                height="200px"
                loading="lazy"
                src={Journey1}
                alt="Established 1985"
                title="Established 1985"
              /></div>
            <div className={styles.homejcaption}>
              <h2>2008</h2> <h3>Divyang Vivah</h3>
            </div>
          </div>
          <div className={styles.homejhover}>
            <h2>1985</h2> <h3>Divyang Vivah</h3>
              <p> Free of cost ceremonies for the differently abled in an effort towards social rehabilitation.</p>
                     </div></div></div>
     <HomeJourney1/> </div>
  );
};
export default HomeJourney;