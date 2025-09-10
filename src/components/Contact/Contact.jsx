import React from "react";
import styles from "./Contact.module.css";

const getImageUrl = (path) => {
    return `/assets/${path}`;
  };

export const Contact = () => {
  return (
    <footer className={styles.container} id="contact">
      <div className={`${styles.text} contact-content`}>
        <h2>Contact</h2>
      </div>
      <ul className={`${styles.links} contact-content`}>
        <li className={styles.link}>
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email Icon" />
          <a href="mailto:myemail@email.com">bryanefetaylan@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="Linkedin Icon"
          />
          <a href="https://www.linkedin.com/in/bryan-taylan-b98134339/">
            www.linkedin.com/in/bryan-taylan
          </a>
        </li >
        <li className={styles.link}>
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github Icon" />
          <a href="https://github.com/BryanTaylan">github.com/BryanTaylan</a>
        </li>
      </ul>
    </footer>
  );
};
