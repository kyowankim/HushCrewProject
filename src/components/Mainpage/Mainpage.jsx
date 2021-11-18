import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Releases from './Releases/Releases'
import "./mainpage.scss"

export default function Firstpage() {
    return (
        <div className="sections">
            <Home/>
            <AboutUs/>
            <Releases/>
            <Footer/>
        </div>
    )
}
