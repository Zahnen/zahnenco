import Layout from "../../components/Layout/layout";
import ProjectCard from "../../components/ProjectCard/projectCard";
import { Client } from "../../utils/prismicHelpers";
import Prismic from "@prismicio/client";
import styles from "./projectpage.module.css";

export default function Projects({ projects }) {
  return (
    <Layout>
      <div className={styles.projectGrid}>
        {projects.map((project) => (
          <ProjectCard src={project.data.logo.url} slug={project.slugs[0]} />
        ))}
      </div>
    </Layout>
  );
}

export async function getStaticProps(context) {
  const document = await Client().query(
    Prismic.Predicates.at("document.type", "project")
  );

  if (!document) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: { projects: document.results },
    };
  }
}
