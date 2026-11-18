import styles from './Hero.module.css';

function Hero() {
    return <section className={styles.hero}>
        <main className={styles.heroInfo}>
            <section className="headings">
                <h1>idea<span className="heading-dot">.</span></h1>
                <h1>plan<span className="heading-dot">.</span></h1>
                <h1>design<span className="heading-dot">.</span></h1>
                <h1 className="accent">build<span className="heading-dot">.</span></h1>
            </section>
            <aside><p>A creative studio focused<br/> on building digital products,<br/> from concept to code.</p></aside>
        </main>
    </section>
}

export default Hero;