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



            <Link href={"/"} className="w-fit h-full   ml-[5%] flex items-center text-base  md:text-2xl md:w-[25%] lg:text-lg lg:w-fit xl:w-fit ">
                <p className="w-fit h-fit    text-yellow-300 font-bold  md:w-fit  ">TRACK/</p><p className='text-white w-[50%] h-fit md:w-fit '>/TRUCK</p>
            </Link>



            {/* middle section for dekstop */}
            <div className="w-[60%]  flex h-full items-center justify-between base:hidden sm:hidden md:hidden lg:flex lg:mr-[6%] xl:w-[50%] xl:ml-[6%] 2xl:w-[60%]">
                <ul className="w-[75%]  flex justify-between text-xs tracking-widest text-white font-sans-serif text-center ">
                    <li className="w-[17%]">HOME</li>

                    <li className="w-[17%]">
                        <button className="w-full flex  justify-center relative" onClick={toggleDropdown} >
                            <p className="h-fit w-fit tracking-widest">SERVICES</p>
                            <img src="/Icons/dropdown.png" className="h-[15px] w-[20px]" />
                            {/* {showDropdown && (

                                <div className="absolute bg-white text-black w-[150px] h-fit  p-2 mt-[50px] " onMouseEnter={toggleDropdownLeave} onMouseLeave={toggleDropdown}>
                                    <li>About</li>
                                    <li>Products</li>
                                    <li>Portfolio</li>
                                </div>

                            )} */}
                        </button>
                    </li>

                    <li className="w-[17%]">
                        <button
                            className="w-full flex  justify-center relative"
                        // onMouseEnter={toggleServicesDropdown} onMouseLeave={toggleServicesDropdown}
                        >
                            <p className="h-fit w-fit tracking-widest">PAGES</p>
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
                {/* <button className="w-[20%]  outline text-white outline-[#FDE344] outline-[1px] h-[40%] text-xs ">
                    QUOTE ON LANE
                </button> */}
            </div>





            {/* phone section */}

            <div className="w-[20%] h-16 mr-[5%]  flex justify-between items-center base:hidden sm:hidden md:hidden xl:flex 2xl:w-[17%]">
                <img src="/Icons/phone.png" className="w-[25%]  h-[60px]  " />
                <button className="w-[75%] h-fit flex justify-center items-center">
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
