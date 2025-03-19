
// import styles from './Footer.module.css';
// import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from 'react-icons/fa';

// const Footer = () => {
//   return (<>
//     <footer className={styles.footer}>
//       <div className={styles.container}>
//         <div className={styles.about}>
//           <h2>Charius</h2>
//           <p>Purus tellus arcu consequat neque nisl integer fames ac venenatis...</p>
//         </div>

//         <div className={styles.links}>
//           <h3>Quick Links</h3>
//           <ul>
//             <li><a href="#">Home</a></li>
//             <li><a href="#">About Us</a></li>
//             <li><a href="#">Mission & Vision</a></li>
//             <li><a href="#">Volunteer</a></li>
//             <li><a href="#">FAQ</a></li>
//           </ul>
//         </div>

//         <div className={styles.mission}>
//           <h3>Mission & Vision</h3>
//           <ul>
//             <li>Kids Education</li>
//             <li>Pure Water</li>
//             <li>Healthy Food</li>
//             <li>Medical Care</li>
//           </ul>
//         </div>

//         <div className={styles.contact}>
//           <h3>Contact Us</h3>
//           <p>charius@gmail.com</p>
//           <p>📞 +8 (123) 123 - 456 - 789</p>
//           <p>📍 19 Thordge Shiloh, Hawai 863</p>
//           <div className={styles.socialIcons}>
//             <FaFacebookF />
//             <FaTwitter />
//             <FaLinkedinIn />
//             <FaInstagram />
//           </div>
//         </div>
//       </div>
      
//       <div className={styles.bottom}>
//         <p>© 2024 charius. All rights reserved.</p>
//         <ul>
//           <li><a href="#">Privacy & Policy</a></li>
//           <li><a href="#">Terms</a></li>
//           <li><a href="#">About us</a></li>
//           <li><a href="#">FAQ</a></li>
//           <li><a href="#">Volunteer</a></li>
//         </ul>
//       </div>
//     </footer>
//       </>
//   );
// };

// export default Footer;

import { Link } from "react-router-dom";
import styles from "./Footer.module.css";

const FooterSection = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.donateSection}>
        <div className={styles.donateBox}>
        <p>
          <i>Save a life.</i>  <strong>Donate to Narayan Seva Sansthan</strong>
        </p>
          <span className={styles.amount}>₹ 5000</span>
        
         <Link to="/Donates"> <button className={styles.donateButton}>Donate</button></Link>
        </div>
        <hr/>
        <p className={styles.taxInfo}>
          All donations are tax-exempted under 80G of the Indian Income Tax Act.
          <br />
          Charity Id: <strong>AATN4183F</strong>
        </p>
        <hr/>
      </div>

      <div className={styles.footerContent}>
        <div className={styles.quickLinks}>
          <h3>Quick Links</h3>
          <ul>
            <li>About Us</li>
            <li>News & Stories</li>
            <li>Careers</li>
            <li>FAQs</li>
            <li>Privacy Policy</li>
            <li>Refund Policy</li>
            <li>Contact Us</li>
            <li>Blog</li>
            <li>CSR Partnership</li>
          </ul>
        </div>

        <div className={styles.contactInfo}>
          <h3>Contact Address</h3>
          <p>Narayan Seva Sansthan</p>
          <p>Seva Dham Seva Nagar, Hiran Magri, Sector -4,</p>
          <p>Udaipur (Rajasthan) - 313001</p>
          <p>INDIA</p>
        </div>

        <div className={styles.contactDetail}>
          <h3>Contact Detail</h3>
          <p>📞 +91-294 66 22 222</p>
          <p>📱 +91-7023509999</p>
          <p>📧 info@narayanseva.org</p>
          <div className={styles.socialIcons}>
            <span className={styles.icon}><i className="fa-brands fa-instagram"></i></span>
            <span className={styles.icon}><i className="fa-brands fa-twitter"></i></span>
            <span className={styles.icon}><i className="fa-brands fa-facebook"></i></span>
            <span className={styles.icon}><i className="fa-brands fa-youtube"></i></span>
            <span className={styles.icon}></span>
          </div>
        </div>
      </div>

      <div className={styles.copyright}>
        Copyright © Narayanseva 2025 All Rights Reserved
      </div>
    </footer>
  );
};

export default FooterSection;
