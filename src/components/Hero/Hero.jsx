import React from "react";
import styles from "./Hero.module.css";
import ProfileCard from "../ProfileCard/ProfileCard";

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={`${styles.title} hero-title`}>Hello, I'm Bryan</h1>
        <p className={`${styles.description} hero-description`}>
          I'm a UCF Computer Engineering student who enjoys solving complex
          problems through code. I'm passionate about software development and
          always excited to learn new technologies while building meaningful
          projects.
        </p>
        <a
          href="/resume.html"
          target="_blank"
          className={`${styles.contactBtn} hero-button`}
        >
          View Resume
        </a>
      </div>
      <div className={`${styles.profileCardContainer} hero-card`}>
        <ProfileCard
          name="Bryan Taylan"
          title="Computer Engineering Student"
          handle="bryantaylan"
          status=""
          contactText="Contact Me"
          avatarUrl="/assets/hero/MeFullImage.jpeg"
          miniAvatarUrl="/assets/hero/profileHero.png"
          showUserInfo={true}
          enableTilt={true}
          enableMobileTilt={false}
          onContactClick={() => {
            const contactSection = document.getElementById("contact");
            if (contactSection) {
              contactSection.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
      </div>
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};
