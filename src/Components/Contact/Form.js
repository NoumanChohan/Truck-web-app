import React from 'react'

const Form = () => {
    return (


        <div className='w-full h-[140vh] xs:h-[100vh] sm:h-[110vh]  bg-[#F8F8F8] flex flex-col  justify-between  xs:justify-evenly sm:justify-evenly items-center'>

            {/* form header */}
            <div className='w-[90%] h-[20%] xl:w-[70%] 2xl:w-[60%]  font-sans-serif flex flex-col '>
                <p className="tracking-[.2em]  w-fit h-fit mt-[5%] sm:mt-[7%] text-base text-[#81899c]">CONTACT FORM</p>
                <p className='  h-fit w-[71%] mt-[7%] sm:mt-[3%] font-bold text-5xl tracking-tighter'>Type us a word</p>
            </div>


            {/* form til lg without including lg */}
            <form className='w-[90%] h-[55%] sm:h-[50%] bg-[#F8F8F8] flex flex-col lg:hidden'>
                <input className='w-full h-[17%]   pt-[8%]  md:pt-[5%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Full name" />
                <input className='w-full h-[17%]   pt-[8%]  md:pt-[5%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Email address" />
                <input className='w-full h-[17%]   pt-[8%]  md:pt-[5%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Company name" />
                <input className='w-full h-[17%]   pt-[8%]  md:pt-[5%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Your topic" />
                <input className='w-full h-[32%]   pt-[24%] sm:pt-[20%] md:pt-[15%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Message" />
            </form>


            {/* form for lg or above */}

            <form className='w-[90%] h-[50%] xl:h-[40%] xl:w-[70%] 2xl:w-[60%]  bg-[#F8F8F8] flex flex-col justify-between xxs:hidden xs:hidden sm:hidden md:hidden lg:flex '>

                <div className=' w-full h-[20%]  flex justify-between'>
                    <input className='w-[45%] h-full   pt-[6%] xl:pt-[4%]   leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Full name" />
                    <input className='w-[45%] h-full   pt-[6%] xl:pt-[4%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Email address" />
                </div>
                <div className=' w-full h-[20%]  flex justify-between'>
                    <input className='w-[45%] h-full   pt-[6%] xl:pt-[4%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Company name" />
                    <input className='w-[45%] h-full   pt-[6%] xl:pt-[4%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Your topic" />
                </div>
                <input className='w-full h-[32%]    pb-[10%]  leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Message" />

            </form>



            {/* form button */}
            <div className="w-[70%] h-[80px] bg-[#0E1C3C] mr-[20%] sm:w-[50%] sm:text-sm sm:mr-[40%] text-white text-xs md:text-base md:w-[30%] md:mr-[60%] xl:w-[20%] xl:mr-[50%] 2xl:mr-[40%] font-semibold 	flex justify-center items-center hover:scale-95 transform transition-all duration-200">
                <button className="tracking-widest flex  hover:flex-row-reverse  h-fit w-fit  items-center">
                    <span className='h-fit w-fit'>SEND MESSAGE</span>
                    <span className="ml-2 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                    </span>
                </button>

            </div>

        </div>
    )
}

export default Form
