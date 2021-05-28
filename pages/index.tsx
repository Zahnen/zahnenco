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
        <p>and I'm a developer.</p>
      </section>
      <ProjectCard
        projectInfo="Curo is a project management tool for crafters on the cusp of entrepreneurship. Curo offers kanban-style task management, cost-tracking, and financial analysis tools to help users refine their process and stay organized."
        projectImg="/images/CuroLogo.svg"
        projectUrl="/projects/curo"
      />
      <ProjectCard
        projectInfo="Guestly is a customer relationship management tool designed for the hospitality industry. Guestly allows hotel staff to manage records of guest stays, track revenue performance, and sort through historical guest and reservation data."
        projectImg="/images/GuestlyLogo.svg"
        projectUrl="/projects/guestly"
      />
      <ProjectCard
        projectInfo="Sous Chef simplifies the art of making food. Sous Chef is a straightforward recipe manager/HTML scraper that helps declutter online recipes & simplify the process of keeping them."
        projectImg="/images/SousChefLogo.svg"
        projectUrl="/projects/souschef"
      />
      <ProjectCard
        projectInfo="Paro exists to bridge the preferential rift between analog and digital listening. Paro allows users to discover new music digitally to connect with physically"
        projectImg="/images/ParoLogo.svg"
        projectUrl="/projects/paro"
      />
    </Layout>
  );
}
