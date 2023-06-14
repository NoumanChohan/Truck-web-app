import React from 'react'

const ContactFooter = () => {
    return (
        // main div 
        <div className='w-full h-[250vh] bg-[#F8F8F8]  xs:h-[160vh] sm:h-[160vh]  flex flex-col'>

            {/* space div  */}
            <div className='w-full h-[5%]  '></div>




            {/* bg blue div  */}
            <div className='w-full h-[84%] bg-[#0e1c3c] bg-cover bg-center flex flex-col items-center' style={{ backgroundImage: "url(http://webdesign-finder.com/tracktruck/wp-content/uploads/2021/06/texture3.png)" }}>




                <div className='w-[90%] h-[25%] bg-[#FDE344]   mt-[20%] flex flex-col  justify-center  '>

                    <p className='tracking-widest text-base font-sans-serif font-normal h-fit w-fit ml-[10%]'>NEWSLETTER</p>
                    <p className='h-fit w-[50%] text-4xl font-sans-serif font-bold mt-5 ml-[10%]'>Stay informed</p>




                    <div className='h-fit w-[80%]  flex  mt-[10%] ml-[10%] '>

                        <input className='bg-[#FDE344] w-[100%] h-[60px] placeholder-black focus:outline-none  border-b border-black ' type='email' placeholder='Email address' />
                        <button className='h-fit w-[15%] sm:w-[5%] bg-green-300 flex items-center absolute ml-[60%] sm:ml-[67%] mt-[2%] sm:mt-[3%]'><img className='h-full w-full  ' src='/Icons/black-arrow-right.png'></img></button>
                    </div>
                </div>




                <div className='h-fit w-fit mt-[30%] sm:mt-[20%] mr-auto ml-[5%]   flex justify-center  items-center'><img src='/Images/footer-logo.png' className=' h-full w-full' /></div>


                <div className='h-[47%] w-[90%]  mt-[30%] sm:mt-[20%] flex flex-col justify-between items-center'>
                    <div className='w-full h-fit  text-white text-3xl font-sans-serif font-bold leading-none'>End-to-end transportation and custom logistics solutions</div>

                    <div className='w-[90%] h-[70%] flex flex-col justify-evenly  '>

                        <div className='h-fit w-fit  flex flex-col'>
                            <span className='font-bold text-lg text-white '>Contact us</span>
                            <span className='text-[#81899c] mt-[1%]'>TrackTruck@support.com</span>
                            <span className='text-[#81899c] mt-[1%]'>+(123)123-456-7890</span>
                        </div>

                        <div className='h-fit w-fit  flex flex-col'>
                            <span className='font-bold text-lg text-white mt-2 h-fit w-fit'>Visit us</span>
                            <span className='text-[#81899c]  mt-3  leading-relaxed h-fit w-fit'>1335 Butternut Lane, Benton, IL 62812</span>

                        </div>




                        {/* <div className='h-fit w-fit '> */}
                        <div className=' w-full h-fit flex text-white justify-between items-center '>
                            <span className='text-xs font-semibold tracking-widest w-fit'>FOLLOW US</span>
                            {/* <span className='w-[13%] h-[1px] bg-white '></span> */}
                            <img src='/Icons/facebook.png' className='text-sm h-4 w-4 hover:scale-150 transition-transform'></img>
                            <img src='/Icons/instagram.png' className='text-sm h-6 w-6 hover:scale-150 transition-transform'></img>
                            <img src='/Icons/twitter.png' className='text-sm h-4 w-4 hover:scale-150 transition-transform'></img>
                        </div>
                        {/* </div> */}



                    </div>
                </div>











            </div>







            <div className='w-full h-[11%] tracking-[.17em] bg-pink-300  text-xs  xs:text-sm sm:text-base md:text-lg text-[#81899c] font-sans-serif flex justify-center items-center text-center  '>
                <p className='h-fit w-fit bg-yellow-200'>© 2021 TRACK TRUCK CO, ALL RIGHTS RESERVED</p>
            </div>

        </div>

    )
}

export default ContactFooter
