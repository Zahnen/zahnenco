import Head from "next/head";
import styles from "./layout.module.scss";
import Navbar from "../Navbar/navbar";

export const siteTitle = "Zahnen Garner - Web Developer";

export default function Layout({ children }) {
  return (
    <>
      <Head>
        <link rel="icon" href="/images/connect.svg" />
        <meta
          name="Zahnen Garner"
          content="Zahnen Garner is a web developer based in Portland, Oregon."
        />
        <meta property="og:image" content="/images/connect.svg/" />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <div className={styles.container}>
        <Navbar />
        <header className={styles.header}>
          <>
            <object
              type="image/svg+xml"
              data="/images/connect.svg"
              height={400}
              width={400}
            />
          </>
        </header>
        <div className={styles.main}>{children}</div>
      </div>
    </>
  );
}
