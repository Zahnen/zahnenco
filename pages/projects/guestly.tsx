import Link from "next/link";
import Layout from "../../components/layout";

export default function Guestly() {
  return (
    <Layout>
      <h1>This is a page for my Guestly application</h1>
      <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2>
    </Layout>
  );
}
