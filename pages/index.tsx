import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import Navbar from "../components/navbar";
import ProjectCard from "../components/projectCard";
import utilStyles from "../styles/utils.module.css";

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <Navbar />
      <section className={utilStyles.headingMd}>
        <p>I'm Zahnen and I'm a baby developer.</p>
      </section>
      <ProjectCard projectInfo="Guestly" projectURL="/images/GuestlyLogo.svg" />
      <ProjectCard
        projectInfo="Sous Chef"
        projectURL="/images/SousChefLogo.svg"
      />
      <ProjectCard projectInfo="Paro" projectURL="/images/ParoLogo.svg" />
    </Layout>
  );
}
