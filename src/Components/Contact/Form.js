import React from 'react'

const Form = () => {
    return (
        <div className='w-full h-[140vh] bg-[#F8F8F8] flex flex-col  justify-between items-center'>
            <div className='w-[90%] h-[20%] font-sans-serif flex flex-col '>
                <p className="tracking-[.2em]  w-fit h-fit mt-[5%] text-base text-[#81899c]">CONTACT FORM</p>
                <p className='  h-fit w-[71%] mt-[7%] font-bold text-5xl tracking-tighter'>Type us a word</p>
            </div>

            <form className='w-[90%] h-[55%] bg-[#F8F8F8] flex flex-col'>
                <input className='w-full h-[17%]   pt-[10%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Full name" />
                <input className='w-full h-[17%]   pt-[10%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Email address" />
                <input className='w-full h-[17%]   pt-[10%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Company name" />
                <input className='w-full h-[17%]   pt-[10%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Your topic" />
                <input className='w-full h-[32%]   pt-[32%] leading-tight focus:outline-none bg-transparent border-b ' type="text" placeholder="Message" />
            </form>

            <div className="w-[70%] h-[80px] bg-[#0E1C3C] mr-[20%] text-white text-xs font-semibold 	flex justify-center items-center hover:scale-95 transform transition-all duration-200">
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
