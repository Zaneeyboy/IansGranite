//jshint esversion: 6

import Link from "next/link";
import styles from "../styles/components/Navbar.module.css";
const Navbar = () => {
  return (
    <>
      <nav className={styles.navbar}>
        <div>
          <Link href="/">
            <a className={styles.navbar_brand}>Ian&apos;s Granite</a>
          </Link>
        </div>
        <div className={styles.links}>
          <Link href="/">
            <a className={styles.navbar_link}>Home</a>
          </Link>
          <Link href="/showroom">
            <a className={styles.navbar_link}>Showroom</a>
          </Link>
          <Link href="/contact">
            <a className={styles.navbar_link}>Contact Us</a>
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
