import more1 from "../../../assets/image1.jpeg";
import moresec1 from "../../../assets/image1.jpeg";
import moresec2 from "../../../assets/image1.jpeg";
import moresec3 from "../../../assets/image1.jpeg";
import styles from "./Moresec.module.css";

const Moresec = () => {
  return (
    <div className={styles.moremain}>
      <div className={styles.imageContainer}>
        <img src={more1} alt="img" />
      </div>
      <div className={styles.contentContainer}>
        <div className={styles.headerContainer}>
          <h5>OUR CHOOSE MORE</h5>
          <h2>
            We Preparing For Your Success
            <br /> Choose Best Solutions.
          </h2>
          <p>
           RP Soutions, management & support services Business
            business agency e lit, sed do eiusmod tempor majority have in some
            we form, by injected humour solution.
          </p>
        </div>
        <div className={styles.solutionsContainer}>
          <div className={styles.solution}>
            <div className={styles.solutionImageContainer1}>
              <img src={moresec1} alt="img" />
            </div>
            <div className={styles.solutionTextContainer}>
              <h5>
                Technological <br />
                Solutions
              </h5>
            </div>
          </div>
          <div className={styles.solution}>
            <div className={styles.solutionImageContainer1}>
              <img src={moresec2} alt="img" />
            </div>
            <div className={styles.solutionTextContainer}>
              <h5>
                Financial <br />
                Management
              </h5>
            </div>
          </div>
          <div className={styles.solution}>
            <div className={styles.solutionImageContainer1}>
              <img src={moresec3} alt="img" />
            </div>
            <div className={styles.solutionTextContainer}>
              <h5>
                Product <br />
                Development
              </h5>
            </div>
          </div>
        </div>
        <div className={styles.featuresListContainer0}>
          <div className={styles.featuresListContainer11}>
            <ul>
              <li>Team Support</li>
              <li>Business Management</li>
            </ul>
          </div>
          <div className={styles.featuresListContainer11}>
            <ul>
              <li>Business tailored</li>
              <li>Consultancy</li>
            </ul>
          </div>
        </div>
        <div className={styles.buttonContainer1}>
          <button>READ MORE</button>
        </div>
      </div>
    </div>
  );
};

export default Moresec;