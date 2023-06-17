import React from 'react'

const Testimonials = () => {
    return (
        <>
            <div className="w-full h-[350vh] i5:h-[400vh] xs:h-[280vh] flex flex-col bg-red-400 items-center justify-between">
                <div className="h-[13%] i5:h-[12%] xs:h-[11%] w-[90%]  mt-[20%]  bg-green-200 flex flex-col ">
                    <p className="tracking-[.2em] w-fit h-fit  text-base text-[#81899c]">TESTIMONIALS</p>
                    <span className="text-5xl i5:text-3xl  xs:text-4xl  w-fit h-fit bg-pink-300 tracking-tight	text-[#0E1C3C] leading-[1] font-semibold xs:font-bold 	mt-[5%]">What our happy clients say</span>


                    <div className="flex  h-fit w-[85%] i5:w-[70%] xs:w-[70%] mt-[20%] i5:mt-[10%] xs:mt-auto items-center">
                        <button className="tracking-widest flex bg-[#0e1c3c] w-[100%] h-20  text-white justify-center items-center mb-3 hover:scale-95 transform transition-all duration-200 hover:flex-row-reverse">
                            <span className="text-xs leading-[1.2em]   font-medium ">All TESTIMONIALS </span>
                            <span className="ml-2 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
                {/* Cards section */}


                <div className=" w-[90%] h-[80%] i5:h-[84%] xs:h-[84%] bg-green-300 flex flex-col justify-between text-[#81899c]" >

                    {/* 1st card */}
                    <div className="w-full bg-[#F8F8F8] h-[15%] xs:h-[13%] flex flex-col items-center justify-center hover:bg-[#FDE344]">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>


                    {/* 2nd card */}


                    <div className="w-full bg-[#F8F8F8] h-[17%] flex flex-col items-center justify-center hover:bg-[#FDE344]">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>

                    {/* 3rd card */}


                    <div className="w-full bg-[#F8F8F8] h-[15%] xs:h-[13%] flex flex-col items-center justify-center hover:bg-[#FDE344]">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>


                    {/* 4th card */}
                    <div className="w-full bg-[#F8F8F8] h-[17%] flex flex-col items-center justify-center hover:bg-[#FDE344]">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>


                    {/* 5th card */}


                    <div className="w-full bg-[#F8F8F8] h-[15%] xs:h-[13%] flex flex-col items-center justify-center hover:bg-[#FDE344]">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>

                    {/* 6th card */}


                    <div className="w-full bg-[#F8F8F8] h-[17%] flex flex-col items-center justify-center hover:bg-[#FDE344]">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>


                    {/* 7th card */}
                    {/* <div className="w-full bg-[#F8F8F8] h-[9%] flex flex-col items-center justify-center hover:bg-[#FDE344]">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div> */}


                    {/* 8th card */}


                    {/* <div className="w-full bg-[#F8F8F8] h-[11%] flex flex-col items-center justify-center hover:bg-[#FDE344]">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div> */}

                    {/* 9th card */}


                    {/* <div className="w-full bg-[#F8F8F8] h-[9%] flex flex-col items-center justify-center hover:bg-[#FDE344]">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div> */}


                </div>



                {/* <div className="flex w-[77%] h-[25%]  justify-between items-center text-[#81899c]" >

                    7th card
                    <div className="w-[31%] bg-[#F8F8F8] h-[95%] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>


                    8th card

                    <div className="w-[31%] bg-[#F8F8F8] h-[85%] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>

                    9th card


                    <div className="w-[31%] bg-[#F8F8F8] h-[85%] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>

                </div> */}
            </div>






            {/* <div className="w-full h-[200vh]  flex flex-col items-center">
                <div className="h-[15%] w-[77%]  mt-[184px]   flex justify-between">
                    <div className="flex flex-col h-full w-[34%] ">

                        <p className="tracking-[.2em] w-full h-fit  text-base text-[#81899c]">TESTIMONIALS</p>
                        <span className="text-[64px]  w-full h-fit  tracking-tight	text-[#0E1C3C] leading-[1] font-semibold	mt-5">What our happy
                            clients say</span>




                    </div>
                    <div className="flex  h-full w-[15%]  justify-end items-center">
                        <button className="tracking-widest flex bg-[#0e1c3c] w-[210px] h-20  text-white justify-center items-center mb-3 hover:scale-95 transform transition-all duration-200 hover:flex-row-reverse">
                            <span className="text-xs leading-[1.2em]   font-medium ">All TESTIMONIALS </span>
                            <span className="ml-2 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>
                    </div>
                </div>
                Cards section


                <div className="flex w-[77%] h-[25%]  justify-between text-[#81899c]" >

                    1st card
                    <div className="w-[31%] bg-[#F8F8F8] h-[85%] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>


                    2nd card


                    <div className="w-[31%] bg-[#F8F8F8] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>

                    3rd card


                    <div className="w-[31%] bg-[#F8F8F8] h-[85%] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>



                </div>

                <div className="flex w-[77%] h-[25%]  justify-between text-[#81899c]" >
                    4th card
                    <div className="w-[31%] bg-[#F8F8F8] h-[85%] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>

                    5th card

                    <div className="w-[31%] bg-[#F8F8F8] h-[85%] mt-auto flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>

                    6th card


                    <div className="w-[31%] bg-[#F8F8F8] h-full flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>
                </div>


                <div className="flex w-[77%] h-[25%]  justify-between items-center text-[#81899c]" >

                    7th card
                    <div className="w-[31%] bg-[#F8F8F8] h-[95%] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>


                    8th card

                    <div className="w-[31%] bg-[#F8F8F8] h-[85%] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>

                    9th card


                    <div className="w-[31%] bg-[#F8F8F8] h-[85%] flex flex-col items-center justify-center">
                        <div className="w-[70%] h-fit  text-base font-medium leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div>
                    </div>

                </div>
            </div> */}



































        </>
    )
}

export default Testimonials
