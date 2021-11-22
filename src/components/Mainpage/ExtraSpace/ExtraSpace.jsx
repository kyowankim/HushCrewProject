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
  const videoID = ["dxtrogpwDE8","IV-Z0J0SsYk","NI-LaLfObYE","W4ROm95bRuI","foYEckTDBwg"]
    const thumbnail = [
        "https://i.ytimg.com/vi/dxtrogpwDE8/hqdefault.jpg",
        "https://i.ytimg.com/vi/IV-Z0J0SsYk/hqdefault.jpg",
        "https://i.ytimg.com/vi/NI-LaLfObYE/hqdefault.jpg",
        "https://i.ytimg.com/vi/W4ROm95bRuI/hqdefault.jpg",
        "https://i.ytimg.com/vi/foYEckTDBwg/hqdefault.jpg"
    ]  
    return (
      <div className="extraspace">
      <div className="wrapper">
                    
      </div>
      </div>
    )
}
