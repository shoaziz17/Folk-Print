import styles from "../styles/Header.module.scss";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
function Header() {
  return (
    <header className={styles.header}>
      <img
        className={styles.bannerImg}
        src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
        alt="banner-img"
      />
      <div className={styles.darker}>
        <nav className={styles.navbar}>
          <img src="https://i.postimg.cc/QdzFKJzz/001.png" alt="logo" />
            <div className={styles.socialIcon}>
              <div>
                <FaTelegram className="w-10 h-10 cursor-pointer active:scale-95 duration-200" />
              </div>
              <div>
                <FaFacebook className="w-10 h-10 cursor-pointer active:scale-95 duration-200" />
              </div>
              <div>
                <FaInstagram className="w-10 h-10 cursor-pointer active:scale-95 duration-200" />
              </div>
              <div>
                <a className="bg-white rounded-[50px] py-3 px-5 text-black font-bold " href="tel:+998 33 338 86 08">+998 33 338 86 08</a>
              </div>
            </div>
        </nav>
        <div className={styles.textSection}>
            <h1>Фабрика принтов №1 в Узбекистане.</h1>
            <h2>Все виды изготовление принтов с вашим логотипом</h2>
        </div>
        <div className={styles.buttons}>
          <h1 className="bg-yellow-400 py-3 px-5 rounded-[50px]  text-lg font-semibold hover:cursor-pointer hover:bg-yellow-300 active:scale-95 duration-200">Наш каталог</h1>
          <h1 className="text-white text-lg border-2 py-3 px-5 rounded-[50px] font-semibold hover:cursor-pointer hover:bg-white hover:text-black active:scale-95 duration-200">Наши контакты</h1>
        </div>
      </div>
    </header>
  );
}

export default Header;
