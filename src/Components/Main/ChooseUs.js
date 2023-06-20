import React from 'react'

const ChooseUs = () => {
    return (
        <div className='h-[200vh] i5:h-[250vh] xs:h-[180vh] md:h-[100vh] lg:h-[80vh]  w-full   flex flex-col justify-between items-center'>

            <div className=' h-[9%] md:h-[10%] lg:h-[11%] xl:h-[20%] xl:w-[95%] w-[90%] mt-[20%] lg:mt-[10%] 2xl:w-[77%] 2xl:mt-[8%]  flex flex-col   '>


                <p className="tracking-[.2em] w-fit h-fit   text-base text-[#81899c]">WHY CHOOSE US</p>
                <span className="text-4xl i5:text-3xl lg:text-5xl xl:text-6xl xl:w-[50%] 2xl:w-[40%]  font-sans-serif h-fit w-fit  tracking-tight 	text-[#0E1C3C] leading-[1] font-bold	mt-5 lg:mt-auto">Benefits & Attributes</span>

            </div>


            <div className='w-[90%] h-[90%]  mt-12 flex flex-col justify-between md:hidden'>


                <div className='h-[25%] w-full flex flex-col shadow-2xl  '>
                    <div className=' w-full h-[55%] flex  items-center'>
                        <div className="h-[100%] w-[50%] mx-auto  rounded-full flex justify-center items-center "
                        >
                            <img src='/Icons/dashboard.png' className='h-16 w-16 animate-spin-slow'></img>
                        </div>

                    </div>
                    <span className='font-bold text-2xl text-black mt-5 h-fit w-full text-center'>Personal dashboard</span>
                    <p className='text-base mt-[4%] h-fit w-full leading-[1.8] text-[#81899c] text-center tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                </div>


                <div className='h-[25%]  w-full flex flex-col bg-[#F8F8F8] hover:bg-[#FDE344]'>
                    <div className=' w-full h-[55%] flex  items-center'>
                        <div className="h-[100%] w-[50%] mx-auto  rounded-full flex justify-center items-center "
                        >
                            <img src='/Icons/user.png' className='h-16 w-16 animate-spin-slow'></img>
                        </div>

                    </div>
                    <span className='font-bold text-2xl text-black h-fit w-full mt-5 text-center'>Manage account</span>
                    <p className='text-base mt-[4%] h-fit w-full text-center leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                </div>




                <div className='h-[25%]  w-full flex flex-col  shadow-2xl'>
                    <div className=' w-full h-[55%] flex  items-center'>
                        <div className="h-[100%] w-[50%] mx-auto rounded-full flex justify-center items-center "
                        >
                            <img src='/Icons/document.png' className='h-16 w-16 animate-spin-slow'></img>
                        </div>

                    </div>
                    <span className='font-bold text-2xl text-black mt-5 h-fit w-full text-center'>Access reports</span>
                    <p className='text-base mt-[4%] h-fit w-full text-center leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                </div>




                <div className='h-[25%]  w-full flex flex-col bg-[#F8F8F8] hover:bg-[#FDE344]'>
                    <div className=' w-full h-[55%] flex  items-center'>
                        <div className="h-[100%] w-[50%] mx-auto rounded-full flex justify-center items-center "
                        >
                            <img src='/Icons/atm-card.png' className='h-16 w-16 animate-spin-slow'></img>
                        </div>

                    </div>
                    <span className='font-bold text-2xl text-black mt-5 h-fit w-full text-center'>Invoice payment</span>
                    <p className='text-base mt-[4%] h-fit w-full text-center leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                </div>
            </div>

            {/* cards for md */}

            <div className='w-[90%] xl:w-[95%] h-[70%] lg:h-[60%] 2xl:w-[77%]   flex flex-col justify-between i5:hidden xxs:hidden xs:hidden sm:hidden md:flex lg:flex-row'>

                <div className='flex w-full lg:w-[48%] h-[48%] lg:h-[65%] 2xl:mt-[5%]  justify-between'>
                    <div className='h-full w-[47%] flex flex-col bg-[#F8F8F8] hover:bg-[#FDE344] '>
                        <div className=' w-full h-[55%] flex'>
                            <div className="h-[100%] w-[50%] mx-auto rounded-full flex justify-center items-center ">
                                <img src='/Icons/dashboard.png' className='h-16 w-16 animate-spin-slow'></img>
                            </div>

                        </div>
                        <span className='font-bold text-2xl text-black mt-5 h-fit w-full text-center'>Dashboard</span>
                        <p className='text-base mt-[4%] h-fit w-full leading-[1.8] text-[#81899c] text-center tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                    </div>


                    <div className='h-full  w-[47%] flex flex-col bg-[#F8F8F8] hover:bg-[#FDE344]'>
                        <div className=' w-full h-[55%] flex  items-center'>
                            <div className="h-[100%] w-[50%] mx-auto  rounded-full flex justify-center items-center "
                            >
                                <img src='/Icons/user.png' className='h-16 w-16 animate-spin-slow'></img>
                            </div>

                        </div>
                        <span className='font-bold text-2xl text-black h-fit w-full mt-5 text-center'>Manage account</span>
                        <p className='text-base mt-[4%] h-fit w-full text-center leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                    </div>
                </div>

                <div className='flex w-full h-[48%] lg:w-[49%] lg:h-[65%] 2xl:mt-[5%] justify-between'>
                    <div className='h-full w-[47%] flex flex-col  bg-[#F8F8F8] hover:bg-[#FDE344]  '>
                        <div className=' w-full h-[55%] flex'>
                            <div className="h-[100%] w-[50%] mx-auto rounded-full flex justify-center items-center ">
                                <img src='/Icons/document.png' className='h-16 w-16 animate-spin-slow'></img>
                            </div>

                        </div>
                        <span className='font-bold text-2xl text-black mt-5 text-center h-fit w-full'>Access reports</span>
                        <p className='text-base mt-[4%] h-fit w-full text-center leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                    </div>


                    <div className='h-full  w-[47%] flex flex-col bg-[#F8F8F8] hover:bg-[#FDE344]'>
                        <div className=' w-full h-[55%] flex  items-center'>
                            <div className="h-[100%] w-[50%] mx-auto  rounded-full flex justify-center items-center "
                            >
                                <img src='/Icons/atm-card.png' className='h-16 w-16 animate-spin-slow'></img>
                            </div>

                        </div>
                        <span className='font-bold text-2xl text-black h-fit w-full mt-5 text-center'>Invoice payment</span>
                        <p className='text-base mt-[4%] h-fit w-full text-center leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                    </div>
                </div>

            </div>


        </div>
    )
}

export default ChooseUs
