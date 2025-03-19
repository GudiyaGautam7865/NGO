import image1 from "../../../assets/pixelcut-export (1).png";
import image2 from "../../../assets/s.png";
import image3 from "../../../assets/scollercard2.png";
import image4 from "../../../assets/scollercard3.png";
import image5 from "../../../assets/s.png";
import styles from "./HeroSection.module.css";

function HeroSection() {
  return (
    <div className={styles.container}>
      <div className={styles.box}>
      <img src={image1} alt="thugg" className={styles.image} /></div>
      <div className={styles.textOverlay}>

         <h5 className={styles.subHeading}>Give them a chance.</h5>
      </div>
           <h1 className={styles.heading}>Give The Child The Gift Of Education.</h1>
            
            <p className={styles.description}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque, et temporibus, exercitationem veniam sapiente consequatur odio consectetur praesentium suscipit quaerat harum eaque laudantium placeat libero quis voluptate dolor provident tempore.
                    Magni illum est,
                   </p>
            <div className={styles.volunteerBox}>
              <div className={styles.volun}>
            <img src={image2} alt="Volunteer 1" />
                   <p><strong>120+</strong> Happy Volunteers</p></div>
                   <div className={styles.avatars}>
                     <img src={image2} alt="Volunteer 1" />
                     <img src={image3} alt="Volunteer 2" />
                     <img src={image4} alt="Volunteer 3" />
                     <img src={image5} alt="Volunteer 3" /><img src={image5} alt="Volunteer 3" /><img src={image4} alt="Volunteer 3" /><img src={image3} alt="Volunteer 3" /><img src={image2} alt="Volunteer 3" />
                   </div>
                 </div>
      <div className={styles.buttonHero}>
      <button>
      Discover More
      </button>
      </div>
    </div>
  );
}

export default HeroSection;
