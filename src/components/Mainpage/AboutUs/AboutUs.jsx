import "./aboutus.scss"
// import mkdc from '../../pictures/hushCrewLogo.JPG'
import mkdc2 from '../../../pictures/mkdc.jpg'
import { init } from "ityped"
import { useEffect,useRef } from "react"
import downArrow from "../../../pictures/down.png"



export default function Aboutus() {

    const textRef = useRef();
    useEffect(()=> {
        init(textRef.current, { 
            showCursor: false,
            typeSpeed: 150, 
            strings: [' Boston.', ' Los Angeles.' ]
         })
    }, []);

    return (
        <div className="aboutus" id="aboutus">
            <div className="left">
                <div className="bio">
                    <span className="welcome">Welcome to our Website!</span>
                    <div className="header">
                        <p >We are a K-POP cover dance team in...</p>
                        <p ref={textRef} > </p>
                    </div>
                    <p>I dont know what to put here someone help pls</p>
                    <p>Never gonna give you up</p>
                    <p>Never gon let you down</p>
                    <p>Never gon run around and desert you</p>
                    <p>Never gonna make you cry</p>
                    <p>Never gon say good bye</p>
                    <p>Never gon tell a lie and hurt yew</p>
                </div>
            </div>
            <div className="right">
                <img src={mkdc2} alt="" className="mkdc-img" />
                <a href="#releases">
                    <img src={downArrow} alt="down-arrow" className="down-arrow"/>
                </a>
            </div>
        </div>
    )
}
