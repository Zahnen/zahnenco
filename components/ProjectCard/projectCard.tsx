import Link from "next/link";
import Image from "next/image";
import styles from "./projectCard.module.css";

type ProjectCardProps = {
  src: string;
  slug: string;
};

const ProjectCard = ({ src, slug }: ProjectCardProps) => {
  return (
    <>
      <Link href={`/projects/${slug}`}>
        <div className={styles.projectCard}>
          <Image src={src} width={200} height={200} />
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
