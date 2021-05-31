import React, { useState, useEffect } from "react";
import Link from "next/link";

const NavBar = () => {
  const [header, setHeader] = useState("nav-bar");

  const listenScrollEvent = () => {
    console.log(window.scrollY);
    if (window.scrollY < 300) {
      return setHeader("nav-bar");
    } else if (window.scrollY > 300) {
      return setHeader("nav-bar hidden");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", listenScrollEvent);

    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, []);

  return (
    <>
      <div className={header}>
        <ul className="nav-list">
          <Link href="/">
            <li className="nav-item">
              <a className="nav-a">
                <b>About</b>
              </a>
            </li>
          </Link>
          <Link href="/projects">
            <li className="nav-item">
              <a className="nav-a">
                <b>Projects</b>
              </a>
            </li>
          </Link>
          <Link href="/contact">
            <li className="nav-item">
              <a className="nav-a">
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
