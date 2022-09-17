import styles from "../styles/Iframe.module.scss";
function Iframe() {
    return (
        <div className={styles.main}>
            <div className={styles.container}>
                <h1>Location</h1>
                <iframe className={styles.img} src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5996.207078635381!2d69.225859!3d41.284851!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xa239564c42efca7a!2zNDHCsDE3JzA1LjUiTiA2OcKwMTMnMzMuMSJF!5e0!3m2!1sru!2s!4v1663390611616!5m2!1sru!2s" width="600" height="450" style={{ border: '0' }} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    )
}

export default Iframe