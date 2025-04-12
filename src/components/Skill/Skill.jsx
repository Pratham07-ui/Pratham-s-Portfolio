import React from "react";
import styles from "./Skill.module.css";

import C_Logo from "../../assets/skill/C_Logo.png"
import css_logo from "../../assets/skill/css_logo.png"
import Java_logo from "../../assets/skill/Java_logo.png"
import Python_logo from "../../assets/skill/Python_logo.png"
import react_logo from "../../assets/skill/react_logo.png"
import html_logo from "../../assets/skill/html_logo.png"
import sql_logo from "../../assets/skill/sql_logo.png"
import github_logo from "../../assets/skill/github_logo.png"

export const Skill = () => {
  const skills = [
    { name: "C", logo: C_Logo },
    { name: "Java", logo: Java_logo },
    { name: "Python", logo: Python_logo },
    { name: "React", logo: react_logo },
    { name: "HTML", logo: html_logo },
    { name: "CSS", logo: css_logo },
    { name: "SQL", logo: sql_logo },
    { name: "GitHub", logo: github_logo },
  ];

  return (
    <section className={styles.container} id="skills">
      <h2 className={styles.title}>Skills</h2>
      <div className={styles.skillGrid}>
        {skills.map((skill) => (
          <div className={styles.skillCard} key={skill.name}>
            <img
              src={skill.logo}
              alt={`${skill.name} logo`}
              className={styles.skillLogo}
            />
            <p>{skill.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
