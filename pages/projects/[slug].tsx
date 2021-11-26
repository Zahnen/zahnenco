import Link from "next/link";
import Layout from "../../components/Layout/layout";
import { Client } from "../../utils/prismicHelpers";
import Prismic from "@prismicio/client";

const ProjectPage = ({ project }) => {
  const { name, logo, description, repourl, deployurl, demo_images } =
    project.data || null;
  console.log(description);
  return (
    <Layout>
      <h1>{name[0].text}</h1>
      <p>{description[0].text}</p>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
};

export default ProjectPage;

export async function getStaticPaths() {
  const data = await Client().query(
    Prismic.Predicates.at("document.type", "project")
  );
  const projects = data.results;
  const paths = projects.map((project) => ({
    params: { slug: project.slugs[0] },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const document = await Client().getByUID("project", `${params.slug}`, null);

  if (!document) {
    return {
      notFound: true,
    };
  } else {
    return {
      props: { project: document },
    };
  }
}
