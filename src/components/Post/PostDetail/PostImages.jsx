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

export default function PostImages({ title, images }) {
  return (
    <Swiper
      className="h-full"
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      navigation
      pagination={{ clickable: true }}
      loop
      autoplay={{ delay: 5000, disableOnInteraction: false }}
    >
      {images.map((image, index) => (
        <SwiperSlide
          key={index}
          className="w-full h-full !flex !justify-center !items-center relative bg-no-repeat bg-cover bg-center cursor-pointer"
          style={{
            backgroundImage: `url(${image})`,
          }}
        >
          <div className="absolute inset-0 bg-black bg-opacity-50 z-10" />
          <img
            src={`${image}`}
            alt={`${title} Photo ${index + 1}`}
            className="max-w-lg overflow-hidden object-cover rounded-lg max-h-[720px] w-full relative z-20"
          />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
