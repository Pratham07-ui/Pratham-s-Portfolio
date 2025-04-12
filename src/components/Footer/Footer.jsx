import React from "react";
import styles from "./Footer.module.css";
import { Linkedin, Github, Mail } from "lucide-react";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p className={styles.name}>© 2025 Prathamesh Jadhav. All rights reserved.</p>
      <div className={styles.socialIcons}>
        <a
          href="https://www.linkedin.com/in/prathamesh-jadhav-553a4b323"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Linkedin size={24} />
        </a>
        <a
          href="https://github.com/Pratham07-ui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Github size={24} />
        </a>
        <a href="mailto:pratham9011257897@gmail.com">
          <Mail size={24} />
        </a>
      </div>
    </footer>
  );
};
