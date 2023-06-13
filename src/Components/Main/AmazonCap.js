import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";


// import required modules
import { Autoplay, EffectCards } from "swiper";

const AmazonCap = () => {
    return (
        <div className='h-[99vh] w-full  flex flex-col '>

            {/* bg 1st div */}

            <div className='h-[15%] w-full '></div>

            {/* bg 2nd div */}
            <div className='h-[70%] w-full  bg-cover bg-center	 ' style={{ backgroundImage: "url('/Images/amazon-bg.png')" }}></div>




            {/* REVIEWS CARD */}


            <div className="absolute w-[400px] bg-white mt-[470px] ml-[65%]  h-[440px] rounded-[40px] shadow-md">

                <Swiper
                    effect={"cards"}
                    grabCursor={true}
                    loop={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    modules={[EffectCards, Autoplay]}
                    className="mySwiper h-full w-full"
                >
                    <SwiperSlide style={{ backgroundColor: "#F8F8F8	", borderRadius: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}><div className="w-[70%] h-fit mt-[60px]  text-[#81899c] text-2xl font-semibold leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: "#F8F8F8", borderRadius: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}><div className="w-[70%] h-fit mt-[60px] text-[#81899c] text-2xl font-semibold leading-[30px] ">We’re so grateful for your generous provision of masks for us to distribute to the homeless through our program.                </div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: "#F8F8F8	", borderRadius: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}><div className="w-[70%] h-fit mt-[60px] text-[#81899c] text-2xl font-semibold leading-[30px] ">As a novice Amazon Seller, I hired TrackTruck to organize shipping from China to Dallas.</div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div></SwiperSlide>
                    <SwiperSlide style={{ backgroundColor: "#F8F8F8", borderRadius: "40px", display: "flex", flexDirection: "column", justifyContent: "center", alignItems: "center" }}><div className="w-[70%] h-fit mt-[60px] text-[#81899c] text-2xl font-semibold leading-[30px] ">                    We’re so grateful for your generous provision of masks for us to distribute to the homeless through our program.                </div>
                        <div className="flex w-[70%]  h-fit justify-start items-center mt-10">
                            <img className="h-[60px] w-[60px]" src="Images/cards-a-1.png"></img>
                            <p className="font-bold text-lg text-black ml-4">Ross C. McIntyre</p>
                        </div></SwiperSlide>
                </Swiper>


            </div>



            {/* bg 3rd div */}
            <div className='h-[15%] w-full bg-[#F8F8F8]'></div>


            {/* YELLOW CARD */}


            <div className='bg-[#FDE344] h-[300px] w-[450px] ml-[210px] mb-[650px] absolute flex flex-col justify-center' style={{ backgroundImage: "url('/Images/amazon-card-1.png')" }}>
                <span className='h-[90px] w-[90px]  ml-[80px] '><img className="w-[90px] h-[90px]" src="/Icons/trophy-cup.png"></img></span>

                <button className="tracking-normal flex ml-[80px]  w-fit h-14  text-white  items-center hover:flex-row-reverse">
                    <span className="text-2xl leading-[1.2em] text-black  font-bold ">Amazon </span>
                    <span className="ml-1 mr-1 text-black"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    </span>
                </button>

                <p className='text-xs w-[230px] h-7  -tracking-[-0.2em] ml-[80px]'>2021 CUSTOMER OBSESSION</p>
            </div>


            {/* BLUE CARD */}


            <div className='bg-[#0E1C3C] h-[300px] w-[450px] ml-[700px] mb-[650px] absolute flex flex-col justify-center ' style={{ backgroundImage: "url('/Images/amazon-card-1.png')" }}>

                <span className='h-[90px] w-[90px] ml-[80px] '><img className="w-[90px] h-[90px]" src="/Icons/trophy-cup.png"></img></span>


                <button className="tracking-normal flex ml-[80px] w-fit h-14  text-white  items-center hover:flex-row-reverse">
                    <span className="text-2xl leading-[1.2em]   font-bold ">Home Depot </span>
                    <span className="ml-1 mr-1"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    </span>
                </button>

                <p className='text-xs w-[260px] h-7  -tracking-[-0.2em] ml-[80px] text-[#81899c]'>2021 LTL CARRIER OF THE YEAR</p>
            </div>



        </div>
    )
}

export default AmazonCap
