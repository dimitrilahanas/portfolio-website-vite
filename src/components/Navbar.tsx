import styles from './Navbar.module.css';
import longLogo from '../src/assets/logo-longform.png';

function Navbar() {
    return <section className={styles.Navbar}>
        <section className={styles.stickyNav}>
            <a href="#"><img className={styles.longLogo} src={longLogo}/></a>

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