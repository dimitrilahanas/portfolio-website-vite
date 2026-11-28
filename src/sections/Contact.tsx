import styles from './Contact.module.css';
import meSquare from "../assets/me-square.png";

function Contact() {
    return <section id="contact" className={styles.Contact}>
        <p className={`${styles.subHeading} accent`}>GET IN TOUCH</p>
        <main className={styles.contactInfo}>
            <section className={styles.leftContent}>
                <h2>Let's build something<span className="heading-dot accent">.</span></h2>
                <div className={styles.emailContact}>
                    <span><a href="">hello@dimitrios.studio ↗</a></span>
                 </div>
            
                <div className={styles.contactList}>
                    <span><a href="www.linkedin.com/in/dimitrios-lahanas">LinkedIn ↗</a></span>
                    <span><a href="https://github.com/dimitrilahanas">Github ↗</a></span>
                    <span><a href="https://www.instagram.com/dimitrios.studio?utm_source=ig_web_button_share_sheet&dmpr=ZDNlZDc0MzIxNw==">Instagram ↗</a></span>
                </div>
            </section>

            <aside className={styles.rightContent}>
                <img src={meSquare} />
            </aside>
        </main>
    </section>
}

export default Contact;