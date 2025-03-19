import Journey8 from "../../../assets/Journey8.webp"
import Journey7 from "../../../assets/Journey7.webp"
import Journey6 from "../../../assets/Journey6.webp"
import Journey5 from "../../../assets/Journey5.webp"
import Journey4 from "../../../assets/Journey4.webp"
import styles from './OurJourney.module.css';
const HomeJourney1 = () => {
    return (
<div className={styles.homejmain1}>
<div className={styles.homej}>
  <div className={styles.homejinner}>
    <div className={styles.homejusth}>
      <img
        width="191px"
        height="200px"
        loading="lazy"
        src={Journey8}
        alt="Established 1985"
        title="Established 1985"
      /> </div>
    <div className={styles.homejcaption}>
      <h2>2008</h2><h3>Padma Shree Award</h3>
       </div> </div>
  <div className={styles.homejhover}>
    <h2>2008</h2> <h3>Padma Shree Award</h3>
    <p>Our founding chairman, Hon. Kailash ji ‘Manav’, had the honour of receiving the Padma Shree Award.</p>
  </div></div>
<div className={styles.homej}>
  <div className={styles.homejinner}>
    <div className={styles.homejusth}>
      <img
        width="191px"
        height="200px"
        loading="lazy"
        src={Journey7}
        alt="Orphanage 1990"
        title="Orphanage 1990"
      /></div>
    <div className={styles.homejcaption}>
      <h2>2015</h2><h3>Narayan Children Academy</h3>
    </div> </div>
  <div className={styles.homejhover}>
    <h2>2015</h2><h3>Narayan Children Academy</h3>
    <p>Free of cost, quality digital education for underprivileged children.</p>
  </div></div>
<div className={styles.homej}>
  <div className={styles.homejinner}>
    <div className={styles.homejusth}>
      <img
        width="191px"
        height="200px"
        loading="lazy"
        src={Journey6}
        alt="Established 1985"
        title="Established 1985"
      /></div>
    <div className={styles.homejcaption}>
      <h2>2017</h2><h3>Divya Heroes</h3>
    </div></div>
  <div className={styles.homejhover}>
    <h2>2017</h2> <h3>Divya Heroes</h3>
    <p>Divya Heroes
    Talent shows for the highly talented, differently abled individuals.</p>
  </div></div>
<div className={styles.homej}>
  <div className={styles.homejinner}>
    <div className={styles.homejusth}>
      <img
        width="191px"
        height="200px"
        loading="lazy"
        src={Journey5}
        alt="Established 1985"
        title="Established 1985"
      /></div>
    <div className={styles.homejcaption}>
      <h2>2020</h2><h3>Corona Relief Campaigns</h3>
    </div></div>
  <div className={styles.homejhover}>
    <h2>2020</h2><h3>Corona Relief Campaigns</h3>
    <p>Provision of free cooked meals, masks, sanitisers, and grocery kits for daily wage laborers </p>
  </div></div>
<div className={styles.homej}>
  <div className={styles.homejinner}>
    <div className={styles.homejusth}>
      <img
        width="191px"
        height="200px"
        loading="lazy"
        src={Journey4}
        alt="Established 1985"
        title="Established 1985"
      />   </div>
    <div className={styles.homejcaption}>
      <h2>2025</h2> <h3>World of Humanity</h3>
    </div></div>
  <div className={styles.homejhover}>
    <h2>2025</h2><h3>World of Humanity</h3>
    <p>It aims to create an inclusive society with acceptance for all </p>
  </div></div></div>
 );
};
export default HomeJourney1;