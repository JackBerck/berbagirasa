import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  Autoplay,
} from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

export default function HomeHeroBanner() {
  const banners = [
    {
      id: 1,
      image: "/img/random/arowwai.png",
      title: "Arowwai",
    },
    {
      id: 2,
      image: "/img/random/giggling.png",
      title: "Giggling",
    },
    {
      id: 3,
      image: "/img/random/rimberio-nature.png",
      title: "Rimberio Nature",
    },
    {
      id: 4,
      image: "/img/random/shodwe.png",
      title: "Shodwe",
    },
  ];

  return (
    <div className="mt-[92px]">
      <h1 className="title-font-size font-bold mb-2">Spesial Buat Kamu</h1>
      <Swiper
        className="h-36 md:h-72 lg:h-80 max-w-screen-xl"
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        loop
        autoplay={{ delay: 5000, disableOnInteraction: false }}
      >
        {banners.map((banner) => (
          <SwiperSlide
            key={banner.id}
            className="w-full h-full !flex !justify-center !items-center rounded-md overflow-hidden bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url(${banner.image})`,
            }}
          ></SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
