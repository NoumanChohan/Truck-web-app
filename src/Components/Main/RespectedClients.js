import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";


// import required modules
import { Autoplay, Pagination, Navigation } from "swiper";


const RespectedClients = () => {
    return (
        <div className="h-[90vh] w-full  flex justify-center">
            <div className=' h-full w-[77%] flex justify-between'>
                <div className="flex flex-col h-fit  w-[35%] ">

                    <p className="tracking-[.2em] w-fit h-fit mt-[124px]  text-base text-[#81899c]">RESPECTED</p>
                    <span className="text-[64px]  w-[70%]  h-fit  tracking-tight	text-[#0E1C3C] leading-[1] font-semibold	mt-5">Clients
                        & partners</span>
                </div>





                <div className=' h-full w-[65%] flex  flex-col'>
                    <div className='w-full h-[14%]  mt-[164px] flex '>
                        <p className='text-[#81899c]  leading-[1.8] tracking-tight font-[400] h-full w-[70%]'>Track//Truck is in the small-business business. Built on solid, long-term relationships, the company enables thousands of independent transportation providers to operate their own businesses as members of the Track//Truck network.</p>
                        <div className="flex  h-full w-[30%]  justify-end ">
                            <button className="tracking-widest flex bg-[#0e1c3c] w-[210px] h-20  text-white justify-center items-center hover:scale-95 transform transition-all duration-200 hover:flex-row-reverse">
                                <span className="text-xs leading-[1.2em]   font-medium  ">VIEW ALL</span>
                                <span className="ml-2 mr-2 "><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-5 h-5">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                                </span>
                            </button>
                        </div>
                    </div>


                    {/* <div className=' w-full h-[31%] mt-[20px]'> */}

                    <Swiper
                        spaceBetween={0}
                        slidesPerView={3}
                        loop={true}
                        onSlideChange={true}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: true,
                        }}
                        // pagination={{
                        //     clickable: true,
                        // }}
                        // navigation={true}
                        modules={[Autoplay]}
                        className="mySwiper h-[23.5%]  w-full mt-7"
                    >
                        <SwiperSlide style={{ backgroundImage: "url('/Images/client-card-1.png')" }} ></SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: "url('/Images/client-card-2.png')" }} ></SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: "url('/Images/client-card-3.png')" }} ></SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: "url('/Images/client-card-4.png')" }} ></SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: "url('/Images/client-card-5.png')" }} ></SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: "url('/Images/client-card-6.png')" }} ></SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: "url('/Images/client-card-7.png')" }} ></SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: "url('/Images/client-card-8.png')" }} ></SwiperSlide>
                        <SwiperSlide style={{ backgroundImage: "url('/Images/client-card-9.png')" }} ></SwiperSlide>




                    </Swiper>
                    {/* </div> */}
                </div>





            </div>
        </div>
    );
};

export default RespectedClients;
