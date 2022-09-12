import styles from "../styles/Products.module.scss";
import productsJson from "./APi/products.json";
function Products() {
    
    const products = productsJson.map((product) => {
        return (
            <div className={styles.card}>
                <div className={styles.cardImg}>
                    {product.img}
                </div>
                <div className={styles.text}>
                    <h1>{product.title}</h1>
                    <p>{product.describtion}</p>
                </div>
            </div>
        )
    })

    return (
        <div className={styles.main}>
            <img src={"https://media.istockphoto.com/photos/blank-front-real-black-chalkboard-background-texture-in-college-for-picture-id1201544779?b=1&k=20&m=1201544779&s=612x612&w=0&h=y6mp3OxUmB_Mh4QavW99g7NrUJqR7F05v8uBQ2_TqdI="} alt="background image" />
            <div className={styles.cardsContent}>
                {products}
            </div>
        </div>
    )
}

export default Products