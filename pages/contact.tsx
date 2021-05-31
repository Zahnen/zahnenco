import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Navbar from "../components/navbar";
import ProjectCard from "../components/projectCard";
import utilStyles from "../styles/utils.module.css";

export default function Contact() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
      <section className={utilStyles.headingMd}>
        <p>Contact me</p>
      </section>
    </Layout>
  );
}
