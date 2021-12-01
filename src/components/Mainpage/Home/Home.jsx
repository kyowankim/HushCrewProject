import "./home.scss"
import {Button} from "../../Button/Button"
import StoreIcon from '@mui/icons-material/Store';

export default function Home() {

    const releases = () => {
        window.location.replace("#releases")
    }

    return (
        <div className="home" id="home">
        <div className="color-overlay"/>
            <div className="wrapper">
                <img src="https://res.cloudinary.com/duffol2tp/image/upload/v1638375756/hush-horizontal_i045zi.png" alt="" className="hush-horizontal" />
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
