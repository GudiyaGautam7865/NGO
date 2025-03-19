import  { useState } from 'react';
import styles from './Modal.module.css';

const Modal = ({ onClose, isSwitched, onSwitch }) => {
  return (
    <div className={`${styles.modal} ${isSwitched ? styles.switched : ''}`}>
      <div className={styles.groups}>
        <div className={styles.group1}>
          <div className={`${styles.layer1} ${styles.dbg} ${styles.flexCenter}`}>
            <div className={styles.framePicture}></div>
            <div className={styles.aboutPicture}></div>
          </div>
        </div>
        <div className={styles.group2}>
          <div className={styles.closeSection} onClick={onClose}>
            <div className={styles.closeContainer}>
              <div className={styles.leftright}></div>
              <div className={styles.rightleft}></div>
              <label className={styles.close}>Fermer</label>
            </div>
          </div>
          <div className={`${styles.layer1} ${styles.lbg} ${styles.flexCenter}`}>
            <div className={styles.layerContent}>
              <h3>Permettez-moi de me présenter</h3>
              <h6>Développeur web full stack</h6>
              <p>Bonjour, je suis DEFAY Florian, développeur web indépendant passionné âgé de 20 ans.</p>
              <div className={`${styles.btnArrow2} ${styles.light}`} onClick={onSwitch}>
                <div>{isSwitched ? 'Retour' : 'Me contacter'}</div>
                <svg width="24" height="8" viewBox="0 0 16 8" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.arrowIcon}>
                  {/* SVG Path */}
                </svg>
              </div>
            </div>
          </div>
          <div className={`${styles.layer2} ${styles.dbg} ${styles.flexCenter}`}>
            <div className={styles.layerContent}>
              <h3>Parlez-moi de votre projet !</h3>
              <h6>Me contacter</h6>
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;