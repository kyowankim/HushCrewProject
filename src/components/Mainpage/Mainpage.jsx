import React from 'react'
import AboutUs from './AboutUs/AboutUs'
import Footer from './Footer/Footer'
import Home from './Home/Home'
import Features from './Features/Features'
import Grid from './Grid/Grid'
import ExtraSpace from './ExtraSpace/ExtraSpace'
import "./mainpage.scss"


export default function Firstpage() {
    return (
        <div className="sections">
            <Home/>

            <AboutUs/>
            <Grid/>
            <Features/>
            <Footer/>
        </div>
    )
}
