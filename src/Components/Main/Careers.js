import React from 'react'

const Careers = () => {
    return (
        <div className='w-full h-[300vh] i5:h-[370vh] md:h-[200vh] bg-[#d01d1d] xs:h-[250vh] flex flex-col justify-between items-center'>
            <div className=' h-[7%] xs:h-[5%] w-[90%] mt-[20%] md:mt-[15%] bg-green-300 flex flex-col justify-between  '>


                <p className="tracking-[.2em] w-fit h-fit   text-base text-[#81899c]">CAREERS</p>
                <span className="text-4xl  w-fit h-fit  font-sans-serif tracking-normal 	text-[#0E1C3C] leading-[1] font-semibold	mt-[3%]">Join Track-Truck Team</span>




            </div>
            {/* 4  Card SECTIONS */}


            <div className='w-full h-[90%] bg-pink-400  mt-[10%] flex flex-col  justify-around md:items-center i5:justify-between '>





                {/* first two section combine in this div */}
                {/* <div className='h-[50%] w-full  flex justify-between '> */}



                {/* 1st card section */}


                <div className='w-full md:w-[90%] h-[23%] md:h-[20%] bg-yellow-200 flex flex-col md:flex-row justify-between items-center '>
                    <div className='w-[55%] xs:w-[57%] i5:w-[200px] h-[45%] i5:h-[200px] xs:h-[55%]  rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center '><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-1.png'></img></div>
                    <div className='h-[50%] xs:h-[45%] w-[90%] ml-4 bg-green-300 flex flex-col items-center'>

                        <button className="tracking-normal flex  w-[90%] h-fit mt-[5%] bg-pink-300">
                            <span className="text-xl leading-[1.2em] text-black text-center font-bold h-fit w-full">Dispatch Coordinator</span>
                            <span className="ml-1 mr-1 mt-1 text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>

                        <p className='text-[#81899c] text-base font-normal tracking-tight mt-[5%] text-center w-fit h-fit leading-[1.8em] '>Ensure smooth coordination of shipments, optimize routes, and maximize truck capacity utilization.</p>
                        <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-[5%] h-fit w-fit'>FIND JOBS</button>



                    </div>
                </div>



                {/* 2nd card section */}

                <div className='w-full h-[23%] bg-yellow-200 flex flex-col md:flex-row justify-between items-center '>
                    <div className='w-[55%] xs:w-[57%] i5:w-[200px] h-[45%] i5:h-[200px] xs:h-[55%] rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center '><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-2.png'></img></div>
                    <div className='h-[50%] xs:h-[45%] w-[90%] ml-4 bg-green-300 flex flex-col items-center'>

                        <button className="tracking-normal flex  w-[90%] h-fit mt-[5%]  bg-pink-300">
                            <span className="text-xl leading-[1.2em] text-black text-center font-bold h-fit w-full">Fleet Manager</span>
                            <span className="ml-1 mr-1 mt-1 text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>

                        <p className='text-[#81899c] text-base font-normal tracking-tight mt-[5%] text-center w-fit h-fit leading-[1.8em] '>Oversee fleet operations, maintenance, and compliance. Utilize our fleet management system for efficiency.</p>
                        <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-[5%] h-fit w-fit'>FIND JOBS</button>



                    </div>
                </div>


                <div className='w-full h-[23%] bg-yellow-200 flex flex-col md:flex-row justify-between items-center '>
                    <div className='w-[55%] xs:w-[57%]  i5:w-[200px] h-[45%] i5:h-[200px] xs:h-[55%]  rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center '><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-3.png'></img></div>
                    <div className='h-[50%] xs:h-[45%] w-[90%] ml-4 bg-green-300 flex flex-col items-center'>

                        <button className="tracking-normal flex  w-[90%] h-fit mt-[5%] bg-pink-300">
                            <span className="text-xl leading-[1.2em] text-black  font-bold h-fit w-full text-center">Logistics Analyst</span>
                            <span className="ml-1 mr-1 mt-1 text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>

                        <p className='text-[#81899c] text-base font-normal tracking-tight mt-[5%] text-center w-fit h-fit leading-[1.8em] '>Optimize supply chain operations through data analysis and process improvement. Work closely with dispatching and routing teams.</p>
                        <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-[5%] i5:mt-auto h-fit w-fit'>FIND JOBS</button>



                    </div>
                </div>


                <div className='w-full h-[23%] bg-yellow-200 flex flex-col md:flex-row justify-between items-center '>
                    <div className='w-[55%]  xs:w-[57%] i5:w-[200px] h-[45%] i5:h-[200px] xs:h-[55%] rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center '><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-4.png'></img></div>
                    <div className='h-[50%] xs:h-[45%] w-[90%] ml-4 bg-green-300 flex flex-col items-center'>

                        <button className="tracking-normal flex  w-[90%] h-fit mt-[5%] bg-pink-300">
                            <span className="text-xl leading-[1.2em] text-black  font-bold h-fit w-full text-center">Customer Representative</span>
                            <span className="ml-1 mr-1 mt-1 text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>

                        <p className='text-[#81899c] text-base font-normal tracking-tight mt-[5%] text-center w-fit h-fit leading-[1.8em] '>Provide exceptional customer service, handle inquiries, and assist with load matching and administrative tasks.</p>
                        <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-[5%] h-fit w-fit'>FIND JOBS</button>



                    </div>
                </div>











                {/* <div className='w-[47%] h-full flex items-center '>
                            <div className='w-[36%] h-[90%]  rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center'><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-2.png'></img></div>
                            <div className='h-full w-[65%] ml-4  flex flex-col '>

                                <button className="tracking-normal flex   w-[350px] h-14 mt-16 ">
                                    <span className="text-2xl leading-[1.2em] text-black  font-bold">Fleet Manager</span>
                                    <span className="ml-1 mr-1 mt-1 text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                    </span>
                                </button>

                                <p className='text-[#81899c] text-base font-normal tracking-tight  w-full leading-[1.8em] '>Oversee fleet operations, maintenance, and compliance. Utilize our fleet management system for efficiency.</p>
                                <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-4 w-fit'>FIND JOBS</button>



                            </div>
                        </div> */}










                {/* </div> */}










                {/* last two section combine in this div */}

                {/* <div className='h-[50%] w-full  flex justify-between'>



                        3rd card section


                        <div className='w-[47%] h-full  flex items-end'>
                            <div className='w-[36%] h-[90%]  rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center'><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-3.png'></img></div>
                            <div className='h-full w-[65%] ml-4  flex flex-col '>

                                <button className="tracking-normal flex  w-[350px] h-14 mt-[80px] ">
                                    <span className="text-2xl leading-[1.2em] text-black  font-bold">Service Representative</span>
                                    <span className="ml-1 mr-1 mt-1 text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                    </span>
                                </button>

                                <p className='text-[#81899c] text-base font-normal tracking-tight  w-full leading-[1.8em] '>Optimize supply chain operations through data analysis & process improvement. Work closely with dispatching & routing teams. </p>
                                <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-4 w-fit'>FIND JOBS</button>



                            </div>
                        </div>



                        4th card section






                        <div className='w-[47%] h-full  flex items-end'>
                            <div className='w-[36%] h-[90%]  rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center'><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-4.png'></img></div>
                            <div className='h-full w-[65%] ml-4 flex flex-col '>

                                <button className="tracking-normal flex   w-[350px] h-14 mt-[80px] ">
                                    <span className="text-2xl leading-[1.2em] text-black  font-bold">Logistics Analyst</span>
                                    <span className="ml-1 mr-1 mt-1 text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                    </span>
                                </button>

                                <p className='text-[#81899c] text-base font-normal tracking-normal  w-full leading-[1.8em] '>Provide exceptional customer service, handle inquiries, and assist with load matching and administrative tasks.</p>
                                <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-4 w-fit'>FIND JOBS</button>



                            </div>
                        </div>










                    </div> */}





            </div>


        </div>
    )
}

export default Careers
