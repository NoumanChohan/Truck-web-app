import React from 'react'

const Landing = () => {
    return (
        <div className='h-[100vh] w-full bg-[#F8F8F8]'>
            <div className=' h-[90%] w-full bg-[#0e1c3c] bg-cover bg-center flex justify-center items-center' style={{ backgroundImage: "url(http://webdesign-finder.com/tracktruck/wp-content/uploads/2021/06/texture3.png)" }}>



                <div className=' w-[90%] h-[35%]  flex flex-col justify-between items-center text-5xl font-bold font-sans-serif text-white'>
                    <span className='w-fit  h-fit'>Contacts</span>

                    <div className=' w-full h-[50%] flex   text-white justify-around items-center '>


                        <img src='/Icons/w-facebook.png' className=' h-6 w-6 hover:scale-150 transition-transform'></img>
                        <img src='/Icons/w-instagram.png' className=' h-6 w-6 hover:scale-150 transition-transform'></img>
                        <img src='/Icons/w-twitter.png' className='h-6 w-6 hover:scale-150 transition-transform'></img>
                    </div>


                    <div className="w-[70%] h-[80px] bg-[#FDE344] absolute mt-[72%] ml-[20%] text-black text-xs font-semibold 	flex justify-center items-center hover:scale-95 transform transition-all duration-200">
                        <button className="tracking-widest flex  hover:flex-row-reverse  h-fit w-fit  items-center">
                            <span className='h-fit w-fit'>REQUEST A QUOTE</span>
                            <span className="ml-2 mr-2"><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-4 h-4">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                            </span>
                        </button>

                    </div>

                </div>






            </div>
        </div>
    )
}

export default Landing
