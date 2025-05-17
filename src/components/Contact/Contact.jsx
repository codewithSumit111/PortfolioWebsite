import React from "react";

import styles from "./Contact.module.css";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src="assets/contact/emailIcon.png" alt="Email icon" />
          <a href="mailto:cetaspirant8@email.com">Mail me</a>
        </li>
        <li className={styles.link}>
          <img
            src="assets/contact/linkedinIcon.png"
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/sumit-arya-3156a8308/">linkedin</a>
        </li>
        <li className={styles.link}>
          <img src="assets/contact/githubIcon.png" alt="Github icon" />
          <a href="https://www.github.com/codewithSumit111">Github</a>
          
        </li>
      </ul>
    </footer>
  );
};
