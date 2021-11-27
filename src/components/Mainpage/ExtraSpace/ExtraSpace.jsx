import "./extraspace.scss"
import { Parallax } from 'react-scroll-parallax';
import img1 from "../../../pictures/alexa.PNG"

export default function ExtraSpace() {


    return (
      <div className="extraspace">
        <Parallax>
          <img src={img1} alt="" />
        </Parallax>
      </div>
    )
}
