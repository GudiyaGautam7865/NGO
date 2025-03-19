import styles from "../herdertop/HeaderTop.module.css";

function HeaderTop() {
  return (
    <>
   
      <div className={styles.HeaderTop}>
       <div className={styles.phone}>
      <i className="fa-solid fa-phone"></i> 
      <p>91+1234567890</p>
      <div className={styles.email}>
      <i className="fa-solid fa-envelope"></i> 
      </div>
      <p>@mail.com</p>
      </div>
      <div className={styles.icons}>
      <i className="fa-brands fa-instagram"></i>
      <i className="fa-brands fa-facebook"></i>
      <i className="fa-brands fa-twitter"></i></div>
        </div>      
    </>
  )
}

export default HeaderTop
