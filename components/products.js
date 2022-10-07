import styles from "../styles/Products.module.scss";
import productsJson from "./APi/products.json";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { BsXLg } from "react-icons/bs";
import { useState } from "react";
function Products() {
  const [open, setOpen] = useState(false);
  const products = productsJson.map((product) => (
    <div className={styles.card}>
      <div className={styles.imgDiv}>
        <img src={product.img} className={styles.cardImg} alt="product-img" />
      </div>
      <div className={styles.text}>
        <h1>{product.title}</h1>
        <p>{product.describtion}</p>
      </div>
    </div>
  ));
  function openVisitCard() {
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <>
      <div className={styles.main} id="portfolio">
        <div className={styles.cardsContent}>{products}</div>
        <div
          style={{ display: open ? "block" : "none" }}
          className="secondVisitCard flex flex-col items-center justify-center bg-white w-full h-[500px] absolute bottom-0 animate__animated animate__fadeInUp my-auto p-12"
        >
          <div className="flex justify-end m-">
            <BsXLg
              onClick={openVisitCard}
              style={{ display: open ? true : false }}
              className="h-8 w-8 text-black hover:cursor-pointer active:scale-95 duration-200 "
            />
          </div>
          <div className="flex justify-center">
            <h1 className="font-bold text-4xl text-center">
              Which one is convenient for you?
            </h1>
          </div>
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
          <div className="space-y-8 mt-5 md:mt-10 lg:mt-14">
            <a href="tel:+998 33 338 86 08">
              <h2 className="hover:underline hover:cursor-pointer active:sclae-95 text-black text-center text-[30px] md:text-4xl lg:text-4xl font-bold">
                +998 33 338 86 08
              </h2>
            </a>
            <a href="mailto:folkprint@gmail.com">
              <h2 className="hover:underline hover:cursor-pointer active:sclae-95 text-black text-center text-[28px] md:text-4xl lg:text-4xl font-bold">
                folkprint@gmail.com
              </h2>
            </a>
          </div>
        </div>
        <div className="flex justify-center items-center h-14   mx-auto py-10 ">
          <button
            className="w-[200px] mx-auto bg-yellow-400 py-3.5 px-5.5 text-white font-bold rounded-md"
            onClick={openVisitCard}
            type="submit"
          >
            Order Now
          </button>
        </div>
      </div>
    </>
  );
}

export default Products;
