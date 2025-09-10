import React from "react";
import styles from "./WhatDrivesMe.module.css";

export const WhatDrivesMe = () => {
  return (
    <section className={styles.container} id="what-drives-me">
      <h2 className={`${styles.title} section-animate`}>What Drives Me</h2>
      <div className={styles.content}>
        <p className={`${styles.description} fade-in-up`}>
          I'm passionate about solving real world problems through code and believe 
          technology should make a meaningful difference in people's lives. The constant 
          evolution of development excites me. There's always something new to learn, 
          master, and apply to create better solutions.
        </p>
        <p className={`${styles.description} fade-in-up animate-delay-1`}>
          What energizes me most is the collaborative nature of development. Whether 
          it's pair programming, code reviews, or brainstorming solutions with a team, 
          I thrive in environments where diverse perspectives come together to build 
          something greater than any individual could create alone.
        </p>
      </div>
    </section>
  );
};