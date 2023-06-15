"use client"


import React, { useState } from 'react'




const LandingPage = () => {






    return (

        <>
            <div className='w-full h-[200vh] md:h-[190vh]  flex flex-col justify-between items-center lg:hidden '>

                <div className='w-full h-[90vh]  bg-cover bg-center  bg-no-repeat flex justify-center'
                    style={{ backgroundImage: "url('Images/track-41.jpg')" }} >
                    <div className=' w-[90%] h-[50%]   mt-[50%] sm:mt-[35%] sm:w-[70%] md:w-[60%] md:mt-[30%] flex flex-col items-center justify-start	'>
                        <p className='text-white tracking-[0.2em] text-center text-base w-fit  h-fit '>PROFESSIONAL TRANSPORTATION SERVICE</p>
                        <span className=' text-5xl sm:text-6xl md:text-7xl w-fit  h-fit flex flex-col justify-center items-center font-sans-serif font-bold	text-white	mt-[10%] leading-[1] ' 	 >
                            <p className=' w-fit h-fit'>Team </p>
                            <p className='w-fit h-fit'>trucking &</p>

                            <p className='mt-[3%] w-fit h-fit'>transport</p>


                        </span>
                        <p className='text-white text-lg font-medium text-center h-fit w-fit mt-[5%]'>Presentation</p>


                    </div>

                </div>
                {/* FORM (REQUEST A FORM) */}

                <div className='  w-[80%] sm:w-[80%] md:w-[90%] h-[100vh] md:h-[90vh]  justify-between	shadow-lg  flex flex-col items-center	'>

                    {/* FORM HEADER */}

                    <div className='w-full h-[15%] bg-[#fde344] flex justify-center items-center'>
                        <span className='w-fit h-fit font-bold text-[27px] '>Request a quote</span>
                    </div>

                    {/* FORM BODY */}

                    <div className='w-[80%] h-[80%]    '>
                        <form className="w-full h-full  flex flex-col items-center justify-between">
                            <div className="  border-b border-gray-300  w-full h-[10%] flex items-end ">
                                <input className="appearance-none bg-transparent border-none w-[100%]  h-[60%]   pb-3 leading-tight focus:outline-none" type="text" placeholder="Origin ZIP" aria-label="Full name" />
                            </div>

                            <div className="  border-b border-gray-300  w-full h-[10%] flex items-end ">
                                <input className="appearance-none bg-transparent border-none w-[100%]  h-[60%]  pb-3 leading-tight focus:outline-none" type="text" placeholder="Destination ZIP" aria-label="Full name" />
                            </div>

                            <div className="  border-b border-gray-300  w-full h-[10%] flex items-end">
                                <select className=" w-full pb-3 pt-2  bg-white text-[#81899c]  focus:outline-none" type="text" placeholder="Class" >

                                    <option className='text-black'>Class</option>
                                    <option className='text-black'>50</option>
                                    <option className='text-black'>55</option>
                                    <option className='text-black'>60</option>
                                    <option className='text-black'>65</option>
                                    <option className='text-black'>70</option>

                                </select>


                            </div>


                            <div className="  border-b border-gray-300  w-full h-[10%] flex items-end ">
                                <input className="appearance-none bg-transparent border-none w-[100%]  h-[60%]   pb-3 leading-tight focus:outline-none" type="text" placeholder="Weight" aria-label="Full name" />
                            </div>

                            <div className="  border-b border-gray-300  w-full h-[20%] flex items-start ">
                                <input className="appearance-none bg-transparent border-none w-[100%]  h-[100%]  pb-3 leading-tight focus:outline-none" type="text" placeholder="Description" aria-label="Full name" />
                            </div>

                            <div className="w-full h-[13%] bg-[#0E1C3C]  text-white text-xs font-semibold 	flex justify-center items-center hover:scale-95 transform transition-all duration-200">
                                <button className="tracking-widest flex  hover:flex-row-reverse  h-fit w-fit  items-center">
                                    <span className='h-fit w-fit'>REQUEST A QUOTE</span>
                                    <span className="ml-2 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4 ">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                    </span>
                                </button>

                            </div>


                        </form>
                    </div>

                </div>

            </div>

            <div className='w-full h-screen  bg-cover bg-center flex justify-evenly bg-no-repeat xxs:hidden xs:hidden sm:hidden md:hidden lg:flex'
                style={{ backgroundImage: "url('Images/track-41.jpg')" }} >
                <div className=' w-[45%] xl:w-[38%] h-fit ml-[2%] xl:ml-0 mt-[20%] xl:mt-[12%] flex flex-col 	'>
                    <p className='text-white tracking-[0.2em] mt-8 text-base h-fit w-full'>PROFESSIONAL TRANSPORTATION SERVICE</p>
                    <span className=' text-7xl xl:text-8xl font-sans-serif font-bold	text-white	mt-8 leading-[1.01] ' 	 >
                        <p className='h-fit w-fit'>Team</p>
                        {/* <br /> */}
                        <p className='h-fit w-fit'>trucking &</p>
                        {/* <br /> */}
                        <p className='h-fit w-fit mt-3'>transport</p>
                    </span>
                    <div className='flex'>
                        <span className='text-white text-lg font-medium	mt-16	ml-2'>Presentation</span>
                        <a className='photoswipe'></a>
                    </div>
                </div>


                {/* FORM (REQUEST A FORM) */}

                <div className=' bg-white w-[445px] h-[890px]	shadow-sm mt-[15%] xl:mt-[12%] xl:ml-[5%] flex flex-col	'>

                    {/* FORM HEADER */}

                    <div className='w-full h-[120px] bg-[#fde344]'>
                        <span className='w-full h-full font-bold text-[27px]  flex  items-center	px-[75px] '>Request a quote</span>
                    </div>

                    {/* FORM BODY */}

                    <div className='w-[64%] h-[750px] mx-[75px]  bg-white'>
                        <form className="flex flex-col">
                            <div className="  border-b border-gray-300 mt-[100px] ">
                                <input className="appearance-none bg-transparent border-none w-full    pb-3 leading-tight focus:outline-none" type="text" placeholder="Origin ZIP" aria-label="Full name" />
                            </div>

                            <div className="  border-b border-gray-300 mt-9">
                                <input className="appearance-none bg-transparent border-none w-full     pb-3 pt-2 leading-tight focus:outline-none" type="text" placeholder="Destination ZIP" aria-label="Full name" />
                            </div>

                            <div className="  border-b border-gray-300 mt-9 ">
                                <select className=" w-full pb-3 pt-2 bg-white text-[#81899c]  focus:outline-none" type="text" placeholder="Class" >

                                    <option className='text-black'>Class</option>
                                    <option className='text-black'>50</option>
                                    <option className='text-black'>55</option>
                                    <option className='text-black'>60</option>
                                    <option className='text-black'>65</option>
                                    <option className='text-black'>70</option>

                                </select>


                            </div>


                            <div class="  border-b border-gray-300 mt-9">
                                <input class="appearance-none bg-transparent border-none w-full     pb-3 pt-2 leading-tight focus:outline-none" type="text" placeholder="Weight" aria-label="Full name" />
                            </div>

                            <div>
                                <input class="appearance-none bg-transparent border-none w-full      pt-12 leading-tight focus:outline-none" type="text" placeholder="Description" aria-label="Full name" />
                                <div class="  border-b border-gray-300 mt-28">
                                </div>
                            </div>

                            <div className="w-full h-[80px] bg-[#0E1C3C] mt-12 text-white text-xs font-semibold 	flex justify-center items-center hover:scale-95 transform transition-all duration-200">
                                <button className="tracking-widest flex  hover:flex-row-reverse">
                                    <span>REQUEST A QUOTE</span>
                                    <span className="ml-2 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                    </span>
                                </button>

                            </div>


                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default LandingPage
