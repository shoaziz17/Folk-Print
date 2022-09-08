import Footer from "../footer"
import Header from "../header"
import styles from "./Layout.module.scss"

function Layout(props) {
    return (
        <div className={styles.parent}>
            <Header />
            <div className={styles.children}>{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout