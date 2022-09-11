import styles from "../styles/About.module.scss";
import { HiUserGroup } from "react-icons/hi";

function About() {
    return (
        <div className={styles.content}>
            <div className={styles.container}>
                <h1 className={styles.heading}>Why we Folk Print?</h1>
                <div className={styles.main}>
                    <div className={styles.box}>
                        <HiUserGroup className={styles.icon} />
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, placeat?</p>
                    </div>
                    <div className={styles.box}>
                        <HiUserGroup className={styles.icon} />
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, placeat?</p>
                    </div>
                    <div className={styles.box}>
                        <HiUserGroup className={styles.icon} />
                        <h1>Title</h1>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Cupiditate, placeat?</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About