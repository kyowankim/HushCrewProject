import "./footer.scss"


export default function Footer() {
    return (
        <div className="footer" id="footer">
            <div className="bottom-bar">
                <div className="container">
                    <div className="top">
                        <div className="wrapper">
                            <h2>Contact</h2>
                            <hr />
                            <a href="mailto:info.hushcrew@gmail.com">
                                <p>info.hushcrew@gmail.com</p>
                            </a>
                        </div>
                        <div className="wrapper">
                            <h2>Support Us!</h2>
                            <hr />
                            <a href="https://www.bonfire.com/store/hush-crew-store/">
                                <p>Merch store!</p>
                            </a>
                        </div>
                    </div>
                    <div className="bottom">
                        <div className="wrapper">
                            <a href="https://twitter.com/hushcrew_" className="twitter">
                                <ion-icon name="logo-twitter" size="large"></ion-icon>
                            </a>
                            <a href="https://www.facebook.com/HushCrewBoston" className="facebook">
                                <ion-icon name="logo-facebook" size="large"></ion-icon>
                            </a>
                            <a href="https://www.tiktok.com/@hushcrew?" className="tiktok">
                                <ion-icon name="logo-tiktok" size="large"></ion-icon>
                            </a>
                            <a href="https://www.youtube.com/c/HUSHCREW" className="youtube">
                                <ion-icon name="logo-youtube" size="large"></ion-icon>
                            </a>
                            <a href="https://www.instagram.com/hushcrew.bos/?hl=en" className="instagram">
                                <ion-icon name="logo-instagram" size="large"></ion-icon>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
