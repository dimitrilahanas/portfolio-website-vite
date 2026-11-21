import type { Project } from '../types/project.ts';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }: {project: Project}) {
    return <section className={styles.ProjectCard}>
        <section className={styles.projectCardContent}>
            <div className={styles.coverImage}><img src={`/projects/${project.slug}/cover.png`}/></div>
            <h4>{project.title}</h4>
        </section>
    </section>
}

export default ProjectCard;