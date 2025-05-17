import React from "react";

import styles from "./About.module.css";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src="assets/about/aboutImage.png"
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src="assets/about/cursorIcon.png"alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Web Developer</h3>
              <p>
                I'm a frontend developer learning & building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/serverIcon.png" alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Python Developer</h3>
              <p>
                I have completed advance python cousrse & build mini projects for self-learning & practical implementation.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src="assets/about/cursorIcon.png" alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>ML enthusiast</h3>
              <p>
                I have trained few simple models & leveraging ml concepts into real world. Also explored Computer Vision.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
