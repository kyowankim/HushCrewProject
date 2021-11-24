import "./home.scss"
import {Button} from "../../Button/Button"
import hushHorizontal from "../../../pictures/hush-horizontal.png"
import StoreIcon from '@mui/icons-material/Store';

export default function Home() {

    const releases = () => {
        window.location.replace("#releases")
    }

    return (
        <div className="home" id="home">
            <video src="/videos/hushCrewVideo.mp4" autoPlay loop muted />
            <div className="wrapper">
                <img src={hushHorizontal} alt="" className="hush-horizontal" />
                <div className="hush-button">
                    <Button className="button-1" buttonStyle="btn--outline" buttonSize="btn--large" onClick={releases}>
                        Latest Releases!
                    </Button>
                    <a href="https://www.bonfire.com/store/hush-crew-store/" className="merch-button" >
                        <Button className="button-1" buttonStyle="btn--outline" buttonSize="btn--large">
                            <div style={{
                                display: 'flex',    //this code is to align the text and icon on a line
                                // alignItems: 'center',
                                // flexWrap: 'wrap',
                                justifyContent: "space-between",
                            }}> 
                                <span>Merch Store  </span> 
                                <StoreIcon/>
                            </div>  
                        </Button>
                    </a>
                </div>
            </div>
        </div>
    )
}
