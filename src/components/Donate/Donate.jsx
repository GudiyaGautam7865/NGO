import { useState } from "react";
import Donation from "../../assets/Donetion.png"
import styles from "./Donate.module.css";

const Donate = () => {
  const [amount, setAmount] = useState("5000");
  const [donorType, setDonorType] = useState("Indian Donor");
  const [givingOption, setGivingOption] = useState("Once");
return (
    <div className={styles.container}>
      <h2 className={styles.title}>DONATE</h2>
 <div className={styles.donorType}>
        <label>
          <input
            type="radio"
            name="donor"
            checked={donorType === "Indian Donor"}
            onChange={() => setDonorType("Indian Donor")}
          />
          Indian Donor
        </label>
        <label>
          <input
            type="radio"
            name="donor"
            checked={donorType === "NRI Donor"}
            onChange={() => setDonorType("NRI Donor")}
          />
          NRI Donor
        </label>
        <label>
          <input
            type="radio"
            name="donor"
            checked={donorType === "Foreign Donor"}
            onChange={() => setDonorType("Foreign Donor")}
          />
          Foreign Donor
        </label>
      </div>
<div className={styles.givingOptions}>
        <button
          className={givingOption === "Once" ? styles.active : ""}
          onClick={() => setGivingOption("Once")}
        >
          Give Once
        </button>
        <button
          className={givingOption === "Monthly" ? styles.active : ""}
          onClick={() => setGivingOption("Monthly")}
        >
          Give Monthly
        </button>
      </div>
  <div className={styles.amountSections}>
      <div className={styles.amountSection}>
        <h3>Select Amount</h3>
        <input
          type="text"
          className={styles.amountInput}
          value={`INR ${amount}`}
          readOnly
        />
        <div className={styles.amountOptions}>
          <button onClick={() => setAmount("5000")}>INR 5000</button>
          <button onClick={() => setAmount("10000")}>INR 10000</button>
          <button onClick={() => setAmount("20000")}>INR 20000</button>
          <input
            type="text"
            placeholder="Any Amount"
            className={styles.customAmount}
            onChange={(e) => setAmount(e.target.value)}
          />
        </div>
      <button className={styles.donateButton}>NEXT</button>
      </div>
  <div className={styles.banner}>
        <div className={styles.bannerText}>
          <h3>CRITICAL DISEASE</h3>
          <h2>5400+ Patients of Critical Disease Are Waiting for Donation</h2>
        </div>
        <div className={styles.bannerImage}>
          <img src={Donation} alt="Donation" />
        </div>
      </div>
      </div>
         </div>
  );
};
export default Donate;
