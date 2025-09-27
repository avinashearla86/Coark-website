import React from "react";
import styles from "../styles/Portfolio.module.css";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import longVideo1 from "../assets/Coark-long1.mp4"; 
import longVideo2 from "../assets/Coark-long2.mp4";
import shortVideo1 from "../assets/Coark-short1.mp4"; 
import shortVideo2 from "../assets/Coark-short2.mp4"; 
import shortVideo3 from "../assets/Coark-short3.mp4";
import carousel1 from "../assets/corousel1.jpg";
import carousel2 from "../assets/corousel2.jpg";
import carousel3 from "../assets/corousel3.jpg";
import carousel4 from "../assets/corousel4.jpg";
import result1 from "../assets/before_after1.jpg";
import result2 from "../assets/before_after2.jpg";

function Portfolio() {
  return (
    <section id="portfolio" className={styles.portfolio}>
      <h2>
        Our<span className={styles.highlight}> Work</span>
      </h2>

      {/* Short-form Videos Carousel */}
      <div className={styles.section}>
        <h3>Short-form Videos</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3} // show 3 by default
          loop
        >
          {[shortVideo2, shortVideo3, shortVideo1].map((video, i) => (
            <SwiperSlide key={i}>
              <video controls muted loop playsInline className={styles.video}>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Long-form Videos Carousel */}
      <div className={styles.section}>
        <h3>Long-form Videos</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1} // show 1 by default
          loop
        >
          {[longVideo2, longVideo1].map((video, i) => (
            <SwiperSlide key={i}>
              <video
                controls
                muted
                loop
                playsInline
                className={`${styles.video} ${styles.longVideo}`} 
              >
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Carousel Posts Section */}
      <div className={styles.section}>
        <h3>Carousel Posts</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={3} // show 3 images by default
          loop
        >
          {[carousel3, carousel2, carousel1,carousel4].map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`Carousel Post ${i + 1}`} className={styles.cimage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Result Images Section */}
      <div className={styles.section}>
        <h3>Result Images</h3>
        <Swiper
          modules={[Navigation, Pagination]}
          navigation
          pagination={{ clickable: true }}
          spaceBetween={20}
          slidesPerView={1} // show 3 images by default
          loop
        >
          {[result1, result2].map((img, i) => (
            <SwiperSlide key={i}>
              <img src={img} alt={`Result Image ${i + 1}`} className={styles.rimage} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}

export default Portfolio;
