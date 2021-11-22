// import YoutubeVideo from "../../YoutubeVideo/YoutubeVideo"
import "./features.scss"
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


export default function Features() {

    
    return (
        <div className="features" id="releases">
            <div className="container">
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
                    "clickable": true
                    }} navigation={true} className="mySwiper">
                        <SwiperSlide>
                            <div className="left">
                                <a href="https://thekmeal.com/dance-crew-hush-crew/">
                                    <img src={blog2} alt="" />                        
                                </a>   
                            </div>
                            <div className="right">
                            <div className="reading"></div>
                                <h2>The Kmeal Blog</h2>
                                <p>You may have blinked and missed it, but there’s been a bit of a revolution in resolution over the last few years. Once seen as an experimental and cutting-edge technology, 4K screens are now commonplace: in TV screens, computer monitors and even smartphones.</p>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );

};