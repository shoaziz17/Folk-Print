import styles from "../styles/About.module.scss";
import { HiUserGroup } from "react-icons/hi";

function About() {
    return (
        <div className={styles.content} id="about">
            <div className={styles.container}>
                <h1 className={styles.heading}>Зачем Folk Print?</h1>
                <div className={styles.main}>
                    <div className={styles.box}>
                        <HiUserGroup className={styles.icon} />
                        <h1> Лучшие экспортные материалы</h1>
                    </div>
                    <div className={styles.box}>
                        <HiUserGroup className={styles.icon} />
                        <h1> Выгодные цены</h1>
                    </div>
                    <div className={styles.box}>
                        <HiUserGroup className={styles.icon} />
                        <h1> Быстрый срок изготовления</h1>
                    </div>
                    <div className={styles.box}>
                        <HiUserGroup className={styles.icon} />
                        <h1> Высокое качество</h1>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About