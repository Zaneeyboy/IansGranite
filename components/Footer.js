import Links from "./Links";
import styles from "../styles/components/Footer.module.css";
import Link from "next/link";
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.navigation}>
        <p className={styles.header}>Navigation</p>
        <Link href="/">
          <a className={styles.navLink}>Home</a>
        </Link>
        <Link href="/showroom">
          <a className={styles.navLink}>Showroom</a>
        </Link>
        <Link href="/projects">
          <a className={styles.navLink}>Projects</a>
        </Link>
        <Link href="/contact">
          <a className={styles.navLink}>Contact Us</a>
        </Link>
      </div>
      <Links />
      <div className={styles.links}>
        <p>©2022 Ian's Granite</p>
        <p className={styles.address}>
          #106 Bejucal Road, Cunupia, Trinidad. W.I.
        </p>
      </div>
    </footer>
  );
};
export default Footer;
