import React from 'react'

const Careers = () => {
    return (
        <div className='w-full h-[300vh] i5:h-[370vh] md:h-[200vh] lg:h-[100vh] bg-[#F8F8F8] xs:h-[250vh] flex flex-col justify-between items-center'>
            <div className=' h-[7%] xs:h-[5%] w-[90%] mt-[20%] md:mt-[15%] lg:h-[10%] lg:mt-[10%] xl:w-[95%] 2xl:w-[77%] 2xl:mt-[8%]  flex flex-col justify-between  '>


                <p className="tracking-[.2em] w-fit h-fit   text-base text-[#81899c]">CAREERS</p>
                <span className="text-4xl xl:text-6xl  w-fit h-fit  font-sans-serif tracking-normal 	text-[#0E1C3C] leading-[1] font-semibold	mt-[3%] lg:mt-auto">Join Track-Truck Team</span>




            </div>
            {/* 4  Card SECTIONS */}


            <div className='w-full lg:w-[90%] h-[90%] lg:h-[75%] xl:w-[95%] 2xl:w-[77%] 2xl:h-[65%]   mt-[10%] lg:mt-0 flex flex-col lg:flex-row lg:flex-wrap  justify-around lg:justify-between md:items-center  i5:justify-between '>



                {/* 1st card section */}


                <div className='w-full md:w-[90%] h-[23%] lg:h-[45%] md:h-[20%] lg:w-[48%] xl:w-[49%] 2xl:h-[40%]  flex flex-col md:flex-row justify-between items-center '>
                    <div className='w-[55%] xs:w-[57%] i5:w-[200px] h-[45%] i5:h-[200px] xs:h-[55%] md:h-[250px] md:w-[250px] lg:w-[240px] lg:h-[240px] rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center '><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-1.png'></img></div>
                    <div className='h-[50%] xs:h-[45%] md:h-[50%] lg:h-[80%] lg:w-[40%] xl:w-[55%] xl:h-[60%] w-[90%] md:w-[60%] ml-4 md:ml-0  flex flex-col items-center md:items-start'>
                        <button className="tracking-normal flex  w-[90%] md:w-fit h-fit mt-[5%]  lg:mt-0 ">
                            <span className="text-xl leading-[1.2em] text-black text-center lg:text-left font-bold h-fit w-full">Dispatch Coordinator</span>
                            <span className="ml-1 mr-1 mt-1 lg:my-auto text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>

                        <p className='text-[#81899c] text-base font-normal tracking-tight mt-[5%] text-center md:text-left lg:text-center xl:text-start w-fit h-fit leading-[1.8em] '>Ensure smooth coordination of shipments, optimize routes, and maximize truck capacity utilization.</p>
                        <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-[5%] lg:mx-auto xl:mx-0 md:mt-auto h-fit w-fit '>FIND JOBS</button>
                    </div>
                </div>



                {/* 2nd card section */}

                <div className='w-full md:w-[90%] h-[23%] lg:h-[45%] md:h-[20%] lg:w-[48%] xl:w-[49%] 2xl:h-[40%]  flex flex-col md:flex-row justify-between items-center '>
                    <div className='w-[55%] xs:w-[57%] i5:w-[200px] h-[45%] i5:h-[200px] xs:h-[55%] md:h-[250px] md:w-[250px] lg:w-[240px] lg:h-[240px] rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center '><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-2.png'></img></div>
                    <div className='h-[50%] xs:h-[45%] md:h-[50%] lg:h-[80%] lg:w-[40%] xl:w-[55%] xl:h-[60%] w-[90%] md:w-[60%] ml-4 md:ml-0  flex flex-col items-center md:items-start'>
                        <button className="tracking-normal flex  w-[90%] md:w-fit h-fit mt-[5%] lg:mt-0 ">
                            <span className="text-xl leading-[1.2em] text-black text-center lg:text-left font-bold h-fit w-full">Fleet Manager</span>
                            <span className="ml-1 mr-1 mt-1 lg:my-auto text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>

                        <p className='text-[#81899c] text-base font-normal tracking-tight mt-[5%] text-center md:text-left lg:text-center xl:text-start w-fit h-fit leading-[1.8em] '>Oversee fleet operations, maintainance and compliance. utilize our fleet management system for efficiency.</p>
                        <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-[5%] lg:mx-auto xl:mx-0 md:mt-auto h-fit w-fit'>FIND JOBS</button>
                    </div>
                </div>




                {/* 3rd card section */}


                <div className='w-full md:w-[90%] h-[23%] lg:h-[45%] md:h-[20%] lg:w-[48%] xl:w-[49%] 2xl:h-[40%] flex flex-col md:flex-row justify-between items-center '>
                    <div className='w-[55%] xs:w-[57%] i5:w-[200px] h-[45%] i5:h-[200px] xs:h-[55%] md:h-[250px] md:w-[250px] lg:w-[240px] lg:h-[240px] rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center '><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-3.png'></img></div>
                    <div className='h-[50%] xs:h-[45%] md:h-[50%] lg:h-[80%] lg:w-[40%] xl:w-[55%] xl:h-[60%] w-[90%] md:w-[60%] ml-4 md:ml-0  flex flex-col items-center md:items-start'>
                        <button className="tracking-normal flex  w-[90%] md:w-fit h-fit mt-[5%] lg:mt-0 ">
                            <span className="text-xl leading-[1.2em] text-black text-center lg:text-left font-bold h-fit w-full">Logistics Analyst</span>
                            <span className="ml-1 mr-1 mt-1 lg:my-auto text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>

                        <p className='text-[#81899c] text-base font-normal tracking-tight mt-[5%] text-center md:text-left lg:text-center xl:text-start w-fit h-fit leading-[1.8em] '>Optimize supply chain operations through data analysis and process improvement. Work closely with dispatching and routing teams.</p>
                        <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-[5%] lg:mx-auto xl:mx-0 md:mt-auto h-fit w-fit'>FIND JOBS</button>
                    </div>
                </div>



                {/* 4th card section */}



                <div className='w-full md:w-[90%] h-[23%] lg:h-[45%] md:h-[20%] lg:w-[48%] xl:w-[49%] 2xl:h-[40%]  flex flex-col md:flex-row justify-between items-center '>
                    <div className='w-[55%] xs:w-[57%] i5:w-[200px] h-[45%] i5:h-[200px] xs:h-[55%] md:h-[250px] md:w-[250px] lg:w-[240px] lg:h-[240px] rounded-full bg-[#F8F8F8] shadow-md flex bg-cover bg-center items-center justify-center '><img className='w-[90%] h-[90%] hover:scale-110 transition-transform' src='/Images/career-4.png'></img></div>
                    <div className='h-[50%] xs:h-[45%] md:h-[50%] lg:h-[80%] lg:w-[40%] xl:w-[55%] xl:h-[60%] w-[90%] md:w-[60%] ml-4 md:ml-0  flex flex-col items-center md:items-start'>
                        <button className="tracking-normal flex  w-[90%] md:w-fit h-fit mt-[5%] lg:mt-0 ">
                            <span className="text-xl leading-[1.2em] text-black text-center lg:text-left font-bold h-fit w-full">Customer Representative</span>
                            <span className="ml-1 mr-1 mt-1 lg:my-auto text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>

                        <p className='text-[#81899c] text-base font-normal tracking-tight mt-[5%] text-center md:text-left lg:text-center xl:text-start w-fit h-fit leading-[1.8em] '>Provide exceptional customer service, handle inquiries, and assist with load matching and administrative tasks.</p>
                        <button className='text-xs font-bold leading-[2em] tracking-[0.2em] mt-[5%] lg:mx-auto xl:mx-0 md:mt-auto h-fit w-fit'>FIND JOBS</button>
                    </div>
                </div>






            </div>


        </div>
    )
}

export default Careers
