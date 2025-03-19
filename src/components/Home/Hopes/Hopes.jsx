import { useState, useEffect } from "react";
  // import HopesImage from "../../../assets/Hopes2.png";
import styles from "./Hopes.module.css";
import imageSrc from "../../../assets/Hopes1.png"; // Replace with actual image path
import CountUp from "react-countup"; // Import CountUp for animations

const Hopes = () => {
  const [key, setKey] = useState(0);

  // Restart animation every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setKey((prevKey) => prevKey + 1); // Change key to restart CountUp animation
    }, 5000); // Adjust time as needed (5000ms = 5 seconds)

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, []);

  return (
    <section className={styles.hero}>
        <div className={styles.h}>
      <div className={styles.imageContainer}>
      <div className={`${styles.slice} `} style={{ backgroundImage: `url(${imageSrc})` }}></div>
    
{/* 
<div className={styles.Hopesimag}>
  <img src={HopesImage} alt="Hope Image" />
</div>; */}

        {/* <div className={`${styles.slice} ${styles.slice1}`} style={{ backgroundImage: `url(${imageSrc})` }}></div>
        <div className={`${styles.slice} ${styles.slice2}`} style={{ backgroundImage: `url(${imageSrc})` }}></div>
        <div className={`${styles.slice} ${styles.slice3}`} style={{ backgroundImage: `url(${imageSrc})` }}></div> */}
      </div>

      <div className={styles.textContainer}>
        <h3 className={styles.subtitle}>Welcome To Charius</h3>
        <h1 className={styles.heading}>You’re the Hope of Others.</h1>
        <p className={styles.description}>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fuga ex commodi dolorum minima blanditiis soluta doloremque sit illo tempore odit cupiditate non ipsam neque, aliquam quod? Explicabo laboriosam iusto accusantium?
          Illo quasi, enim tempore ab soluta nihil ducimus temporibus maiores sit laudantium dignissimos. Enim commodi error eius ea placeat voluptas, inventore vitae, veritatis minus quidem blanditiis quaerat ipsam dolores fugiat.
          Aspernatur omnis molestiae aperiam molestias corrupti tempore non odit ipsum quo ducimus! Necessitatibus, esse. Quae dolor, eum repellendus totam sit nihil accusamus consectetur distinctio temporibus rerum! Dolores ad modi minus!
          Enim repudiandae eum officiis vitae dignissimos provident at consequatur magni alias odio! In ab vero id esse, debitis laborum odit ea vitae rerum iste? Tempora, asperiores? Nulla assumenda recusandae veritatis.
          Ipsa ducimus dignissimos sed eius libero optio, adipisci commodi sint tenetur.
        </p>
        <button className={styles.donateButton}>Discover More</button>
        <div className={styles.contact}>
          <span>📞 Call Us:</span> <strong>+ (684) 555-0102</strong>
        </div>
      </div>
      </div>
      {/* Animated Stats Section - Numbers Reset Every 5 Seconds */}
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <h2><CountUp key={key} start={0} end={50} duration={3} /></h2>
          <p>Total Campaigns</p>
        </div>
        <div className={styles.statItem}>
          <h2><CountUp key={key} start={0} end={10} duration={3} suffix="M" /></h2>
          <p>Total Fund Raised</p>
        </div>
        <div className={styles.statItem}>
          <h2><CountUp key={key} start={0} end={500} duration={3} /></h2>
          <p>Happy Volunteers</p>
        </div>
        <div className={styles.statItem}>
          <h2><CountUp key={key} start={0} end={5} duration={3} /></h2>
          <p>Years of Fund Raising</p>
        </div>
      </div>
    </section>
  );
};

export default Hopes;
