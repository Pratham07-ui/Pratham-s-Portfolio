import React from "react";

import styles from "./Hero.module.css";
import Pratham_logo from "../../assets/hero/Pratham_logo.png"

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Prathamesh Jadhav</h1>
        <p className={styles.description}>
          Computer Science Student | Frontend Developer
        </p>
        
      </div>
      <img
        src={Pratham_logo}
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
