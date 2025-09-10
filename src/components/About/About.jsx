import React from "react";
import styles from "./About.module.css";
import setup from "/assets/about/setup.jpeg";
import code from "/assets/about/code.png";
import team from "/assets/about/team.png";
import learn from "/assets/about/learn.png"; 

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={`${styles.title} section-animate`}>About</h2>
      <div className={styles.content}>
        <img
          src={setup}
          alt="laptop setup"
          className={`${styles.aboutImage} fade-in-up`}
        />
        <ul className={`${styles.aboutItems} about-items`}>
          <li className={`${styles.aboutItem} about-item`}>
            <img src={code} alt="Code icon" />
            <div className={styles.aboutItemText}>
              <h3>Software Developer</h3>
              <p>
                I'm passionate about problem solving through code and building
                applications that make a difference. I enjoy learning new
                technologies and tackling challenging projects.
              </p>
            </div>
          </li>
          <li className={`${styles.aboutItem} about-item`}>
            <img src={team} alt="team icon" />
            <div className={styles.aboutItemText}>
              <h3>Team Collaborator</h3>
              <p>
                I thrive in collaborative environments and enjoy contributing to
                team projects. I'm always eager to learn from others and share
                knowledge.
              </p>
            </div>
          </li>
          <li className={`${styles.aboutItem} about-item`}>
            <img src={learn} alt="learn icon" />
            <div className={styles.aboutItemText}>
              <h3>Continuous Learner</h3>
              <p>
                I'm constantly expanding my technical skills through coursework,
                personal projects, and exploring new frameworks and tools in the
                development ecosystem.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};
