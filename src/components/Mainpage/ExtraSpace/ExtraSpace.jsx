import "./extraspace.scss"
import { Navigation, Pagination } from 'swiper';
// Direct React component imports
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
export default function ExtraSpace() {

    return (
      <div className="page">
        <div className="wrapper">
        <Swiper
          className="swiper-container"
          spaceBetween={50}
          slidesPerView={3}
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}
        >
          <SwiperSlide className="swiper-slide" id="1">Slide 1</SwiperSlide>
          <SwiperSlide className="swiper-slide" id="2">Slide 2</SwiperSlide>
          <SwiperSlide className="swiper-slide" id="3">Slide 3</SwiperSlide>
          <SwiperSlide className="swiper-slide" id="4">Slide 4</SwiperSlide>
          <SwiperSlide className="swiper-slide" id="5">Slide 5</SwiperSlide>
        </Swiper>
        </div>
        </div>
    )
}
