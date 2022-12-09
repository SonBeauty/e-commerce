import React from "react";
import styles from "../styles/Footer.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.top}>
        <div className={styles.item}>
          <h1>Categories</h1>
          <span>Women</span>
          <span>Men</span>
          <span>Shoes</span>
        </div>
        <div className={styles.item}>
          <h1>Links</h1>
          <span>FAQ</span>
          <span>Pages</span>
          <span>Stores</span>
        </div>
        <div className={styles.item}>
          <h1>About</h1>
          <span>Lorem ipsum dolor sit amet conse ctetur adipisicing elit</span>
        </div>
        <div className={styles.item}>
          <h1>Contact</h1>
          <span>Lorem ipsum dolor sit amet conse ctetur adipisicing elit</span>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.left}>
          <span className={styles.logo}>SONSTORE</span>
          <span className={styles.copyright}>
            © Copyright 2023. All Rights Reserved
          </span>
        </div>
        <div className={styles.right}></div>
      </div>
    </div>
  );
};

export default Footer;
