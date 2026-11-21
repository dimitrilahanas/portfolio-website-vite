import type { Project } from '../types/project.ts';
import styles from './ProjectCard.module.css';

function ProjectCard({ project }: {project: Project}) {
    return <section className={styles.ProjectCard}>
        <div className={styles.coverImage}><img src={`/projects/${project.slug}/cover.png`}/></div>
            <section className={styles.projectCardContent}>
                <h4>{project.title}<span className="accent">.</span></h4>
            </section>
    </section>
}

export default ProjectCard;