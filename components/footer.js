import styles from "../styles/Footer.module.scss";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
function Footer() {
  return (
    <>
      <div className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.content}>
            <div className={styles.logo}>
              <h1 className={styles.h1}>
                <a href={'#logo'}>Folkprint</a>
              </h1>
              <div className={styles.socialIcons}>
                <div><FaTelegram /></div>
                <div><FaFacebook /></div>
                <div><FaInstagram /></div>
              </div>
            </div>
            <div className={styles.address}>
              <p>Адрес: ул. Фуркат 1, Тошкент, Узбекистан. Ориентир: Боги-Чинор кафе</p>
              <a href="#">Показать на карте</a>
            </div>
            <div className={styles.contact}>
              <h1>Наш номер: <span>+998 33 338 86 08</span></h1>
              <h1>Присылайте заявки на <span>folkprint.uz</span></h1>
              <h1>Разработан в <span>Folk Print Group</span></h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Footer;
