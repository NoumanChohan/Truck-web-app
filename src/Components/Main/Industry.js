import React from 'react'

const Industry = () => {
    return (
        <div className="w-full h-[160vh]  flex flex-col items-center justify-between bg-yellow-200  ">

            <div className="flex  flex-col h-[21%] xs:h-[19%] w-[90%] mt-[20%] bg-green-200 ">

                <p className="tracking-[.2em]  w-fit h-fit  text-base text-[#81899c]">INDUSTRY</p>
                <span className="text-5xl  w-fit h-fit   tracking-tight	text-[#0E1C3C] leading-[1] font-semibold font-sans-serif	mt-[5%]">Sectors coverage</span>
                <p className="text-[#81899c] mt-[7%] leading-[1.8] tracking-tight font-[400] text-left">We cover different industry sectors, from food and beverage, chemical, retail, durable goods and more. Check the full list.</p>
            </div>

            <div className="w-full h-[68%] bg-[#0e1c3c] bg-cover bg-center  flex flex-col " style={{ backgroundImage: 'url(http://webdesign-finder.com/tracktruck/wp-content/uploads/2021/06/texture3.png)' }}>

                <div className="h-[35%] w-full bg-teal-800 bg-cover bg-center " style={{ backgroundImage: 'url(/Images/yellow-truck.jpg)' }}>
                </div>

                <div className="w-[100%] h-[65%] bg flex bg-green-300 flex-col justify-evenly items-center text-2xl font-bold text-white">
                    <div className="w-[90%]  h-[15%] flex justify-between items-center "><img className="w-[60px] h-[60px]" src="/Icons/box.png"></img><p className="h-fit w-[70%]">Consumer packaged goods</p></div>
                    <div className="w-[90%]  h-[15%] flex justify-between items-center "><img className="w-[60px] h-[60px]" src="/Icons/chemical.png"></img><p className="h-fit w-[70%]">Chemical goods</p></div>
                    <div className="w-[90%]  h-[15%] flex justify-between items-center "><img className="w-[60px] h-[60px]" src="/Icons/burger.png"></img><p className="h-fit w-[70%]">Food & Beverages</p></div>
                    <div className="w-[90%]  h-[15%] flex justify-between items-center "><img className="w-[60px] h-[60px]" src="/Icons/retail.png"></img><p className="h-fit w-[70%]">Retail goods</p></div>
                    <div className="w-[90%]  h-[15%] flex justify-between items-center "><img className="w-[60px] h-[60px]" src="/Icons/gasoline.png"></img><p className="h-fit w-[70%]">Energy, oil and gas</p></div>
                </div>



            </div>
            {/* <div className='bg-[#F8F8F8] h-[11%] w-full'></div> */}

        </div>
    )
}

export default Industry
