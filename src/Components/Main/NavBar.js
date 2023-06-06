import React, { useState, useEffect } from 'react';

const Navbar = () => {
    const [scrollBackground, setScrollBackground] = useState(false);
    const [navbarHeight, setNavbarHeight] = useState('15vh');

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 0) {
                setScrollBackground(true);
                setNavbarHeight('8vh');
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
            className="fixed top-0 left-0 w-screen flex justify-between items-center z-10"
            style={{
                height: navbarHeight,
                backgroundColor: scrollBackground ? 'black' : 'transparent',
                transition: 'height 0.5s, background-color 0.5s',
            }}
        >
            <div className="w-[10%] h-full ml-[80px] flex items-center">
                <img src="/Images/footer-logo.png" className="w-[80%]" />
            </div>
            <div className="w-[45%] flex h-full items-center justify-between ">
                <ul className="w-[75%] flex justify-between text-xs tracking-widest text-white font-sans-serif text-center">
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
                    <li className="w-[17%]">CONTACTS</li>
                </ul>
                <button className="w-[19%] outline text-white outline-[#FDE344] outline-[1px] h-[50%]">
                    QUOTE ON LANE
                </button>
            </div>
            <div className="w-[15%] h-16 mr-[80px] flex justify-between items-center">
                <img src="/Icons/phone.png" className="w-[25%] h-[60px]" />
                <button className="w-[75%] h-fit flex justify-center items-center">
                    <p className="tracking-widest text-2xl h-fit w-full text-white">
                        09007860111
                    </p>
                </button>
            </div>
        </nav>
    );
};

export default Navbar;
