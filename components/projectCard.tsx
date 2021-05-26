import React, { useState, useEffect } from "react";
import styles from "./projectCard.module.css";

type ProjectCardProps = {
  projectInfo: string;
  projectURL: string;
};

const ProjectCard = ({ projectURL, projectInfo }: ProjectCardProps) => {
  return (
    <>
      <div className={styles.projectCard}>
        <img className={styles.projectImage} src={projectURL} />
        <p className={styles.projectInfo}>{projectInfo}</p>
      </div>
    </>
  );
};

export default ProjectCard;
