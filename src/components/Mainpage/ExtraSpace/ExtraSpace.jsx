import "./extraspace.scss"

import ReactPlayer from "react-player";

import { useRef, useState } from "react";
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {FreeMode,Navigation,Thumbs} from 'swiper';

// Direct React component imports

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/free-mode/free-mode.scss'; // Pagination module
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/thumbs/thumbs.scss'; // Pagination module

SwiperCore.use([FreeMode,Navigation,Thumbs]);


export default function ExtraSpace() {

  const [thumbsSwiper, setThumbsSwiper] = useState(null);
   
    return (
      <div className="extraspace">
      
      </div>
    )
}
