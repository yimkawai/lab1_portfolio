import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={getImageUrl("about/aboutImage.jpg")}
          alt="myhusky"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <div className={styles.aboutItemText}>
              <h3>KW YM Web Developer & Designer</h3>
              <br></br><br></br>
              <p>
              A graphic designer based in Toronto, Ontario,
              </p>
              <p>
              studies software engineering remotely. 
              </p>
              <p>
              When I'm not staring at screens, 
              </p>
              <p>I'm usually busy with my husky, and learninng new things.</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
