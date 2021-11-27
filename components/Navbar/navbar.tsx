import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.scss";

const NavBar = () => {
  const [header, setHeader] = useState(true);

  const listenScrollEvent = () => {
    if (window.scrollY < 200) {
      return setHeader(true);
    } else if (window.scrollY > 200) {
      return setHeader(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <div
        className={
          header == true ? styles.navbar : `${styles.navbar} ${styles.hidden}`
        }
      >
        <ul className={styles.navlist}>
          <Link href="/">
            <li className={styles.navitem}>
              <a className={styles.navlink}>About</a>
            </li>
          </Link>
          <Link href="/projects">
            <li className={styles.navitem}>
              <a className={styles.navlink}>Projects</a>
            </li>
          </Link>
          <Link href="/contact">
            <li className={styles.navitem}>
              <a className={styles.navlink}>Contact</a>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
