import styles from './About.module.css';

function About() {
    return <section id="about" className={styles.About}>
        <main className={styles.aboutInfo}>
            <aside className={styles.leftContent}>
                <p className={`${styles.subHeading} accent`}>ABOUT ME</p>
                <img src="src/assets/me-square.png"/>
            </aside>

            <section className={styles.rightContent}>
                <h2>More</h2>
                <h2>Then</h2>
                <h2>Just</h2>
                <h2 className="accent">Code<span className="heading-dot">.</span></h2>
                <br></br>
                <p>I’m Dimitrios — a Computer Science student in Sydney turning ideas into real products. Code, design, photography: different tools, same goal of making things that feel right.</p>
                <br></br>
                <p>I’m drawn to the whole process, from sketching out an idea to shipping something people can actually use. Most of my time goes into building mobile apps and websites, obsessing over the small details that make an interface feel effortless. When I step away from the screen, I’m usually out with a camera, chasing cars and street scenes.</p>
                <br></br>
                <p>Dimitrios Studio is where it all comes together.</p>
            </section>
        </main>
    </section>
}

export default About;