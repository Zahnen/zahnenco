import Layout from "../components/Layout/layout";

export default function Home() {
  return (
    <Layout>
      <div className="about">
        <div className="name-wrapper">
          <div className="name-container">
            <h1>Zahnen</h1>
            <h1>Garner</h1>
          </div>
        </div>
        <p>
          is a web developer based in Portland, Oregon. He enjoys working
          collaboratively to bring ideas to life in digital spaces. In blending
          development skills with a background in marketing and hospitality, he
          hopes to use his talents to deliver best-in-class work in
          client-focused environments.
        </p>
      </div>
      <div className="project-grid">
        <div className="project-tile">
          <p>Lalalal</p>
        </div>
      </div>
    </Layout>
  );
}
