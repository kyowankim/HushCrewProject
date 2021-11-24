import "./collab.scss"
import kft from "../../../pictures/kft.png"
import mercy from "../../../pictures/mercy2.PNG"
import farrah from "../../../pictures/farrah.png"
import yesstyle from "../../../pictures/yesstyle.png"


export default function Collab() {
    return (
        <div className="collab">
            <div className="container">
                <h1>Collaborations</h1>
                <div className="collab-container">  
                    <div className="kft">
                        <a href="https://kungfutea.com/">
                            <img src={kft} alt="" />
                        </a>
                        <span>Hush Crew runs on Kung Fu Tea. Any other boba lovers out there? Follow our TikTok for new KFT content!</span>
                    </div>
                    <div className="mercy">
                        <a href="https://mercycosmetics.com/">
                            <img src={mercy} alt="" />
                        </a>
                        <span>We are proud to be partners with Mercy Cosmetics. Use our code ‘HUSHSTYLE’ at checkout to get 10% off your order!</span>
                    </div>
                    <div className="farrah">
                        <a href="https://thefarrah.com/">
                            <img src={farrah} alt="" />
                        </a>
                        <span>The Farrah curling wand is essential to our getting ready routine. Use our code ‘HUSHSTYLE’ for 20% off your order!</span>
                    </div>
                    <div className="yes-style">
                        <a href="https://www.yesstyle.com/en/home.html?rco=HUSHSTYLE&utm_term=HUSHSTYLE&utm_medium=Influencer&utm_source=dynamic&mcg=influencer ">
                            <img src={yesstyle} alt="" />
                        </a>
                        <span>If you love online shopping as much as we do, try out YesStyle! Use our link AND our code ‘HUSHSTYLE’ to save on your order!
                            <a href="https://www.yesstyle.com/en/home.html?rco=HUSHSTYLE&utm_term=HUSHSTYLE&utm_medium=Influencer&utm_source=dynamic&mcg=influencer " 
                               className="yes-style-link"> 
                               HushCrew Referral Link! 
                            </a>
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
