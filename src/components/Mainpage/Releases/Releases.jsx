// import YoutubeVideo from "../../YoutubeVideo/YoutubeVideo"
import "./releases.scss"
import { useState} from "react";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ReactPlayer from "react-player";

// import useFetch from "../Releases/fetchVideoID"




export default function Releases() {

    // const [videoID, setVideoID] = useState(null);
    // // const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCbf6oBW8ojERFw1AHUpBu2CdCcdjrovVo&channelId=UCfBIIJWYgTFHZW7B-nsVl4w&part=snippet,id&order=date&maxResults=5"
    // const url = "https://www.googleapis.com/youtube/v3/search?key=AIzaSyCpOr7iJP6QNSW4zoIlY1nCpgobrR7u2U0&channelId=UCfBIIJWYgTFHZW7B-nsVl4w&part=snippet,id&order=date&maxResults=5"
    // useEffect(() => {
    //     async function fetchData(){
    //         const response  = await fetch(url);
    //         const data = await response.json();
    //         const item = data["items"];
    //         const result = [];
    //         for (const element of item){
    //             result.push(element["id"]["videoId"])
    //         }
    //         setVideoID(result)
    //     }
    //     fetchData();
    // },[])

    const videoID = ["dxtrogpwDE8","IV-Z0J0SsYk","NI-LaLfObYE","W4ROm95bRuI","foYEckTDBwg"]

    
    const [currentSlide,setCurrentSlide] = useState(0)
    const handleClick = (value) => {
        value==="right" ?
        setCurrentSlide(currentSlide < videoID.length - 1 ? currentSlide + 1 : 0) :
        setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : videoID.length - 1)
    };
    
    // <YoutubeVideo className="youtube-video" videoId={d} width="700" height="425" />
    
    return (
        <div className="releases" id="releases">
            <div className="slider" id="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)`}}>
                {videoID && videoID.map((d)=>(
                    <div key={d} className="container">
                        <div className="item">
                            <div className="video-container">
                                <ReactPlayer 
                                    className="youtube-video" 
                                    url={"https://www.youtube.com/watch?v=" + d } 
                                    width="100%" 
                                    height="100%"
                                />
                            </div>
                        </div>
                        <ArrowBackIosNewIcon className="left arrow" alt="" onClick={()=>handleClick("left")} />
                        <ArrowForwardIosIcon className="right arrow" alt="" onClick={()=>handleClick("right")}/>
                    </div>
                ))}
            </div>
        </div>
    );

};