import React from "react";

import styles from "./Hero.module.css";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Sumit</h1>
        <p className={styles.description}>
          I'm a first-year engineering student with a growing passion for
          full-stack development. Currently honing my skills in React and
          Node.js, I'm focused on building responsive, user-friendly web
          applications and continuously learning through hands-on projects. I'm
          eager to collaborate, contribute, and grow in the tech community.Let's
          connect and explore opportunities to learn and build together!
        </p>
        <a href="https://drive.google.com/file/d/1VvEI2ptMfbSZp2OXS2FAI9I0Bz84u-lj/view?usp=drive_link" className={styles.contactBtn}>
          Download Resume
        </a>
      </div>
      <img
        src="assets/hero/heroImage.png"
        alt="Hero image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
