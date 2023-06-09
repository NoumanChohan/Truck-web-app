
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
            {/* 1st page */}
            <LandingPage />
            {/* SECOND PAGE OF LANDING (About Us) */}
            <AboutUs />
            {/* 3RD PAGE  Elevate your dry van shipping  */}
            <Elevate />
            {/* 4th page TESTIMONIALS */}
            <Testimonials />
            {/* 5th PAGE INDUSTRY */}
            <Industry />
            {/* 6th PAGE - OUR BLOG */}
            <Blog />
            {/* 7th PAGE - Respected clientG */}
            <RespectedClients />
            {/* 8th page Amazon */}
            <AmazonCap />
            {/* 9th pagen CAREERS */}
            <Careers />
            {/* 10th pagen Choose Us */}
            <ChooseUs />
            {/* Footer */}
            <Footer />





        </div>
    )
}

export default Main
