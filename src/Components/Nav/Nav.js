"use client"
import Link from 'next/link';
import React, { useEffect, useState, } from 'react';
import NavDrawer from './NavDrawer';

const Nav = () => {



    const [scrollBackground, setScrollBackground] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState('15vh');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollBackground(true);
                setNavbarHeight('10vh');
            } else {
                setScrollBackground(false);
                setNavbarHeight('15vh');
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const [showDropdown, setShowDropdown] = useState(false);
    const [showServicesDropdown, setShowServicesDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };
    const toggleDropdownLeave = () => {
        setShowDropdown(true);
    }

    // const toggleServicesDropdown = () => {
    //     setShowServicesDropdown(!showServicesDropdown);
    // };

    return (
        <nav
            className="fixed top-0 left-0 w-screen flex justify-between items-center z-10 "
            style={{
                height: navbarHeight,
                backgroundColor: scrollBackground ? 'black' : 'transparent',
                transition: 'height 0.5s, background-color 0.5s',
            }}
        >
            {/* logo text section */}

            <div className="w-[25%] h-full   ml-[25px] flex items-center text-lg i5:w-[40%] 12pro:w-[35%] ipad:text-2xl ipadpro:text-2xl mcbook:w-[10%] mcbook:ml-[40px] dekstop:w-[10%] dekstop:ml-[80px] wscreen:w-[10%] wscreen:ml-[80px]">
                <p className="w-fit h-fit   text-yellow-300 font-bold  dekstop:w-[80%] ">TRACK/</p><p className='text-white w-fit h-fit'>/TRUCK</p>
            </div>



            {/* middle section for dekstop */}
            <div className="w-[45%]  flex h-full items-center justify-evenly i5:hidden 12pro:hidden ipad:hidden ipadpro:hidden mcbook:w-[60%] dekstop:w-[60%] wscreen:w-[50%]">
                <ul className="w-[75%]  flex justify-between text-xs tracking-widest text-white font-sans-serif text-center mcbook:w-[60%] dekstop:w-[60%] wscreen:w-[60%]">
                    <li className="w-[17%]">HOME</li>

                    <li className="w-[17%]">
                        <button className="w-full flex  justify-center relative" onClick={toggleDropdown} >
                            <p className="h-fit w-fit tracking-widest">PAGES</p>
                            <img src="/Icons/dropdown.png" className="h-[15px] w-[20px]" />
                            {showDropdown && (

                                <div className="absolute bg-white text-black w-[150px] h-fit  p-2 mt-[50px] " onMouseEnter={toggleDropdownLeave} onMouseLeave={toggleDropdown}>
                                    <li>About</li>
                                    <li>Products</li>
                                    <li>Portfolio</li>
                                </div>

                            )}
                        </button>
                    </li>

                    <li className="w-[17%]">
                        <button
                            className="w-full flex  justify-center relative"
                        // onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}
                        >
                            <p className="h-fit w-fit tracking-widest">SERVICES</p>
                            <img src="/Icons/dropdown.png" className="h-[15px] w-[20px]" />
                            {/* {showServicesDropdown && (

                                <div className="absolute bg-white text-black w-[150px] p-2 mt-[50px]" onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}>
                                    <li>About</li>
                                    <li>Products</li>
                                    <li>Portfolio</li>
                                </div>

                            )} */}
                        </button>
                    </li>

                    <li className="w-[17%]">BLOG</li>
                    <Link href="/contact"><li className="w-[17%]"> CONTACTS</li></Link>
                </ul>
                <button className="w-[23%]  outline text-white outline-[#FDE344] outline-[1px] h-[40%] ">
                    QUOTE ON LANE
                </button>
            </div>



            {/* phone section */}

            <div className="w-[15%] h-16 mr-[80px]  flex justify-between items-center i5:hidden 12pro:hidden ipad:hidden ipadpro:w-[27%] ipadpro:ml-[37%] ipadpro:mr-0 mcbook:w-[20%] mcbook:mr-[40px] dekstop:w-[18%] dekstop:mr-[80px] wscreen:w-[17%] wscreen:mr-[80px]">
                <img src="/Icons/phone.png" className="w-[25%]  h-[60px] ipadpro:w-[23%] dekstop:w-[23%] " />
                <button className="w-[75%] h-fit flex justify-center items-center ipadpro:w-[77%]">
                    <p className="tracking-widest text-2xl h-fit w-full text-yellow-300">
                        09007860111
                    </p>
                </button>
            </div>
            {/* drawer for short screen */}
            <NavDrawer />

        </nav>
    );
};

export default Nav;
