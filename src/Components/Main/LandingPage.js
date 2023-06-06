"use client"


import React, { useState } from 'react'




const LandingPage = () => {






    return (
        <div className='w-full h-screen  bg-cover bg-center flex bg-no-repeat'
            style={{ backgroundImage: "url('Images/track-41.jpg')" }} >
            <div className=' w-4/12 h-2/3 ml-[198px] mt-56 flex flex-col	'>
                <p className='text-white tracking-[0.2em] mt-8 text-base '>PROFESSIONAL TRANSPORTATION SERVICE</p>
                <span className=' text-[113px] font-sans-serif font-bold	text-white	mt-8 leading-[1.01] ' 	 >
                    <p className=''>Team</p>
                    {/* <br /> */}
                    <p className=''>trucking &</p>
                    {/* <br /> */}
                    <p className='mt-3'>transport</p>
                </span>
                <div className='flex'>
                    <span className='text-white text-lg font-medium	mt-16	ml-2'>Presentation</span>
                    <a className='photoswipe'></a>
                </div>
            </div>


            {/* FORM (REQUEST A FORM) */}

            <div className=' bg-white w-[445px] h-[890px]	shadow-sm ml-[365px] mt-[230px] flex flex-col	'>

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
    )
}

export default LandingPage
