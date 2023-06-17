import React from 'react'

const ChooseUs = () => {
    return (
        <div className='h-[200vh] i5:h-[250vh] xs:h-[180vh] w-full   flex flex-col justify-between items-center'>

            <div className=' h-[9%] w-[90%] mt-[20%] bg-green-200 flex flex-col   '>


                <p className="tracking-[.2em] w-fit h-fit   text-base text-[#81899c]">WHY CHOOSE US</p>
                <span className="text-4xl i5:text-3xl   font-sans-serif h-fit w-fit  tracking-tight 	text-[#0E1C3C] leading-[1] font-bold	mt-5">Advantages &
                    features</span>

            </div>


            <div className='w-[90%] h-[90%]  mt-12 flex flex-col justify-between'>


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


        </div>
    )
}

export default ChooseUs
