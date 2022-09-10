import styles from "../styles/Banner.module.scss"
function Banner() {
    return (
        <div className={styles.banner}>
            <img src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600" alt="banner image" />
            <div className={styles.darker}>
                <h1>Custom printed shirts with your own logo!</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis, sapiente sed. Tenetur soluta cum dignissimos!</p>
                <div className={styles.btnContent}>
                    <button className={styles.btn}>Show catalogue</button>
                </div>
            </div>
        </div>
    )
}

export default Banner