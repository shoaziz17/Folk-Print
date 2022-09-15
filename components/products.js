import styles from "../styles/Products.module.scss";
import productsJson from "./APi/products.json";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";
function Products() {
  const [open, setOpen] = useState(false);
  const products = productsJson.map((product) => (
    <div className={styles.card}>
      <img src={product.img} className={styles.cardImg} alt="product-img" />
      <div className={styles.text}>
        <h1>{product.title}</h1>
        <p>{product.describtion}</p>
      </div>
      <button onClick={openVisitCard} type="submit">
        Order Now
      </button>
    </div>
  ));
  function openVisitCard() {
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <>
      <div className={styles.main}>
        <div className={styles.cardsContent}>{products}</div>
        <div
          style={{ display: open ? "none" : "block" }}
          className={styles.visitCard}
        >
          <div className="w-[50%] h-[500px] py-[20px] px-[40px] mx-auto bg-white animate__animated animate__zoomIn">
            <span className="flex justify-end">
              <BsXLg
                onClick={openVisitCard}
                style={{ display: open ? true : false }}
                className=" h-8 w-8 text-black hover:cursor-pointer active:scale-95 duration-200 "
              />
            </span>
            <h1>Which one is convenient for you?</h1>
            <div className={styles.socialIcon}>
              <div>
                <FaTelegram />
              </div>
              <div>
                <FaFacebook />
              </div>
              <div>
                <FaInstagram />
              </div>
            </div>
            <div className="space-y-8">
              <h2 className="hover:underline hover:cursor-pointer active:sclae-95 text-black text-center text-4xl font-bold">
                +998 33 338 86 08
              </h2>
              <h2 className="hover:underline hover:cursor-pointer active:sclae-95 text-black text-center text-4xl font-bold">
                folkprint@gmail.com
              </h2>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Products;
