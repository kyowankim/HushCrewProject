// import YoutubeVideo from "../../YoutubeVideo/YoutubeVideo"
import "./features.scss"

import ReactPlayer from "react-player";

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
        <div className="features" id="features">
            <div className="container">
                <Swiper slidesPerView={1} spaceBetween={30} loop={true} pagination={{
                    "clickable": true
                    }} navigation={true} className="mySwiper">

                        <SwiperSlide>
                            <div className="left">
                                <a href="https://www.bostonglobe.com/2021/11/03/lifestyle/k-pop-dance-group-hush-crew-takes-its-slick-moves-streets-boston/">
                                    <img src="https://res.cloudinary.com/duffol2tp/image/upload/v1638375451/bostonglobe_ntom3t.png" alt="" />                        
                                </a>   
                            </div>
                            <div className="right">
                            <div className="reading"></div>
                                <h2>The Boston Globe - Hush Crew takes its slick moves to DTX</h2>
                                <p>“If you’ve recently strolled through Downtown Crossing on a weekend, you may have stopped to watch them: a gaggle of dancers in 
                                formation, moving and grooving to Korean pop songs.They call themselves Hush Crew, a group of 20-somethings who’ve been dancing
                                together for years.” Click the picture to see the full article!
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="left">
                                <a href="https://bunewsservice.com/hush-crew-bringing-k-pop-beats-and-dance-to-the-downtown-crossing-area/">
                                    <img src="https://res.cloudinary.com/duffol2tp/image/upload/v1638375488/buboston_vazqbn.png" alt="" />                        
                                </a>   
                            </div>
                            <div className="right">
                            <div className="reading"></div>
                                <h2>Boston University News Source</h2>
                                <p>“What started as a few friends in the BU miXx — a K-pop cover dance group at Boston University — 
                                has become a regular staple in the city’s street performing scene, supported by fans both online and in-person, 
                                with a viral video here and there, too.” Click on the picture to read the 
                                full article!
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="left">
                                <div className="video-container">
                                    <ReactPlayer
                                        url={"https://www.youtube.com/watch?v=RqKGpgL5mQg&ab_channel=HUSHCREW"} 
                                        width="100%" 
                                        height="100%"
                                    />
                                </div>
                            </div>
                            <div className="right">
                            <div className="reading"></div>
                                <h2>K-Place KPop Cover Dance Contest - 2nd Place winners</h2>
                                <p>Newly founded HUSH LA was given the opportunity to compete at K-Place’s KPop Cover Dance Contest and placed 2nd! 
                                    Check out the video to see our award winning BlackPink set!
                                </p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="left">
                                <a href="https://www.youtube.com/watch?v=F8JtHa8eEd4&t=330s">
                                    <img src="https://res.cloudinary.com/duffol2tp/image/upload/v1638375429/alexa_xuusbw.png" alt="" />                        
                                </a>   
                            </div>
                            <div className="right">
                            <div className="reading"></div>
                                <h2>Collaboration with Zanybros on AleXa’s ‘Xtra’</h2>
                                <p>We had the amazing opportunity to collaborate with Zanybros to show AleXa our cover of ‘Xtra’!</p>
                            </div>
                        </SwiperSlide>

                        <SwiperSlide>
                            <div className="left">
                                <div className="video-container">
                                    <ReactPlayer
                                        url={"https://www.youtube.com/watch?v=FXRjCKzYJAE&ab_channel=1theKOriginals-%EC%9B%90%EB%8D%94%EC%BC%80%EC%9D%B4%EC%98%A4%EB%A6%AC%EC%A7%80%EB%84%90"} 
                                        width="100%" 
                                        height="100%"
                                    />
                                </div>
                            </div>
                            <div className="right">
                            <div className="reading"></div>
                                <h2>1theK CLC - ‘Devil’ Dance Cover Contest - 3rd Place Winners</h2>
                                <p>Fun fact: Before our name became ‘Hush Crew’, we were originally going by ‘ADC’ (Aaliflower Dance Crew). 
                                   You’ll see CLC reference our old name in the video!
                                </p>
                            </div>
                        </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );

};