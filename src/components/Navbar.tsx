import styles from './Navbar.module.css';

function Navbar() {
    return <section className={styles.Navbar}>
        <section className={styles.stickyNav}>
            <img className={styles.longLogo} src="src/assets/logo-longform.png"/>

            <nav>
                <ul className={styles.navLinks}>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </section>
    </section>
}

export default Navbar;