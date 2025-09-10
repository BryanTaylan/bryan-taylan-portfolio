import React from "react";
import styles from "./BeyondCode.module.css";

export const BeyondCode = () => {
  return (
    <section className={styles.container} id="beyond-code">
      <h2 className={`${styles.title} section-animate`}>Beyond Code</h2>
      <div className={styles.content}>
        <p className={`${styles.description} fade-in-up`}>
          When I'm not coding, you'll find me playing guitar or on the soccer field. 
          Music feeds my creative side and teaches me to appreciate different forms 
          of expression, while soccer keeps me active and reinforces the importance 
          of teamwork and strategic thinking.
        </p>
        <p className={`${styles.description} fade-in-up animate-delay-1`}>
          These hobbies shape how I approach technology. Music reminds me that great 
          software, like great songs, needs rhythm and flow, while soccer shows me 
          that the best solutions come from understanding how all the pieces work 
          together toward a common goal.
        </p>
      </div>
    </section>
  );
};