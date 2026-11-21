import type { Project } from '../types/project.ts';
import styles from './ProjectCard.module.css';

function ProjectCard({ project, featured }: {project: Project, featured?: boolean}) {
    return <section className={`${styles.ProjectCard} ${featured ? styles.featured : ''}`}>
        <img src={`/projects/${project.slug}/cover.png`}/>

        <section className={styles.projectCardContent}>
            <h5>{project.title}<span className="accent">.</span></h5>
            <p>{project.description}</p>
            <a href={project.githubRepo}>GitHub Repository</a><br/>
            <section className={styles.techStack}>
                {project.techStack.map((tech) => (
                    <span className={styles.tech}>{tech}</span>
                ))}
            </section>
        </section>
    </section>
}

export default ProjectCard;