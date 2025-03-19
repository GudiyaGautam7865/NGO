import { Link } from "react-router-dom";
import { useState } from "react";
import styles from "./Header.module.css";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>Charius</div>
      
      {/* Menu Toggle Button */}
      <div className={styles.menuToggle} onClick={() => setIsOpen(!isOpen)}>
        ☰
      </div>

      {/* Navigation Links */}
      <ul className={`${styles.navLinks} ${isOpen ? styles.active : ""}`}>
        <li><Link to="/" onClick={() => setIsOpen(false)}>Home</Link></li>
        <li><Link to="/about" onClick={() => setIsOpen(false)}>About</Link></li>
        <li><Link to="/gallery" onClick={() => setIsOpen(false)}>Gallery</Link></li>
        <li><Link to="/blog" onClick={() => setIsOpen(false)}>Blogs</Link></li>
        <li><Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link></li>
        <li>
          <Link to="/donate" onClick={() => setIsOpen(false)}>
            <button className={styles.donateButton}>Donate in Kind</button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Header;
