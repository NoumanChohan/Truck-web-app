import React from 'react'

const Industry = () => {
    return (
        <div className="w-full h-[150vh] flex flex-col  ">

            <div className="flex  flex-col h-[35%] w-[33%] ml-[211px]  justify-end ">

                <p className="tracking-[.2em]  w-full h-fit  text-base text-[#81899c]">INDUSTRY</p>
                <span className="text-[64px]  w-full h-fit   tracking-tight	text-[#0E1C3C] leading-[1] font-semibold font-sans-serif	mt-5">Sectors coverage</span>
                <p className="text-[#81899c] mt-10 leading-[1.8] tracking-tight font-[400] mb-16 text-left">We cover different industry sectors, from food and beverage, chemical, retail, durable goods and more. Check the full list.</p>
            </div>

            <div className="w-full h-[55%] bg-[#0e1c3c] bg-cover bg-center " style={{ backgroundImage: 'url(http://webdesign-finder.com/tracktruck/wp-content/uploads/2021/06/texture3.png)' }}>
                <div className="w-[25%] h-[55%] mt-40 bg flex flex-col ml-[211px] justify-between text-2xl font-bold text-white">
                    <div className="w-full h-[15%] flex items-center "><img className="w-[60px] h-[60px]" src="/Icons/box.png"></img><p className="ml-10">Consumer packaged goods</p></div>
                    <div className="w-full h-[15%] flex items-center "><img className="w-[60px] h-[60px]" src="/Icons/chemical.png"></img><p className="ml-10">Chemical goods</p></div>
                    <div className="w-full h-[15%] flex items-center "><img className="w-[60px] h-[60px]" src="/Icons/burger.png"></img><p className="ml-10">Food & Beverages</p></div>
                    <div className="w-full h-[15%] flex items-center "><img className="w-[60px] h-[60px]" src="/Icons/retail.png"></img><p className="ml-10">Retail goods</p></div>
                    <div className="w-full h-[15%] flex items-center "><img className="w-[60px] h-[60px]" src="/Icons/gasoline.png"></img><p className="ml-10">Energy, oil and gas</p></div>
                </div>
            </div>
            <div className='bg-[#F8F8F8] h-[11%] w-full'></div>
            <div className="h-[100%] w-[48%] bg-teal-800 absolute ml-[52%] mt-[125px]  bg-center" style={{ backgroundImage: 'url(/Images/yellow-truck.jpg)' }}>
            </div>
        </div>
    )
}

export default Industry
