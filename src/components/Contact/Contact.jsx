import React from "react";
import styles from "./Contact.module.css";
import { Phone, Mail, MapPin } from "lucide-react";

export const Contact = () => {
  return (
    <section className={styles.container} id="contact">
      <h2 className={styles.title}>Contact</h2>
      <div className={styles.contactDetails}>
        <div className={styles.detailItem}>
          <Phone size={28} />
          <span>+91 9011257897</span>
        </div>
        <div className={styles.detailItem}>
          <Mail size={28} />
          <span>pratham9011257897@gmail.com</span>
        </div>
        <div className={styles.detailItem}>
          <MapPin size={28} />
          <span>Shirpur, Maharashtra</span>
        </div>
      </div>
    </section>
  );
};
