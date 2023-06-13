import React from 'react'

const AboutUs = () => {
    return (
        <div className='w-full h-[70vh] bg-[#F8F8F8] flex '>
            <div className="h-[72%] w-[77%]  mt-[184px] ml-[207px]  flex justify-between">
                <div className="flex flex-col text-white  w-[70%] h-full">
                    <span className="tracking-[.2em] text-base text-[#81899c]">ABOUT US</span>
                    <span className="text-[64px]  w-[60%] h-[50%]  tracking-wide	text-[#0E1C3C] leading-[1.2] font-semibold	mt-4">Optimize Dispatching with Track-Truck</span>
                    {/* <p className="text-[#81899c] mt-10 leading-[1.8] tracking-tight font-sans-serif font-[400] text-left">Track//Truck, Inc. specializes in providing freight shipping solutions whenever & wherever you need them. As an independent freight agency, we have access to one of the largest logistics networks in the industry, which means your business has access to this vast network too.</p> */}
                    <p className="text-[#81899c]  mt-6 leading-[1.8] tracking-tight font-[400] text-left">We are your trusted partner in trucking and dispatching, simplifying the process for increased efficiency and profitability. Our experienced team leverages cutting-edge technology and personalized solutions to streamline your operations and enhancing productivity.</p>
                </div>
                {/* <div className="flex flex-col text-[#81899c] w-[50%] mt-[208px] bg-pink-400 tracking-tight items-start  leading-[1.8] font-[400]">
                    <p>In addition to our commitment to quality service, we are dedicated to safety. You can trust that Track//Truck, Inc. will keep your supply chain moving and get your freight delivered safely and on-time.</p>
                    <div className=" flex mt-8">
                        <img src="Images/track-avatar.png"></img>
                        <span className="flex flex-col ml-9 ">
                            <p className="font-bold text-lg text-black mt-3">Ross C. McIntyre</p>
                            <p className="text-xs leading-[1.8] font-medium tracking-[0.17em] mt-1">FOUNDER</p>
                        </span>
                        <img src="Images/founder-sign.png" className="ml-7"></img>
                    </div>
                </div> */}

            </div>
        </div>
    )
}

export default AboutUs
