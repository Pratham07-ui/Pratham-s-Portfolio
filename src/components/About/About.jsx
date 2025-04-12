import React from "react";
import { Download, Github, ChefHat, Linkedin } from "lucide-react";
import styles from "./About.module.css";


export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      
      {/* Curved box wrapper starts here */}
      <div className={styles.aboutBox}>
        <div className={styles.content}>
          <div className={styles.leftSection}>
            <p>
              I'm a Computer Science student passionate about building innovative
              solutions and learning new technologies. With a focus on web
              development and software engineering, I strive to create impactful
              applications that solve real-world problems.
            </p>
            <a href="/Resume.pdf" download className={styles.downloadButton}>
              <Download size={18} />
              Download Resume
            </a>
          </div>

          <div className={styles.rightSection}>
            <h3>My Profiles</h3>
            <ul className={styles.profileList}>
              <li>
                <Linkedin size={18} />
                <a
                  href="https://www.linkedin.com/in/prathamesh-jadhav-553a4b323"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <ChefHat size={18} />
                <a
                  href="https://www.codechef.com/users/pra_231101126"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  CodeChef
                </a>
              </li>
              <li>
                <Github size={18} />
                <a
                  href="https://github.com/Pratham07-ui"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};
