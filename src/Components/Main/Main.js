
"use client"

import Image from "next/image"
import AboutUs from "./AboutUs"
import Testimonials from "./Testimonials"
import Industry from "./Industry"
import Blog from "./Blog"
import RespectedClients from "./RespectedClients"
import AmazonCap from "./AmazonCap"
import Careers from "./Careers"
import ChooseUs from "./ChooseUs"
import Footer from "./Footer"
import Elevate from "./Elevate"
import LandingPage from "./LandingPage"
import NavBar from "./NavBar"


const Main = () => {






    return (
        <div className='overflow-x-hidden'>
            {/* <NavBar /> */}
            <LandingPage />
            <AboutUs />
            <Elevate />
            <Testimonials />
            <Industry />
            <Blog />
            {/* <RespectedClients /> */}
            {/* <AmazonCap /> */}
            <Careers />
            {/* <ChooseUs /> */}
            {/* <Footer /> */}





        </div>
    )
}

export default Main
