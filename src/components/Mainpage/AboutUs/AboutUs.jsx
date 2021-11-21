import "./aboutus.scss"

import { init } from "ityped"
import { useEffect,useRef } from "react"
import useEmblaCarousel from 'embla-carousel-react'
import blog1 from "../../../pictures/bostonglobe.PNG"
import blog2 from "../../../pictures/thekmeal.PNG"
import blog3 from "../../../pictures/buboston.PNG"





export default function Aboutus() {

    const textRef = useRef();
    useEffect(()=> {
        init(textRef.current, { 
            showCursor: false,
            typeSpeed: 150, 
            strings: [' Boston.', ' Los Angeles.' ]
         })
    }, []);
    
    const [emblaRef] = useEmblaCarousel()

    return (
        <div className="aboutus" id="aboutus">
            <div className="left">
                <div className="bio">
                        <div className="header">
                            <p >We are a K-POP Cover Dance Team in...</p>
                            <span ref={textRef} className="textref"> </span>
                        </div>
                        <p>I dont know what to put here someone help pls</p>
                        <p>Never gonna give you up Never gon let you down</p>
                        <p>Never gon let you down and desert you never going to</p>
                        <p>Never gon run around and desert you you you</p>
                        <p>Never gonna make you cry when is it gon end</p>
                        <p>I dont ever wanna say good by so lets say good bye</p>
                        <p>Never gon tell a lie and hurt yew but whatever happens</p>
                </div>
            </div>
            <div className="right">
                <div className="embla" ref={emblaRef}>
                    <div className="embla__container">
                        <div className="embla__slide">
                            <img src={blog1} alt="" />
                        </div>
                        <div className="embla__slide">
                            <img src={blog2} alt="" />
                        </div>
                        <div className="embla__slide">
                            <img src={blog3} alt="" />
                        </div>
                    </div>
                </div>
            </div>     
        </div>
    )
}


