import "./collab.scss"



export default function Collab() {
    return (
        <div className="collab" id="collab">
            <div className="container">
                <h1>Collaborations</h1>
                <div className="collab-container">  
                    <div className="kft">
                        <a href="https://kungfutea.com/">
                            <img src="https://res.cloudinary.com/duffol2tp/image/upload/v1638375948/kft_bwlxx0.png" alt="" />
                        </a>
                        <span>Hush Crew runs on Kung Fu Tea. Any other boba lovers out there? Follow our TikTok for new KFT content!</span>
                    </div>
                    <div className="mercy">
                        <a href="https://mercycosmetics.com/">
                            <img src="https://res.cloudinary.com/duffol2tp/image/upload/v1638375986/mercy2_fatp3k.png" alt="" />
                        </a>
                        <span>We are proud to be partners with Mercy Cosmetics. Use our code ‘HUSHSTYLE’ at checkout to get 10% off your order!</span>
                    </div>
                    <div className="farrah">
                        <a href="https://thefarrah.com/">
                            <img src="https://res.cloudinary.com/duffol2tp/image/upload/v1638376021/farrah_adjjga.png" alt="" />
                        </a>
                        <span>The Farrah curling wand is essential to our getting ready routine. Use our code ‘HUSHSTYLE’ for 20% off your order!</span>
                    </div>
                    <div className="yes-style">
                        <a href="https://www.yesstyle.com/en/home.html?rco=HUSHSTYLE&utm_term=HUSHSTYLE&utm_medium=Influencer&utm_source=dynamic&mcg=influencer ">
                            <img src="https://res.cloudinary.com/duffol2tp/image/upload/v1638376068/yesstyle_jv4apn.png" alt="" />
                        </a>
                        <span>Use our link AND our code ‘HUSHSTYLE’ to save on your order!
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
