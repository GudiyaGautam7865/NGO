
import { Link } from "react-router-dom";
import styles from "./Header.module.css";


const Herder = () => {
  return (<>
   
    <nav className={styles.navbar}>
      <div className={styles.logo}>Charius</div>
      <ul className={styles.navLinks}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/Gellary">Gellary</Link></li>
     
        <li><Link to="/Blog">Blogs</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        <button><Link to="/Donates"> Donte in kind</Link></button>
      </ul>
    </nav>
    </>
  );
};

export default Herder ;
