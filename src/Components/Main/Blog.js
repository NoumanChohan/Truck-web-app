import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";




// import required modules
import { Pagination, Navigation } from "swiper";
const Blog = () => {
    const [swiper, setSwiper] = useState(null);


    return (
        <div className="w-full h-[120vh]  bg-[#F8F8F8]    flex flex-col items-center">
            <div className="h-[15%] w-[77%]  flex justify-between items-end">
                <div className="flex flex-col h-fit  w-[30%] ">

                    <p className="tracking-[.2em] w-full h-fit  text-base text-[#81899c]">OUR BLOGS</p>
                    <span className="text-[64px]  w-full  h-fit  tracking-tight	text-[#0E1C3C] leading-[1] font-semibold	mt-5">Recent news
                        & events</span>
                </div>





                <div className="flex h-fit w-[20%] justify-evenly  items-center ">
                    <button
                        className="h-[60px] bg-[#0E1C3C] w-[60px] rounded-full hover:scale-110 transition-transform flex justify-center items-center"
                        onClick={() => {
                            if (swiper) {
                                swiper.slidePrev(); // Go to previous slide
                            }
                        }}
                    >
                        <img className='' src="/Icons/arrow-left.png" alt="Previous" />
                    </button>
                    <button
                        className="h-[60px] bg-[#0E1C3C] w-[60px] rounded-full hover:scale-110 transition-transform flex justify-center items-center"
                        onClick={() => {
                            if (swiper) {
                                swiper.slideNext(); // Go to next slide
                            }
                        }}
                    >
                        <img src="/Icons/arrow-right.png" alt="Next" />
                    </button>
                </div>
            </div>


            <div className="flex w-[77%] h-[60%]  mt-[70px] justify-between text-[#81899c]" >



                <Swiper className="w-full h-[100%]"
                    spaceBetween={40}
                    slidesPerView={3}
                    loop={true}
                    onSlideChange={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    onSwiper={swiperInstance => setSwiper(swiperInstance)}
                    modules={[Navigation]}
                >
                    <SwiperSlide className=" "><div className="w-[100%] h-[85%]  flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[68%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/card-1.jpg)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>Recovery underway, logistics costs pressured</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
                        <span className='text-base mt-10'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[99%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[78%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/card-2.jpg)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>Hitting the pause button</span>
                        <p className='text-base mt-5 w-[90%]leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
                        <span className='text-base mt-10'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[85%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[62.5%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/card-3.jpg)' }}> </div>
                        <span className='font-bold text-2xl text-black mt-5'>Looking back and moving forward</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
                        <span className='text-base mt-10'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[99%]  flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[78%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/card-4.jpg)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>Hitting the pause button</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
                        <span className='text-base mt-10'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[85%]  flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[68%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/card-5.jpg)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>Recovery underway, logistics costs pressured</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400]'>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
                        <span className='text-base mt-10'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[99%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[78%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/card-6.jpg)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>Hitting the pause button</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
                        <span className='text-base mt-10'>Read Now</span>
                    </div>
                    </SwiperSlide>
                </Swiper>







            </div>
        </div>
    )
}

export default Blog
