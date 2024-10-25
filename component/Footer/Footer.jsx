import React from "react";
import Image from "next/image";
import styles from "./footer.module.css";

export const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2024 Remi&Co. All rights reserved.</div>
      <div className={styles.social}>
        <img src="/1.png" width={20} height={20} className={styles.icon} />
        <Image src="/2.png" width={20} height={20} className={styles.icon} alt="Icon 2" />
        <Image src="/3.png" width={20} height={20} className={styles.icon} alt="Icon 3" />
        <Image src="/4.png" width={20} height={20} className={styles.icon} alt="Icon 4" />
      </div>
    </div>
  );
};

export default Footer;
