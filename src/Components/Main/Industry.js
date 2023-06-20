import React from 'react'

const Industry = () => {
    return (
        <div className="w-full h-[160vh] i5:h-[200vh] md:h-[200vh] lg:h-[110vh] flex flex-col items-center justify-between  ">

            <div className="flex  flex-col h-[21%] i5:h-[22%] xs:h-[19%] md:h-[12%] lg:h-[20%] lg:w-[90%]  w-[90%] mt-[20%] md:mt-[15%] lg:mt-[10%] xl:mt-[8%] xl:w-[95%] 2xl:w-[77%] ">

                <p className="tracking-[.2em]  w-fit h-fit  text-base text-[#81899c]">INDUSTRY</p>
                <span className="text-5xl i5:text-3xl w-fit h-fit xl:text-6xl   tracking-tight	text-[#0E1C3C] leading-[1] font-semibold font-sans-serif	mt-[5%] xl:mt-[3%]">Industry Panorama</span>
                <p className="text-[#81899c] mt-[7%] lg:mt-auto leading-[1.8] tracking-tight xl:w-[40%] font-[400] text-left">We span diverse industry sectors: food and beverage, chemical, retail, durable goods, and more.</p>
                <div className="h-[88%] ml-[47.5%] 2xl:ml-[38.5%]  w-[50%] i5:hidden xxs:hidden xs:hidden sm:hidden md:hidden lg:hidden xl:flex absolute  bg-teal-800 bg-cover bg-center " style={{ backgroundImage: 'url(/Images/yellow-truck.jpg)' }}>
                </div>
            </div>


            <div className="w-full h-[68%] md:h-[78%] lg:h-[65%]   bg-[#0e1c3c] bg-cover bg-center  flex flex-col  lg:flex-row-reverse " style={{ backgroundImage: 'url(http://webdesign-finder.com/tracktruck/wp-content/uploads/2021/06/texture3.png)' }}>

                <div className="h-[35%] md:h-[60%] w-full lg:w-[50%] lg:h-full xl:hidden bg-cover bg-center " style={{ backgroundImage: 'url(/Images/yellow-truck.jpg)' }}>
                </div>

                <div className="w-[100%] lg:w-[50%] lg:h-full h-[65%] md:h-[40%] xl:mr-auto xl:h-[85%] 2xl:w-[77%]  bg flex  flex-col justify-evenly items-center text-2xl font-bold text-white">
                    <div className="w-[90%] md:w-[70%] h-[15%] flex justify-between  items-center "><img className="w-[60px] h-[60px]" src="/Icons/box.png"></img><p className="h-fit w-[70%] 2xl:w-[80%]">Retail goods</p></div>
                    <div className="w-[90%] md:w-[70%] h-[15%] flex justify-between items-center "><img className="w-[60px] h-[60px]" src="/Icons/chemical.png"></img><p className="h-fit w-[70%] 2xl:w-[80%]">Chemical goods</p></div>
                    <div className="w-[90%] md:w-[70%] h-[15%] flex justify-between items-center "><img className="w-[60px] h-[60px]" src="/Icons/farming.png"></img><p className="h-fit w-[70%] 2xl:w-[80%]">Agriculture and farming</p></div>
                    <div className="w-[90%] md:w-[70%] h-[15%] flex justify-between items-center "><img className="w-[60px] h-[60px]" src="/Icons/retail.png"></img><p className="h-fit w-[70%] 2xl:w-[80%]">Fashion and apparel</p></div>
                    <div className="w-[90%] md:w-[70%] h-[15%] flex justify-between items-center "><img className="w-[60px] h-[60px]" src="/Icons/economy.png"></img><p className="h-fit w-[70%] 2xl:w-[80%]">Manufacturing & production</p></div>
                </div>



            </div>


            {/* <div className='bg-[#F8F8F8] h-[11%] w-full'></div> */}

        </div>
    )
}

export default Industry
