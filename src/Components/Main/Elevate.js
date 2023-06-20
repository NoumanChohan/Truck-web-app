import React from 'react'

const Elevate = () => {
    return (

        <div className="w-screen bg-[#F8F8F8] h-[120vh] xs:h-[80vh] md:h-[70vh] lg:h-[75vh] 2xl:h-[85vh] flex flex-col justify-between ">


            <div className="w-full  h-[40%] lg:h-[30%] 2xl:h-[25%] sm:h-[20%]">

                {/* absolute page */}

                <div className="h-[50%] xs:h-[35%] mt-[20%] xs:mt-0 sm:h-[20%] md:h-[25%] md:mt-0 lg:mt-[8%] xl:h-[33%] xl:mt-[3%] w-[100%]  md:w-[100%] lg:w-[90%] lg:h-[25%] xl:w-[90%] 2xl:w-[73%] 2xl:h-[33%] 2xl:mt-[2%]  bg-[#F8F8F8] absolute  flex flex-col sm:flex-row">


                    <div className='h-[50%] sm:h-[100%] w-full flex '>
                        {/* dry van card */}
                        <div className="h-[100] w-[50%] bg-[#FDE344] flex flex-col justify-center pl-[2%] lg:pl-[6%] shadow-lg ">
                            <img className="h-[40px] lg:h-[60px]  w-[40px] lg:w-[60px] " src="/Icons/dry-van.png" />
                            <button className="tracking-widest  flex w-fit h-fit mt-2 hover:flex-row-reverse">
                                <span className="w-full h-full text-lg lg:text-xl font-bold font-sans-serif">DRY VANS</span>
                                <span className="ml-2 mt-1 mr-1 base:hidden md:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </button>
                            <button className="text-[#81899c] mt-5  w-fit h-fit text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
                        </div>

                        {/* flat bed card */}


                        <div className="h-[100]  w-[50%]  flex flex-col justify-center pl-[2%] bg-white lg:pl-[6%] shadow-lg hover:bg-[#FDE344] ">
                            <img className="h-[40px] lg:h-[60px]  w-[40px] lg:w-[60px] " src="/Icons/flat-bed.png" />
                            <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
                                <span className="w-full h-full text-lg lg:text-xl font-bold font-sans-serif">FLAT BEDS</span>
                                <span className="ml-2 mt-1 mr-1 base:hidden md:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </button>
                            <button className="text-[#81899c] mt-5  w-fit h-fit text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
                        </div>
                    </div>


                    <div className='h-[50%] sm:h-[100%] w-full flex '>
                        {/* hot shot card */}
                        <div className="h-[100] w-[50%] flex flex-col justify-center pl-[2%] bg-white lg:pl-[6%] shadow-lg hover:bg-[#FDE344]">
                            <img className="h-[40px] lg:h-[60px]  w-[40px] lg:w-[60px] " src="/Icons/hot-shot.png" />
                            <button className="tracking-widest  flex w-fit h-fit mt-2 hover:flex-row-reverse">
                                <span className="w-full h-full text-lg lg:text-xl font-bold font-sans-serif">HOT SHOTS</span>
                                <span className="ml-2 mt-1 mr-1 base:hidden md:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </button>
                            <button className="text-[#81899c] mt-5  w-fit h-fit text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
                        </div>

                        {/* step decks card */}


                        <div className="h-[100] w-[50%]  flex flex-col justify-center pl-[2%] bg-white lg:pl-[6%] shadow-lg hover:bg-[#FDE344] ">
                            <img className="h-[40px] lg:h-[60px]  w-[40px] lg:w-[60px] " src="/Icons/step-decks.png" />
                            <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
                                <span className="w-full h-full text-lg lg:text-xl font-bold font-sans-serif">STEP DECKS</span>
                                <span className="ml-2 mt-1 mr-1 base:hidden md:flex">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </button>
                            <button className="text-[#81899c] mt-5  w-fit h-fit text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
                        </div>
                    </div>

                </div>
            </div >


            {/* bg image page */}
            <div div className="w-full  h-[60%] sm:h-[80%] lg:h-[70%] 2xl:h-[75%] bg-no-repeat bg-center bg-cover flex items-center 	 "
                style={{ backgroundImage: "url('Images/elevate-right.png')" }}>

                <div className='w-[90%] h-fit flex justify-center'>
                    <span className="text-white text-2xl lg:text-4xl font-medium w-[90%]  md:w-[70%] xl:w-[50%] xl:mr-[10%] 2xl:mr-[25%] xl:mt-[10%]  font-sans-serif h-fit  mt-[50%] md:mt-[30%]  lg:mt-[25%] 2xl:mt-[10%] leading-[1.2] tracking-tight">Elevate your dry van shipping with our logistics experts, on-demand capacity and 24/7 tracking.</span>
                </div>
            </div >

        </div >

























































        // <div className="w-screen bg-[#F8F8F8] h-[119vh]">


        //     <div className="w-full h-[30%] ">

        //         {/* absolute page */}

        //         <div className="h-[335px] w-[71.5%] bg-[#F8F8F8] absolute mt-[165px] flex ">
        //             <div className="h-full w-[25%] bg-[#FDE344] flex justify-center items-center ">
        //                 <div className=" h-[200px] w-[200px] mt-[17px] flex flex-col  justify-center">
        //                     <img className="h-[80px] w-[80px] " src="/Icons/dry-van.png" />
        //                     <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
        //                         <span className="w-full h-full text-2xl  font-bold font-sans-serif">DRY VANS</span>
        //                         <span className="ml-2 mt-1 mr-1">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        //                             </svg>
        //                         </span>
        //                     </button>
        //                     <button className="text-[#81899c] mt-5 mr-auto text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
        //                 </div>
        //             </div>

        //             {/* flat bed card */}

        //             <div className="h-[95%] w-[25%] bg-white mt-auto flex justify-center items-center hover:bg-[#FDE344]">
        //                 <div className=" h-[200px] w-[200px] flex flex-col  justify-center">
        //                     <img className="h-[80px] w-[80px] " src="/Icons/flat-bed.png" />
        //                     <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
        //                         <span className="w-full h-full text-2xl  font-bold font-sans-serif">FLAT BEDS</span>
        //                         <span className="ml-1 mt-1 mr-1">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        //                             </svg>
        //                         </span>
        //                     </button>
        //                     <button className="text-[#81899c] mt-5 mr-auto text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
        //                 </div>
        //             </div>


        //             {/* hot shot card */}
        //             <div className="h-[95%] w-[25%] bg-white mt-auto flex justify-center items-center hover:bg-[#FDE344]">
        //                 <div className=" h-[200px] w-[200px] flex flex-col  justify-center">
        //                     <img className="h-[80px] w-[80px] " src="/Icons/hot-shot.png" />
        //                     <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
        //                         <span className="w-full h-full text-2xl  font-bold font-sans-serif">HOT SHOTS</span>
        //                         <span className="ml-1 mt-1 mr-1">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        //                             </svg>
        //                         </span>
        //                     </button>
        //                     <button className="text-[#81899c] mt-5 mr-auto text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
        //                 </div>
        //             </div>

        //             {/* step decks card */}
        //             <div className="h-[95%] w-[25%] bg-white mt-auto flex justify-center items-center hover:bg-[#FDE344]">
        //                 <div className=" h-[200px] w-[200px] flex flex-col  justify-center">
        //                     <img className="h-[80px] w-[80px] " src="/Icons/step-decks.png" />
        //                     <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
        //                         <span className="w-full h-full text-2xl  font-bold font-sans-serif">STEP DECKS</span>
        //                         <span className="ml-1 mt-1 mr-1">
        //                             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
        //                                 <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
        //                             </svg>
        //                         </span>
        //                     </button>
        //                     <button className="text-[#81899c] mt-5 mr-auto text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
        //                 </div>
        //             </div>



        //         </div>
        //     </div>


        //     {/* bg image page */}
        //     <div className="w-full  h-[70%] bg-no-repeat bg-center bg-cover flex items-center	 "
        //         style={{ backgroundImage: "url('Images/elevate-bg.png')" }}>

        //         <div className="flex  h-36 w-[45%] ml-[100px] mt-44">
        //             <span className="w-[13%] h-full   "></span>
        //             <span className="text-white text-4xl font-medium w-[87%] leading-[1.2] tracking-tight">Elevate your dry van shipping with our logistics experts, on-demand capacity and 24/7 tracking.</span>
        //         </div>
        //     </div>

        // </div>
    )
}

export default Elevate
