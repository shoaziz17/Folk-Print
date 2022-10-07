import styles from "../styles/Navbar.module.scss";
import { FaTelegram, FaFacebook, FaInstagram } from "react-icons/fa";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import { useState } from "react";
import Image from 'next/image'
import Link from "next/link";
function NavigationBar() {
  const [open, setOpen] = useState(false);
  function openMenu() {
    open ? setOpen(false) : setOpen(true);
  }
  return (
    <>
      {/*desktop navbar*/}
      <nav className={styles.navbar} id="logo">
        <div className={styles.container}>
        {/* <img className={styles.logoImg} src="https://i.postimg.cc/rsHQKPnd/001.png" alt="logo"/> */}
        <Image src={"/images/logo.png"} alt={"logo"} width={"100px"} height={"50px"}/>
          <ul>
            <li> <Link href={"#about"}>О нас</Link></li>
            <li> <Link href={"#portfolio"}>Портфолио</Link></li>
            <li> <Link href={"#partners"}>Партнеры</Link></li>
            <li> <Link href={"#location"}>Локация</Link></li>
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
      {/* // Mobile navbar  */}
      <nav className={styles.mobileNavbar}>
        <div className={styles.container}>
        <img className={styles.logoImg} src="https://i.postimg.cc/rsHQKPnd/001.png" alt="logo"/>
          <AiOutlineMenu
            onClick={openMenu}
            style={{ display: open ? "none" : "block" }}
            className="h-10 w-10 | cursor-pointer duration-200 active:scale-95 text-yellow-300 animate__animated animate__rotateIn"
          />
          <AiOutlineClose
            onClick={openMenu}
            style={{ display: open ? "block" : "none" }}
            className="h-10 w-10 cursor-pointer duration-200 active:scale-95 text-yellow-300 animate__animated animate__rotateIn"
          />
        </div>
        <div
          style={{ display: open ? "block" : "none" }}
          className="animate__animated animate__fadeInDown h-full absolute z-20 w-full"
        >
          <div
            style={{ display: open ? "block" : "none" }}
            className="py-5 bg-zinc-900 hidden h-screen"
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
