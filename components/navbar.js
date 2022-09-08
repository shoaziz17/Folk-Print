import styles from "./Navbar.module.scss";
import { FaTelegram } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaFacebook } from "react-icons/fa";
import { AiOutlineMenu } from "react-icons/ai";
function NavigationBar() {
  return (
    <>
      {/* // Desktop navbar */}
      <nav className={styles.navbar}>
        <div className={styles.container}>
          <h1>Folkprint</h1>
          <ul>
            <li>Poligrafiya</li>
            <li>Tashqi reklama</li>
            <li>Akssesuarlar</li>
            <li>Bizning ishlar</li>
          </ul>
          <div className={styles.socialIcon}>
            <FaTelegram />
            <RiInstagramFill />
            <FaFacebook />
          </div>
        </div>
      </nav>
      {/* // Desktop navbar */}
      {/* // Mobile navbar  */}
      <nav className={styles.mobileNavbar}>
        <div className={styles.container}>
          <h1>Folkprint</h1>
          <AiOutlineMenu className="h-8 w-8 cursor-pointer duration-200 active:scale-95" />
        </div>
        <div>
            <ul>
              <li>Poligrafiya</li>
              <li>Tashqi reklama</li>
              <li>Akssesuarlar</li>
              <li>Bizning ishlar</li>
            </ul>
            <div className={styles.socialIcon}>
              <FaTelegram />
              <RiInstagramFill />
              <FaFacebook />
            </div>
          </div>
      </nav>
      {/* // Mobile navbar  */}
    </>
  );
}

export default NavigationBar;
