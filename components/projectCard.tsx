import React, { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./projectCard.module.css";

type ProjectCardProps = {
  projectInfo: string;
  projectImg: string;
  projectUrl: string;
};

const ProjectCard = ({
  projectInfo,
  projectImg,
  projectUrl,
}: ProjectCardProps) => {
  return (
    <>
      <Link href={projectUrl}>
        <div className={styles.projectCard}>
          <img className={styles.projectImage} src={projectImg} />
          <p className={styles.projectInfo}>{projectInfo}</p>
        </div>
      </Link>
    </>
  );
};

export default ProjectCard;
