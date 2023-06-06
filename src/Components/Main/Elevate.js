import React from 'react'

const Elevate = () => {
    return (
        <div className="w-screen bg-[#F8F8F8] h-[119vh]">


            {/* absolute page */}
            <div className="w-full h-[30%] ">
                <div className="h-[335px] w-[71.5%] bg-[#F8F8F8] absolute mt-[165px] flex ">
                    <div className="h-full w-[25%] bg-[#FDE344] flex justify-center items-center ">
                        <div className=" h-[200px] w-[200px] mt-[17px] flex flex-col  justify-center">
                            <img className="h-[80px] w-[80px] " src="/Icons/dry-van.png" />
                            <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
                                <span className="w-full h-full text-2xl  font-bold font-sans-serif">DRY VANS</span>
                                <span className="ml-2 mt-1 mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </button>
                            <button className="text-[#81899c] mt-5 mr-auto text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
                        </div>
                    </div>

                    {/* flat bed card */}

                    <div className="h-[95%] w-[25%] bg-white mt-auto flex justify-center items-center hover:bg-[#FDE344]">
                        <div className=" h-[200px] w-[200px] flex flex-col  justify-center">
                            <img className="h-[80px] w-[80px] " src="/Icons/flat-bed.png" />
                            <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
                                <span className="w-full h-full text-2xl  font-bold font-sans-serif">FLAT BEDS</span>
                                <span className="ml-1 mt-1 mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </button>
                            <button className="text-[#81899c] mt-5 mr-auto text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
                        </div>
                    </div>


                    {/* hot shot card */}
                    <div className="h-[95%] w-[25%] bg-white mt-auto flex justify-center items-center hover:bg-[#FDE344]">
                        <div className=" h-[200px] w-[200px] flex flex-col  justify-center">
                            <img className="h-[80px] w-[80px] " src="/Icons/hot-shot.png" />
                            <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
                                <span className="w-full h-full text-2xl  font-bold font-sans-serif">HOT SHOTS</span>
                                <span className="ml-1 mt-1 mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </button>
                            <button className="text-[#81899c] mt-5 mr-auto text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
                        </div>
                    </div>

                    {/* step decks card */}
                    <div className="h-[95%] w-[25%] bg-white mt-auto flex justify-center items-center hover:bg-[#FDE344]">
                        <div className=" h-[200px] w-[200px] flex flex-col  justify-center">
                            <img className="h-[80px] w-[80px] " src="/Icons/step-decks.png" />
                            <button className="tracking-widest flex w-fit h-fit mt-2 hover:flex-row-reverse">
                                <span className="w-full h-full text-2xl  font-bold font-sans-serif">STEP DECKS</span>
                                <span className="ml-1 mt-1 mr-1">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                    </svg>
                                </span>
                            </button>
                            <button className="text-[#81899c] mt-5 mr-auto text-xs tracking-widest font-semibold font-sans-serif">MORE</button>
                        </div>
                    </div>



                </div>
            </div>


            {/* bg image page */}
            <div className="w-full  h-[70%] bg-no-repeat bg-center bg-cover flex items-center	 "
                style={{ backgroundImage: "url('Images/blue-truck.jpg')" }}>

                <div className="flex  h-36 w-[45%] ml-[100px] mt-44">
                    <span className="w-[13%] h-full   "></span>
                    <span className="text-white text-4xl font-medium w-[87%] leading-[1.2] tracking-tight">Elevate your dry van shipping with our logistics experts, on-demand capacity and 24/7 tracking.</span>
                </div>
            </div>

        </div>
    )
}

export default Elevate
