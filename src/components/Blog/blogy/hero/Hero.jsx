
import Styles from './Hero.module.css';

function Hero() {
  return (
    <>
      <div className={Styles.Container}>

        <div className={Styles.article}>
          <strong>Hey, we’re Blogy.</strong> See <br />our thoughts, stories and<br /> ideas.
        </div>

        <div className={Styles.input}>
          <div className={Styles.text}>
            <input type="email" name="email" placeholder="Your email address" />
          
          <button className={Styles.button}>Subscribe</button>
          </div>

          <div className={Styles.h4}>
            Get the email newsletter and unlock access to
            <br />
            members-only content and updates.
          </div>
        </div>
        <hr />  
      </div>
    </>
  );
}

export default Hero;
