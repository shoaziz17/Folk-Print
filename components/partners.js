import partnersJson from "./APi/partners.json";
import styles from "../styles/Partners.module.scss";
function Partners() {

    const partners = partnersJson.map((partner) => {
        return (
            <div className={styles.image}>
                <img src={partner.img} alt="partner img" />
            </div>
        )
    })

    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Our Partners</h1>
                <div className={styles.content}>
                    {partners}
                </div>
            </div>
        </div>
    )
}

export default Partners