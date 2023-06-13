import React, { useState } from 'react';

const NavDrawer = () => {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);
    const [isPagesOpen, setIsPagesOpen] = useState(false);
    const [isServicesOpen, setIsServicesOpen] = useState(false);

    const handlePagesClick = () => {
        setIsPagesOpen(!isPagesOpen);
    };

    const handleServicesClick = () => {
        setIsServicesOpen(!isServicesOpen);
    };

    return (
        <div className="w-[5%]  h-fit items-center mr-[7%] flex ] md:mr-[4%] lg:hidden">
            {/* Menu icon */}
            <div className="w-[100%] h-fit flex">
                <img
                    src="/Icons/menu.png"
                    className="h-full w-full cursor-pointer"
                    onClick={() => setIsDrawerOpen(!isDrawerOpen)}
                    alt="Menu"
                />
            </div>

            {/* Nav drawer */}
            {isDrawerOpen && (
                <div className="fixed top-0 left-0 h-screen w-[80%] bg-white shadow transition-transform duration-300 transform translate-x-0">
                    <ul className="py-4 px-6 flex flex-col items-start font-sans-serif text-xl">
                        {/* Home section */}
                        <li className="mb-4">
                            <a href="#">Home</a>
                        </li>

                        {/* Pages section */}
                        <li className="mb-4">
                            <button
                                className="flex items-center justify-between cursor-pointer w-full focus:outline-none"
                                onClick={handlePagesClick}
                            >
                                Pages
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ${isPagesOpen ? 'transform rotate-90' : ''}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.293 8.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {/* Display subsections when Pages section is clicked */}
                            {isPagesOpen && (
                                <ul className="pl-6 mt-2">
                                    <li>
                                        <a href="#">Subsection 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Subsection 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Subsection 3</a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Services section */}
                        <li className="mb-4">
                            <button
                                className="flex items-center justify-between cursor-pointer w-full focus:outline-none"
                                onClick={handleServicesClick}
                            >
                                Services
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className={`h-5 w-5 ${isServicesOpen ? 'transform rotate-90' : ''}`}
                                    viewBox="0 0 20 20"
                                    fill="currentColor"
                                >
                                    <path
                                        fillRule="evenodd"
                                        d="M6.293 8.293a1 1 0 0 1 1.414 0L10 10.586l2.293-2.293a1 1 0 1 1 1.414 1.414l-3 3a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1 0-1.414z"
                                        clipRule="evenodd"
                                    />
                                </svg>
                            </button>

                            {/* Display subsections when Services section is clicked */}
                            {isServicesOpen && (
                                <ul className="pl-6 mt-2">
                                    <li>
                                        <a href="#">Subsection 1</a>
                                    </li>
                                    <li>
                                        <a href="#">Subsection 2</a>
                                    </li>
                                    <li>
                                        <a href="#">Subsection 3</a>
                                    </li>
                                </ul>
                            )}
                        </li>

                        {/* Other sections */}
                        <li className="mb-4">
                            <a href="#">Contacts</a>
                        </li>
                        <li className="mb-4">
                            <a href="#">Quote on lane</a>
                        </li>
                        <li className="mb-4">
                            <a href="#">Blog</a>
                        </li>
                    </ul>
                </div>
            )}
        </div>
    );
};

export default NavDrawer;
