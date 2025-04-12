import React from "react";
import styles from "./Projects.module.css";

// Import images from your assets folder
import project_1 from "../../assets/projectss/project_1.png"
import project_2 from "../../assets/projectss/project_2.png"

const projects = [
  {
    title: "Akatsuki Project Hub",
    image: project_1,
    description: "A project selling platform of Akatsuki Coding Club",
    technologies: ["React.js", "Typescript", "tailwind CSS"],
    demoLink: "https://trade-portal.vercel.app/",
    sourceLink: "https://github.com/Pratham07-ui/TradPortal.git",
  },
  {
    title: "Fitness Tracker Pro",
    image: project_2,
    description: "A website to log workouts, set fitness goals, and track progress with interactive charts.",
    technologies: ["React.js", "Typescript", "Tailwind CSS"],
    demoLink: "#",
    sourceLink: "https://github.com/prashantpatil12345/athletrack-smart.git",
  },
  // {
  //   title: "Project C",
  //   image: projectCImg,
  //   description: "This is a project made to learn the latest languages by building an app.",
  //   technologies: ["React", "Express", "Node"],
  //   demoLink: "#",
  //   sourceLink: "#",
  // },
];

export const Projects = () => {
  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projectsGrid}>
        {projects.map((project, index) => (
          <div className={styles.card} key={index}>
            <img
              src={project.image}
              alt={`Image of ${project.title}`}
              className={styles.image}
            />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className={styles.techStack}>
              {project.technologies.map((tech, i) => (
                <span key={i} className={styles.techBadge}>{tech}</span>
              ))}
            </div>
            <div className={styles.buttons}>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer" className={styles.demoBtn}>Demo</a>
              <a href={project.sourceLink} target="_blank" rel="noopener noreferrer" className={styles.sourceBtn}>Source</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
