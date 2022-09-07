import Footer from "../footer"
import Header from "../header"

function Layout(props) {
    return (
        <div>
            <Header />
            <div>{props.children}</div>
            <Footer />
        </div>
    )
}

export default Layout