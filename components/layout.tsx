import Head from "next/head";
import styles from "./layout.module.css";
import utilStyles from "../styles/utils.module.css";
import Link from "next/link";
import Navbar from "../components/navbar";

const name = "Zahnen Garner";
export const siteTitle = "Zahnen Garner's Portfolio Site";

export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="Zahnen Garner" content="Zahnen Garner's Portfolio Site" />
        <meta
          property="og:image"
          content={`https://og-image.vercel.app/${encodeURI(
            siteTitle
          )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
        />
        <meta name="og:title" content={siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <header className={styles.header}>
        {home ? (
          <>
            <object
              type="image/svg+xml"
              data="/images/connect.svg"
              height={144}
              width={144}
            />
            <h1 className={utilStyles.heading2Xl}>
              I'm Zahnen and blah blah blah
            </h1>
          </>
        ) : (
          <>
            <object
              type="image/svg+xml"
              data="/images/connect.svg"
              height={144}
              width={144}
            />
            <h2 className={utilStyles.headingLg}>
              <Link href="/">
                <a className={utilStyles.colorInherit}>{name}</a>
              </Link>
            </h2>
          </>
        )}
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Navbar />
          <Link href="/">
            <a>← Back to home</a>
          </Link>
        </div>
      )}
    </div>
  );
}
