// import { useState } from "react";
// import Donation from "../../assets/Donetion.png"
// import styles from "./Donate.module.css";

// const Donate = () => {
//   const [amount, setAmount] = useState("5000");
//   const [donorType, setDonorType] = useState("Indian Donor");
//   const [givingOption, setGivingOption] = useState("Once");
// return (
//     <div className={styles.container}>
//       <h2 className={styles.title}>DONATE</h2>
//  <div className={styles.donorType}>
//         <label>
//           <input
//             type="radio"
//             name="donor"
//             checked={donorType === "Indian Donor"}
//             onChange={() => setDonorType("Indian Donor")}
//           />
//           Indian Donor
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="donor"
//             checked={donorType === "NRI Donor"}
//             onChange={() => setDonorType("NRI Donor")}
//           />
//           NRI Donor
//         </label>
//         <label>
//           <input
//             type="radio"
//             name="donor"
//             checked={donorType === "Foreign Donor"}
//             onChange={() => setDonorType("Foreign Donor")}
//           />
//           Foreign Donor
//         </label>
//       </div>
// <div className={styles.givingOptions}>
//         <button
//           className={givingOption === "Once" ? styles.active : ""}
//           onClick={() => setGivingOption("Once")}
//         >
//           Give Once
//         </button>
//         <button
//           className={givingOption === "Monthly" ? styles.active : ""}
//           onClick={() => setGivingOption("Monthly")}
//         >
//           Give Monthly
//         </button>
//       </div>
//   <div className={styles.amountSections}>
//       <div className={styles.amountSection}>
//         <h3>Select Amount</h3>
//         <input
//           type="text"
//           className={styles.amountInput}
//           value={`INR ${amount}`}
//           readOnly
//         />
//         <div className={styles.amountOptions}>
//           <button onClick={() => setAmount("5000")}>INR 5000</button>
//           <button onClick={() => setAmount("10000")}>INR 10000</button>
//           <button onClick={() => setAmount("20000")}>INR 20000</button>
//           <input
//             type="text"
//             placeholder="Any Amount"
//             className={styles.customAmount}
//             onChange={(e) => setAmount(e.target.value)}
//           />
//         </div>
//       <button className={styles.donateButton}>NEXT</button>
//       </div>
//   <div className={styles.banner}>
//         <div className={styles.bannerText}>
//           <h3>CRITICAL DISEASE</h3>
//           <h2>5400+ Patients of Critical Disease Are Waiting for Donation</h2>
//         </div>
//         <div className={styles.bannerImage}>
//           <img src={Donation} alt="Donation" />
//         </div>
//       </div>
//       </div>
//          </div>
//   );
// };
// export default Donate;







import React, { useState } from "react";
import styles from "./Donate.module.css";
const Donation = () => {
  const [selectedAmount, setSelectedAmount] = useState(20);
  const [customAmount, setCustomAmount] = useState("");
  const [donationType, setDonationType] = useState("");

  const handleAmountClick = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount("");
  };

  const handleCustomAmountChange = (event) => {
    const value = event.target.value.replace(/^0+/, "");
    if (/^[0-9]*$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  return (
    <div className={styles.donate}>
      <div className={styles.donateBlack}>
        <h2>
          <span>$</span> Donate
        </h2>
        <p>Your contribution is vital to the success of our initiative.</p>
      </div>
      <form action="https://earphone.foxycart.com/cart" method="post" acceptCharset="utf-8">
        <input type="hidden" name="name" value="Donation" />
        <input type="hidden" name="price" value={customAmount || selectedAmount} />

        <div className={styles.donateBlue}>
          <h3>Donation amount*</h3>
          <div className={styles.donateAmountBox}>
            <div className={styles.donateAmount}>
              {[20, 50, 100, 500].map((amount) => (
                <div
                  key={amount}
                  className={`${styles.denomination} ${selectedAmount === amount ? styles.selected : ""}`}
                  onClick={() => handleAmountClick(amount)}
                >
                  <input type="radio" name="amount" value={amount} checked={selectedAmount === amount} readOnly />
                  <label>${amount}</label>
                </div>
              ))}
            </div>
            <div className={styles.denominationOther}>
              <input
                type="number"
                name="amount"
                value={customAmount}
                placeholder="Enter Other Amount"
                onChange={handleCustomAmountChange}
              />
            </div>
          </div>
        </div>

        <div className={`${styles.donateBlack} ${styles.donateType}`}>
          <h3>Donation type*</h3>
          <label
            className={`${styles.dtype} ${donationType === "" ? styles.selected : ""}`}
            onClick={() => setDonationType("")}
          >
            <input type="radio" name="sub_frequency" value="" checked={donationType === ""} readOnly />
            One-Time
          </label>
          <label
            className={`${styles.dtype} ${donationType === "1m" ? styles.selected : ""}`}
            onClick={() => setDonationType("1m")}
          >
            <input type="radio" name="sub_frequency" value="1m" checked={donationType === "1m"} readOnly />
            Monthly
          </label>
        </div>

        <div className={`${styles.donateBlue} ${styles.donatePayment}`}>
          <div className={styles.donateSubmit}>
            <button type="submit">Donate ${customAmount || selectedAmount}</button>
          </div>
          <p>
            <small>*Contributions are tax-deductible.</small>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Donation;