import React from 'react'

const ChooseUs = () => {
    return (
        <div className='h-[90vh] w-full  flex flex-col items-center'>

            <div className=' h-full w-[77%] flex flex-col   '>
                <div className="flex flex-col h-[20%] mt-[184px]  w-full ">

                    <p className="tracking-[.2em] w-fit h-fit   text-base text-[#81899c]">WHY CHOOSE US</p>
                    <span className="text-[64px]  w-[40%] font-sans-serif h-[150px]  tracking-tight 	text-[#0E1C3C] leading-[1] font-semibold	mt-5">Advantages &
                        features</span>
                </div>

                <div className='w-full h-[35%]  mt-12 flex justify-between'>


                    <div className='h-full w-[23%] flex flex-col '>
                        <div className=' w-full h-[55%] flex  items-center'>
                            <div className="h-[100%] w-[50%]  rounded-full flex justify-center items-center "
                            >
                                <img src='/Icons/dashboard.png' className='h-16 w-16 animate-spin-slow'></img>
                            </div>

                        </div>
                        <span className='font-bold text-2xl text-black mt-5'>Personal dashboard</span>
                        <p className='text-base mt-4 w-[90%] leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                    </div>


                    <div className='h-full w-[23%] flex flex-col '>
                        <div className=' w-full h-[55%] flex  items-center'>
                            <div className="h-[100%] w-[50%]  rounded-full flex justify-center items-center "
                            >
                                <img src='/Icons/user.png' className='h-16 w-16 animate-spin-slow'></img>
                            </div>

                        </div>
                        <span className='font-bold text-2xl text-black mt-5'>Manage account</span>
                        <p className='text-base mt-4 w-[90%] leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                    </div>




                    <div className='h-full w-[23%] flex flex-col '>
                        <div className=' w-full h-[55%] flex  items-center'>
                            <div className="h-[100%] w-[50%]  rounded-full flex justify-center items-center "
                            >
                                <img src='/Icons/document.png' className='h-16 w-16 animate-spin-slow'></img>
                            </div>

                        </div>
                        <span className='font-bold text-2xl text-black mt-5'>Access reports</span>
                        <p className='text-base mt-4 w-[90%] leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                    </div>




                    <div className='h-full w-[23%] flex flex-col '>
                        <div className=' w-full h-[55%] flex  items-center'>
                            <div className="h-[100%] w-[50%]  rounded-full flex justify-center items-center "
                            >
                                <img src='/Icons/atm-card.png' className='h-16 w-16 animate-spin-slow'></img>
                            </div>

                        </div>
                        <span className='font-bold text-2xl text-black mt-5'>Invoice payment</span>
                        <p className='text-base mt-4 w-[90%] leading-[1.8] text-[#81899c] tracking-tight font-[400]'> Access dashboard for metrics & reports such as notifications, etc.</p>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ChooseUs
