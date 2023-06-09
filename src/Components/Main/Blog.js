import React, { useRef, useState } from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css/bundle";




// import required modules
import { Pagination, Navigation } from "swiper";
const Blog = () => {
    const [swiper, setSwiper] = useState(null);


    return (
        <div className="w-full h-[130vh] i5:h-[170vh] xs:h-[120vh] lg:h-[110vh] 2xl:h-[140vh] bg-[#f8f8f8]    flex flex-col items-center">
            <div className="h-[23%] xs:h-[20%] md:h-[17%] lg:h-[17%] xl:w-[95%] xl:h-[19%]  w-[90%] 2xl:w-[77%] 2xl:h-[16%] 2xl:mt-[8%] mt-[20%] md:mt-[15%] lg:mt-[10%]  flex flex-col  lg:flex-wrap">
                {/* <div className="flex flex-col h-fit  w-[30%] "> */}

                <p className="tracking-[.2em] w-fit h-fit text-base text-[#81899c]">OUR BLOGS</p>
                <span className="text-4xl i5:text-3xl lg:text-5xl w-fit md:w-[50%] lg:w-[50%]    h-fit  tracking-tight	text-[#0E1C3C] leading-[1.03] font-semibold 	mt-[5%]  ">Choose Track-Truck for Success</span>
                {/* </div> */}





                <div className="flex h-fit w-[50%] md:w-[30%] mt-auto  lg:h-[50%] lg:w-[25%] xl:w-[15%] 2xl:w-[12%] 2xl:justify-between lg:ml-auto  justify-evenly  items-center ">
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


            <div className="flex w-[90%] h-[61%] md:h-[55%] lg:h-[66%] xs:h-[58%]  mt-[70px] xl:w-[95%] xl:h-[66%] xl:mt-[70px] xl:justify-between 2xl:w-[77%] 2xl:h-[55%]  text-[#81899c]" >



                <Swiper className="w-full h-[100%]"
                    spaceBetween={40}
                    slidesPerView={1}
                    loop={true}
                    onSlideChange={true}
                    autoplay={{
                        delay: 2500,
                        disableOnInteraction: true,
                    }}
                    onSwiper={swiperInstance => setSwiper(swiperInstance)}
                    modules={[Navigation]}
                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                        },
                        1280: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    {/* <div className='w-full h-full flex justify-between base:hidden xxs:hidden xs:hidden sm:hidden md:flex'> */}
                    <SwiperSlide className=" "><div className="w-[100%]  h-[100%]  flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[50%] lg:h-[55%] xs:h-[60%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-1.png)' }}></div>
                        <span className='font-bold text-2xl xs:text-xl text-black mt-[5%] h-fit w-fit'>Transforming the Transportation Industry</span>
                        <p className='text-base  mt-[5%] h-fit w-fit leading-[1.8] tracking-tight font-[400] '>Explore the advancements and implications of autonomous trucking technology, including benefits, . . .</p>
                        <button className='text-base h-fit w-fit mt-[10%] xs:mt-[5%]'>Read Now</button>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%]  h-[100%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[60%] xs:h-[70%] lg:h-[75%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-2.png)' }}></div>
                        <span className='font-bold text-2xl xs:text-xl text-black mt-[5%] h-fit w-fit'>Fleet Management and Optimization</span>
                        <p className='text-base  mt-[5%] h-fit w-fit leading-[1.8] tracking-tight font-[400]'> Provide practical advice and strategies for fleet managers to optimize their operations, reduce costs, . . .</p>
                        <span className='text-base h-fit w-fit mt-[10%] xs:mt-[5%]'>Read Now</span>
                    </div>
                    </SwiperSlide>
                    {/* </div> */}

                    <SwiperSlide className=" "><div className="w-[100%] h-[100%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[50%] xs:h-[60%] lg:h-[55%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-3.png)' }}> </div>
                        <span className='font-bold text-2xl xs:text-xl text-black mt-[5%] h-fit w-fit'>Green Initiatives in the Trucking Industry</span>
                        <p className='text-base  mt-[5%] h-fit w-fit leading-[1.8] tracking-tight font-[400] '>Discuss innovative sustainability practices in the trucking industry, such as electric vehicles, . . .</p>
                        <span className='text-base h-fit w-fit mt-[10%] xs:mt-[5%]'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[100%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[60%] xs:h-[70%] lg:h-[75%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-4.png)' }}></div>
                        <span className='font-bold text-2xl xs:text-xl text-black mt-[5%] h-fit w-fit'>Navigating Compliance in the Trucking Sector</span>
                        <p className='text-base  mt-[5%] h-fit w-fit leading-[1.8] tracking-tight font-[400]   '>Examine the latest regulatory changes and compliance requirements impacting the trucking industry,. . .</p>
                        <span className='text-base h-fit w-fit mt-[10%] xs:mt-[5%]'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[100%]  flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[50%] xs:h-[60%] lg:h-[55%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-5.png)' }}></div>
                        <span className='font-bold text-2xl xs:text-xl text-black mt-[5%] h-fit w-fit'>The Role of Technology in Transforming Last-Mile Delivery</span>
                        <p className='text-base  mt-[5%] h-fit w-fit leading-[1.8] tracking-tight font-[400] '>Explore the influence of technology, such as route optimization software, delivery tracking systems, . . .</p>
                        <span className='text-base h-fit w-fit mt-[10%] xs:mt-[5%]'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[100%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[60%] xs:h-[70%] lg:h-[75%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-6.png)' }}></div>
                        <span className='font-bold text-2xl xs:text-xl text-black mt-[5%] h-fit w-fit'>Attract and Retain Trucking Talent</span>
                        <p className='text-base  mt-[5%] h-fit w-fit leading-[1.8] tracking-tight font-[400]'>Discuss the ongoing driver shortage in the trucking industry and suggest effective recruitment and . . .</p>
                        <span className='text-base h-fit w-fit mt-[10%] xs:mt-[5%]'>Read Now</span>
                    </div>
                    </SwiperSlide>
                </Swiper>







            </div>

            {/* for xl and above */}
            {/* <div className="flex w-[95%] h-[66%] 2xl:w-[77%] 2xl:h-[55%] mt-[70px] justify-between text-[#81899c] i5:hidden xxs:hidden xs:hidden sm:hidden md:hidden lg:hidden xl:flex" >



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
                    <SwiperSlide className=" "><div className="w-[100%] h-[90%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[68%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-1.png)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>Transforming the Transportation Industry</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] h-fit  '>Explore the advancements and implications of autonomous trucking technology, including benefits, . . .</p>
                        <button className='text-base mt-[5%] h-fit w-fit'>Read Now</button>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[100%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[78%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-2.png)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>Fleet Management and Optimization</span>
                        <p className='text-base mt-5 w-[90%]leading-[1.8] tracking-tight font-[400] '>Provide practical advice and strategies for fleet managers to optimize their operations, reduce costs, . . .</p>
                        <button className='text-base mt-[5%] h-fit w-fit'>Read Now</button>                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[90%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[68%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-3.png)' }}> </div>
                        <span className='font-bold text-2xl text-black mt-5'>Green Initiatives in the Trucking Industry</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>Discuss innovative sustainability practices in the trucking industry, such as electric vehicles, . . .</p>
                        <span className='text-base mt-[5%] h-fit w-fit'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[100%]  flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[78%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-4.png)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>Navigating Compliance in the Trucking Sector</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>Examine the latest regulatory changes and compliance requirements impacting the trucking industry,. . .</p>
                        <span className='text-base mt-[5%] h-fit w-fit'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[90%]  flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[68%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-5.png)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>The Role of Technology in Transforming Last-Mile Delivery</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400]'>Explore the influence of technology, such as route optimization software, delivery tracking systems, . . .</p>
                        <span className='text-base mt-[5%] h-fit w-fit'>Read Now</span>
                    </div>
                    </SwiperSlide>

                    <SwiperSlide className=" "><div className="w-[100%] h-[100%]   flex flex-col">
                        <div className="w-full bg-[#F8F8F8] h-[78%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-6.png)' }}></div>
                        <span className='font-bold text-2xl text-black mt-5'>Attract and Retain Trucking Talent</span>
                        <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>Discuss the ongoing driver shortage in the trucking industry and suggest effective recruitment and . . .</p>
                        <span className='text-base mt-[5%] h-fit w-fit'>Read Now</span>
                    </div>
                    </SwiperSlide>
                </Swiper>







            </div> */}

        </div>
    )
}

export default Blog











{/* <div className="w-full h-[120vh]  bg-[#F8F8F8]    flex flex-col items-center">
<div className="h-[15%] w-[77%]  flex justify-between items-end">
    <div className="flex flex-col h-fit  w-[30%] ">

        <p className="tracking-[.2em] w-full h-fit  text-base text-[#81899c]">OUR BLOGS</p>
        <span className="text-[64px]  w-full  h-fit  tracking-tight	text-[#0E1C3C] leading-[1.03] font-semibold 	mt-5">Choose Track-Truck for Success</span>
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
            <div className="w-full bg-[#F8F8F8] h-[68%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-1.png)' }}></div>
            <span className='font-bold text-2xl text-black mt-5'>Recovery underway, logistics costs pressured</span>
            <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
            <span className='text-base mt-10'>Read Now</span>
        </div>
        </SwiperSlide>

        <SwiperSlide className=" "><div className="w-[100%] h-[99%]   flex flex-col">
            <div className="w-full bg-[#F8F8F8] h-[78%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-2.png)' }}></div>
            <span className='font-bold text-2xl text-black mt-5'>Hitting the pause button</span>
            <p className='text-base mt-5 w-[90%]leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
            <span className='text-base mt-10'>Read Now</span>
        </div>
        </SwiperSlide>

        <SwiperSlide className=" "><div className="w-[100%] h-[85%]   flex flex-col">
            <div className="w-full bg-[#F8F8F8] h-[62.5%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-3.png)' }}> </div>
            <span className='font-bold text-2xl text-black mt-5'>Looking back and moving forward</span>
            <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
            <span className='text-base mt-10'>Read Now</span>
        </div>
        </SwiperSlide>

        <SwiperSlide className=" "><div className="w-[100%] h-[99%]  flex flex-col">
            <div className="w-full bg-[#F8F8F8] h-[78%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-4.png)' }}></div>
            <span className='font-bold text-2xl text-black mt-5'>Hitting the pause button</span>
            <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
            <span className='text-base mt-10'>Read Now</span>
        </div>
        </SwiperSlide>

        <SwiperSlide className=" "><div className="w-[100%] h-[85%]  flex flex-col">
            <div className="w-full bg-[#F8F8F8] h-[68%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-5.png)' }}></div>
            <span className='font-bold text-2xl text-black mt-5'>Recovery underway, logistics costs pressured</span>
            <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400]'>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
            <span className='text-base mt-10'>Read Now</span>
        </div>
        </SwiperSlide>

        <SwiperSlide className=" "><div className="w-[100%] h-[99%]   flex flex-col">
            <div className="w-full bg-[#F8F8F8] h-[78%] flex flex-col items-center justify-center bg-cover bg-center" style={{ backgroundImage: 'url(/Images/blog-6.png)' }}></div>
            <span className='font-bold text-2xl text-black mt-5'>Hitting the pause button</span>
            <p className='text-base mt-5 w-[90%] leading-[1.8] tracking-tight font-[400] '>After some quality time in Florida. I am back to looking at where the economy is headed. After some</p>
            <span className='text-base mt-10'>Read Now</span>
        </div>
        </SwiperSlide>
    </Swiper>







</div>
</div> */}