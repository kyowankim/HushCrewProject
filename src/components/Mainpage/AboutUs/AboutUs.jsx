import "./aboutus.scss"
import ReactPlayer from "react-player"
import { init } from "ityped"

import { useEffect, useRef, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react/swiper-react.js';
import SwiperCore, {FreeMode,Navigation,Thumbs} from 'swiper';

// Direct React component imports

// Styles must use direct files imports
import 'swiper/swiper.scss'; // core Swiper
import 'swiper/modules/free-mode/free-mode.scss'; // Pagination module
import 'swiper/modules/navigation/navigation.scss'; // Navigation module
import 'swiper/modules/thumbs/thumbs.scss'; // Pagination module


SwiperCore.use([FreeMode,Navigation,Thumbs]);



export default function Aboutus() {

    const textRef = useRef();
    useEffect(()=> {
        init(textRef.current, { 
            showCursor: false,
            typeSpeed: 150, 
            strings: [' Boston.', ' Los Angeles.' ]
         })
    }, []);
    
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
        <div className="aboutus" id="aboutus">
            <div className="left">
                <div className="bio">
                        <div className="header">
                            <p >We are a K-POP Cover Dance Team in...</p>
                            <span ref={textRef} className="textref"> </span>
                        </div>
                        <p className="summary"> Founded in 2019, Hush Crew is a Boston and LA-based cover dance group that has been featured across several popular Korean platforms, 
                            such as 1theK, MBC, and JTBC. This group of friends performs across the U.S., and has garnered millions of views on YouTube and TikTok.
                        </p>
                </div>
            </div>
            <div className="right">
                <div className="videoslider">
                    <Swiper style={{'--swiper-navigation-color': '#fff','--swiper-pagination-color': '#fff'}} spaceBetween={10} navigation={true} thumbs={{ swiper: thumbsSwiper }} className="mySwiper2">
                        {videoID.map((video)=> (
                            <SwiperSlide key={video}>
                                <ReactPlayer
                                key={video} 
                                url={"https://www.youtube.com/watch?v=" + video} 
                                width="100%" 
                                height="100%"
                                />
                            </SwiperSlide>
                        ))}    
                    </Swiper>
                    <Swiper onSwiper={setThumbsSwiper} spaceBetween={10} slidesPerView={4} freeMode={true} watchSlidesProgress={true} className="mySwiper">
                            {thumbnail.map((thumb)=>(
                                <SwiperSlide key={thumb}>
                                    <img src={thumb} />
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </div>
            </div>     
        </div>
    )
}


