import projects from '../data/projects';
import styles from './Projects.module.css';
import ProjectCard from '../components/ProjectCard';

const [featuredProject, ...others] = projects;

function Projects() {
    return <section id="projects" className={styles.Projects}>
        <p className={`${styles.subHeading} accent`}>SELECTED WORK</p>
        <main className={styles.projectsInfo}>
            <h2>Projects<span className="heading-dot accent">.</span></h2>

            <section className={styles.featuredProjects}>
                <ProjectCard project={featuredProject} featured />
            </section>
            
            <section className={styles.projectsDisplay}>
                {others.map((project) => (
                    <ProjectCard key={project.slug} project={project}/>
                ))}
            </section>
        </main>
    </section>
}

export default Projects;