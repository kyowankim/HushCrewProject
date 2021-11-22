import "./grid.scss"
import blog1 from "../../../pictures/bostonglobe.PNG"
import blog2 from "../../../pictures/thekmeal.PNG"
import blog3 from "../../../pictures/buboston.PNG"

import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';

// Import Swiper styles
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/pagination/pagination.scss'; // Pagination module
import 'swiper/modules/navigation/navigation.scss'; // Navigation module

import SwiperCore, {
    Pagination,Navigation
  } from 'swiper';

SwiperCore.use([Pagination,Navigation]);

export default function Grid() {
    return (
        <div className="grid">
            
        </div>
    )
}
