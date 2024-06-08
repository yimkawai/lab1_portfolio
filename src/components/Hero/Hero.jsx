import React from "react";

import styles from "./Hero.module.css";
import { getImageUrl } from "../../utils";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hello World, I'm Ka Wai</h1>
        <p className={styles.description}>
          I'm a front-end developer with 5 year + Graphic Design experience<br></br>using React and
          NodeJS. <br></br>Reach out if you'd like to connect more!
        </p>
        <a href="mailto:kawaii@gmail.com" className={styles.contactBtn}>
          E-mail Me
        </a>
      </div>

    </section>
  );
};
