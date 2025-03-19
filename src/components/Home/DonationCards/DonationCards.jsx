
import styles from "./DonationCards.module.css";

import eventImage from "../../../assets/Events.jpg";
import donation2 from "../../../assets/Events1.jpg";
import donation3 from "../../../assets/card4.jpg";

const donations = [
  {
    id: 1,
    image: eventImage,
    title: "The Thirsty are Waiting For Your Help.",
    description: "Leorado et nisi mi at at blandit. Mauris nulla nec iaculis ultrices egestas consequat vitae facilisi dui.",
    raised: 8000,
    goal: 10000,
    percentage: 80,
    color: "#F4A261",
  },
  {
    id: 2,
    image: donation2,
    title: "Changing lives one meal at a time.",
    description: "Leorado et nisi mi at at blandit. Mauris nulla nec iaculis ultrices egestas consequat vitae facilisi dui.",
    raised: 4000,
    goal: 10000,
    percentage: 40,
    color: "#2A9D8F",
  },
  {
    id: 3,
    image: donation3,
    title: "Let's be one community in this cause.",
    description: "Leorado et nisi mi at at blandit. Mauris nulla nec iaculis ultrices egestas consequat vitae facilisi dui.",
    raised: 8692,
    goal: 10000,
    percentage: 87,
    color: "#E63946",
  },
];


const DonationCards = () => {
  return (
    <section className={styles.donationSection}>
      <div className={styles.donationContainer}>
        {donations.map((donation) => (
          <div key={donation.id} className={styles.donationCard}>
            <img src={donation.image} alt={donation.title} className={styles.cardImage} />
            <div className={styles.cardContent}>
              <h3 className={styles.cardTitle}>{donation.title}</h3>
              <p className={styles.cardDescription}>{donation.description}</p>
              <div className={styles.progressBar}>
                <div className={styles.progress} style={{ width: `${donation.percentage}%`, backgroundColor: donation.color }}>
                  <span className={styles.progressText}>{donation.percentage}%</span>
                </div>
              </div>
              <p className={styles.goalText}>
                Raised: <strong>${donation.raised}</strong> | Goal: <strong>${donation.goal}</strong>
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default DonationCards;
