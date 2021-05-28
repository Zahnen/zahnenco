import Link from "next/link";
import Layout from "../../components/layout";
import ProjectCard from "../../components/projectCard";

export default function Projects() {
  return (
    <Layout>
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
