import React from 'react'

const Footer = () => {
    return (
        <div className='w-full h-[100vh]  flex flex-col'>
            <div className='w-full h-[13%] '></div>
            <div className='w-[54%] h-[230px] bg-[#FDE344]  absolute ml-[190px] mt-1 flex justify-evenly '>
                <div className='h-full w-[27%]  flex flex-col '>
                    <span className='tracking-widest text-base font-sans-serif font-normal mt-[80px] w-full '>NEWSLETTER</span>
                    <span className=' text-4xl font-sans-serif font-bold mt-5'>Stay informed</span>

                </div>


                <div className='h-full w-[50%]  flex '>
                    <div className='bg-[#FDE344] w-[90%] h-[60px] mt-[100px] flex'>
                        <input className='bg-[#FDE344] w-full h-full  placeholder-black' type='email' placeholder='Email adress' >

                        </input>

                    </div>
                    <button className='h-[50px] w-[50px]  mt-[105px]'><img className='h-full w-full  ' src='/Icons/black-arrow-right.png'></img></button>
                </div>
            </div>





            <div className='w-full h-[70%] bg-[#0e1c3c] bg-cover bg-center flex' style={{ backgroundImage: "url(http://webdesign-finder.com/tracktruck/wp-content/uploads/2021/06/texture3.png)" }}>



                <div className='h-[70%] w-[30%] mt-2 flex justify-center items-center'><img src='/Images/footer-logo.png' /></div>

                <div className='h-[42%] w-[70%]  mt-[225px] flex flex-col justify-between'>
                    <div className='w-[45%] h-[25%] text-white text-3xl font-sans-serif font-bold leading-none'>End-to-end transportation and custom logistics solutions</div>

                    <div className='w-[80%] h-[50%] flex justify-between'>

                        <div className='h-full w-[25%]  flex flex-col'>
                            <span className='font-bold text-lg text-white mt-2'>Contact us</span>
                            <span className='text-[#81899c] mt-3'>TrackTruck@support.com</span>
                            <span className='text-[#81899c] mt-1'>+(123)123-456-7890</span>
                        </div>

                        <div className='h-full w-[25%]  flex flex-col'>
                            <span className='font-bold text-lg text-white mt-2'>Visit us</span>
                            <span className='text-[#81899c]  mt-3 w-[84%] leading-relaxed'>1335 Butternut Lane, Benton, IL 62812</span>

                        </div>


                        <div className='h-full w-[35%] '>
                            <div className=' w-full h-10 flex text-white justify-between items-center '>
                                <span className='text-xs font-semibold tracking-widest w-[24%] hover:scale-150 transition-transform'>FOLLOW US</span>
                                <span className='w-[13%] h-[1px] bg-white '></span>
                                <img src='/Icons/facebook.png' className='text-sm h-4 w-4 hover:scale-150 transition-transform'></img>
                                <img src='/Icons/instagram.png' className='text-sm h-6 w-6 hover:scale-150 transition-transform'></img>
                                <img src='/Icons/twitter.png' className='text-sm h-4 w-4 hover:scale-150 transition-transform'></img>
                            </div>
                        </div>



                    </div>
                </div>
            </div>







            <div className='w-full h-[17%] tracking-[.17em] text-xs text-[#81899c] font-normal pl-[210px] pt-[70px]'>© 2021 TRACK TRUCK CO, ALL RIGHTS RESERVED</div>

        </div>
    )
}

export default Footer
