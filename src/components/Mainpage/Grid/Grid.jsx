import "./grid.scss"
import blog1 from "../../../pictures/bostonglobe.PNG"
import blog2 from "../../../pictures/thekmeal.PNG"
import blog3 from "../../../pictures/buboston.PNG"

export default function Grid() {
    return (
        <div className="grid">
            <span> </span>
            <div className="container">
            <div className="wrapper">
                <span>TheKmeal</span>
                <a href="https://thekmeal.com/dance-crew-hush-crew/">
                    {<img src={blog1} alt="" />}
                </a>
            </div>
            <div className="wrapper">
                <span>Boston Globe</span>
                <a href="https://www.bostonglobe.com/2021/11/03/lifestyle/k-pop-dance-group-hush-crew-takes-its-slick-moves-streets-boston/">
                    {<img src={blog2} alt="" />}
                </a>
            </div>
            <div className="wrapper">
                <span>Bunewservice</span>
                <a href="https://bunewsservice.com/hush-crew-bringing-k-pop-beats-and-dance-to-the-downtown-crossing-area">
                    {<img src={blog3} alt="" />}
                </a>
            </div>
                
            </div>
        </div>
    )
}
