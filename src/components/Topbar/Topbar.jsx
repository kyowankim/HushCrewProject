import "./topbar.scss"
import hushlogo from "../../pictures/korean-hush.jpg"
import { HashLink } from "react-router-hash-link"


export default function Topbar({subMenuOpen, setSubMenuOpen, menuOpen, setMenuOpen}) {
    return (
        <div className={"topbar " + (menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <HashLink to="/#home" className="hush-long-width">Hush Crew</HashLink>
                    <HashLink to="/#home" className="logo">
                        <img src={hushlogo} alt="hushlogo" height="50" width="50" border-radius="50"/>
                    </HashLink>
                </div>
                <div className="right">
                    <div className="container-right" onClick={()=>setSubMenuOpen(!subMenuOpen)}>
                        <ion-icon name="logo-instagram" size="large" className="instagram-logo">
                        </ion-icon>
                    </div>
                    <a href="https://twitter.com/hushcrew_" className="container-right">
                        <ion-icon name="logo-twitter" size="large"></ion-icon>
                    </a>
                    <a href="https://www.facebook.com/HushCrewBoston" className="container-right">
                        <ion-icon name="logo-facebook" size="large"></ion-icon>
                    </a>
                    <a href="https://www.tiktok.com/@hushcrew?" className="container-right">
                        <ion-icon name="logo-tiktok" size="large"></ion-icon>
                    </a>
                    <a href="https://www.youtube.com/c/HUSHCREW" className="container-right">
                        <ion-icon name="logo-youtube" size="large"></ion-icon>
                    </a>
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"></span>
                        <span className="line2"></span>
                        <span className="line3"></span>
                    </div>
                </div>
            </div>     
        </div>
    )
}
