import styles from "./Navbar.module.scss";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
function NavigationBar() {
  const [open, setOpen] = useState(false);
  function openMenu() {
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <>
      {/* // Desktop navbar */}
      <nav className={styles.navbar} id="logo">
        <div className={styles.container}>
          <h1>Folkprint</h1>
          <ul>
            <li>Poligrafiya</li>
            <li>Tashqi reklama</li>
            <li>Akssesuarlar</li>
            <li>Bizning ishlar</li>
          </ul>
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
        </div>
      </nav>
      {/* // Desktop navbar */}
      {/* // Mobile navbar  */}
      <nav className={styles.mobileNavbar}>
        <div className={styles.container}>
          <h1>Folkprint</h1>
          <AiOutlineMenu
            onClick={openMenu}
            style={{ display: open ? "none" : "block" }}
            className="h-8 w-8 cursor-pointer duration-200 active:scale-95 text-yellow-300 animate__animated animate__rotateIn"
          />
          <AiOutlineClose
            onClick={openMenu}
            style={{ display: open ? "block" : "none" }}
            className="h-8 w-8 cursor-pointer duration-200 active:scale-95 text-yellow-300 animate__animated animate__rotateIn"
          />
        </div>
        <div
          style={{ display: open ? "block" : "none" }}
          className="animate__animated animate__fadeInDown h-full"
        >
          <div
            style={{ display: open ? "block" : "none" }}
            className="py-5 bg-zinc-900 hidden"
          >
            <ul>
              <li>Poligrafiya</li>
              <li>Tashqi reklama</li>
              <li>Akssesuarlar</li>
              <li>Bizning ishlar</li>
            </ul>
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
          </div>
        </div>
      </nav>
      {/* // Mobile navbar  */}
    </>
  );
}

export default NavigationBar;
