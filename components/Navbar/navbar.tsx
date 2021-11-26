import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./navbar.module.css";

const NavBar = () => {
  const [header, setHeader] = useState("navbar");

  const listenScrollEvent = () => {
    if (window.scrollY < 300) {
      return setHeader("navbar");
    } else if (window.scrollY > 300) {
      return setHeader("navbar hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <div className={header == "navbar" ? styles.navbar : styles.navbarhidden}>
        <ul className={styles.navlist}>
          <Link href="/">
            <li className={styles.navitem}>
              <a className={styles.navlink}>
                <b>About</b>
              </a>
            </li>
          </Link>
          <Link href="/projects">
            <li className={styles.navitem}>
              <a className={styles.navlink}>
                <b>Projects</b>
              </a>
            </li>
          </Link>
          <Link href="/contact">
            <li className={styles.navitem}>
              <a className={styles.navlink}>
                <b>Contact</b>
              </a>
            </li>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default NavBar;
