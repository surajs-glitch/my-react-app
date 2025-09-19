import React from 'react'

import value1 from "../assets/value1.png"
import value2 from "../assets/value2.png"
import value3 from "../assets/value3.png"
import screw from "../assets/framered.png"

const Values = () => {
  return (
    <div className='mt-8 mb-10 px-4 lg:mt-16 lg:mb-20 lg:px-16'>
        <div className="text-[#3A3A3A] justify-center  flex gap-2 lg:gap-4 items-center w-full border-b-[1px] border-black/30 pb-2 lg:pb-4">
          <img className="h-10 w-10" src={screw} alt="" />
          <p className="font-roboto font-bold lg:text-h2-desktop text-h3-mobile relative uppercase">
            Our Unique Value
          </p>
        </div>
        <p className="mt-2 text-center font-jost text-body-mobile lg:text-body-desktop text-black">
          We Manufacture Precision Scientific and Lab Instruments, Trusted  Biotech, Pharma, and <br className='hidden lg:block' /> Research Industries.
        </p>
    <div className='w-full lg:mt-8 mt-4  flex flex-col lg:flex-row gap-4 lg:gap-8'>
      
        
        <div className='lg:w-1/3 border-[1px] border-[#D6D6D6] lg:pt-20 pt-6 pb-4 lg:pb-8 lg:px-8 rounded-[20px]' >
            <img className='m-auto h-[70px] lg:h-[100px]' src={value1} alt="" />
            <p className='font-jost font-medium text-h3-mobile lg:text-h3-desktop mt-4 lg:mt-10 text-center'>Premium <br className='hidden lg:block' /> Quality</p>
            <p className='font-jost text-[#646464] text-h6-mobile lg:text-h6-desktop mt-2 lg:mt-6 text-center'>Our instruments are manufactured using the finest materials and cutting-edge technology, ensuring <span>unmatched performance</span>  and durability</p>
        </div>
        <div className='lg:w-1/3 border-[1px] border-[#D6D6D6] lg:pt-20 pt-6 pb-4  lg:pb-8 lg:px-8 rounded-[20px]' >
            <img className='m-auto h-[70px] lg:h-[100px]'  src={value2} alt="" />
            <p className='font-jost font-medium text-h3-mobile lg:text-h3-desktop mt-4 lg:mt-10 text-center'>Competitive <br /> Pricing</p>
            <p className='font-jost text-[#646464] text-h6-mobile lg:text-h6-desktop mt-2 lg:mt-6 text-center'>We offer our premium range of products at highly competitive prices, providing superior value without compromising on quality.</p>
        </div>
        <div className='lg:w-1/3 border-[1px] border-[#D6D6D6] pt-6 pb-4  lg:pt-20 lg:pb-8 lg:px-8 rounded-[20px]'>
            <img className='m-auto h-[70px] lg:h-[100px]' src={value3} alt="" />
            <p className='font-jost font-medium text-h3-mobile lg:text-h3-desktop lg:mt-10 mt-4  text-center '>Strong Dealer/Service <br /> Network</p>
            <p className='font-jost text-[#646464] text-h6-mobile lg:text-h6-desktop lg:mt-6 mt-2  text-center'>With a robust and widespread dealer network across India, we guarantee prompt supply, local support, and a seamless customer experience.</p>
        </div>
    </div>
    </div>
  )
}

export default Values