import styles from "../styles/Banner.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation, Autoplay } from "swiper";
function Banner() {
  return (
    <div>
      
    </div>
    // <div className={styles.banner}>
    //   <Swiper
    //     navigation={false}
    //     loop={true}
    //     pagination={{
    //       dynamicBullets: true,
    //     }}
    //     autoplay={{
    //       delay: 3000,
    //       disableOnInteraction: false,
    //     }}
    //     modules={[Pagination, Navigation, Autoplay]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>
    //       <img
    //         src="https://images.pexels.com/photos/996329/pexels-photo-996329.jpeg?auto=compress&cs=tinysrgb&w=600"
    //         alt="banner image"
    //       />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img
    //         src="https://i.postimg.cc/prVJ7J9L/2836242.jpg"
    //         alt="banner image"
    //       />
    //     </SwiperSlide>
    //     <SwiperSlide>
    //       <img
    //         src="https://images.unsplash.com/photo-1529720317453-c8da503f2051?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
    //         alt="banner image"
    //       />
    //     </SwiperSlide>
    //   </Swiper>
    //   <div className={styles.darker}>
    //   <Swiper
    //     navigation={false}
    //     loop={true}
    //     // pagination={{
    //     //   dynamicBullets: false,
    //     // }}
    //     autoplay={{
    //       delay: 3000,
    //       disableOnInteraction: false,
    //     }}
    //     modules={[ Navigation, Autoplay]}
    //     className="mySwiper"
    //   >
    //     <SwiperSlide>
    //     <h1>1 Custom printed shirts with your own logo!</h1>
    //     <p>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
    //       sapiente sed. Tenetur soluta cum dignissimos!
    //     </p>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //     <h1>2 Custom printed shirts with your own logo!</h1>
    //     <p>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
    //       sapiente sed. Tenetur soluta cum dignissimos!
    //     </p>
    //     </SwiperSlide>
    //     <SwiperSlide>
    //     <h1>3 Custom printed shirts with your own logo!</h1>
    //     <p>
    //       Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis,
    //       sapiente sed. Tenetur soluta cum dignissimos!
    //     </p>
    //     </SwiperSlide>
    //   </Swiper>
        
    //     {/* <div className={styles.btnContent}>
    //       <button className={styles.btn}>Show catalogue</button>
    //     </div> */}
    //   </div>
    // </div>
  );
}

export default Banner;
