import React from "react";

import styles from "./Experience.module.css";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="services">
      <h2 className={styles.title}>Services</h2>
      <div className={styles.content}>
      <div>
        <h1>
        Front End Basics
      </h1>
      <li>HTML</li>
      <li>CSS</li>
      <li>JavaScript</li>
      </div>
      <div><h1>JavaScript Library</h1>
      <li>Ract.js</li>
      <li>Vue</li></div>

      <div><h1>Graphic Design</h1>
      <li>Packaging Design</li>
      <li>Logo Design</li>
      <li>Branding Research and Design</li></div>


      </div>
    </section>
  );
};
