import React from 'react'

const Cards = () => {
    return (
        <div className='w-full h-[180vh] bg-[#F8F8F8]  flex flex-col justify-evenly items-center'>
            <div className='w-[90%] h-[30%] bg-[#FDE344] shadow-lg flex flex-col justify-center pl-5'>
                <img className='h-[60px] w-[60px] ' src='/Icons/cellphone.png' />
                <p className='text-2xl font-bold h-fit w-fit mt-[5%]'>Call us</p>
                <p className='tracking-wide text-lg h-fit w-fit mt-[5%]'><span className='h-fit w-fit '>Account:</span><span className='h-fit w-fit text-[#81899c]'>+(92) 301 5678987</span></p>
                <p className='tracking-wide text-lg h-fit w-fit mt-[5%]'><span className='h-fit w-fit '>Support:</span><span className='h-fit w-fit text-[#81899c]'>+(92) 301 5678987</span></p>
            </div>

            <div className='w-[90%] h-[30%] bg-[#0E1C3C] shadow-lg flex flex-col justify-center pl-5 text-white'>
                <img className='h-[60px] w-[60px] ' src='/Icons/mail.png' />
                <p className='text-2xl font-bold h-fit w-fit mt-[5%]'>Write us</p>
                <p className='tracking-wide  h-fit w-fit mt-[5%]'>Business:</p>
                <p className='tracking-widest text-lg h-fit w-fit text-[#81899c]'>tracktruck@gmail.com</p>
                <p className='tracking-wide  h-fit w-fit mt-[5%]'>Support:</p>
                <p className='tracking-widest text-lg h-fit w-fit text-[#81899c]'>tracktruck@gmail.com</p>            </div>


            <div className='w-[90%] h-[25%] bg-white shadow-lg flex flex-col justify-center pl-5'>
                <img className='h-[60px] w-[60px]' src='/Icons/home2.png' />
                <p className='text-2xl font-bold h-fit w-fit mt-[5%]'>Visit us</p>
                <p className=' h-fit w-fit mt-[5%] text-[#81899c]'>1335 Butternut Lane, Benton, IL 62812</p>
            </div>
        </div>
    )
}

export default Cards
