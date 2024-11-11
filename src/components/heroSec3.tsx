"use client"
import Image from 'next/image'
import { HiOutlineMapPin } from "react-icons/hi2";
import { MdOutlineMail } from "react-icons/md";
import { HiOutlinePhone } from "react-icons/hi";

export default function HeroSec3() {
  return (
   <>
 <div className='max-w-[1320px] mx-auto py-5 md:py-[80] flex sm:flex-row flex-col-reverse relative bg-[#F9F9F7]'>
      {/* sec left */}
      <Image 
        alt='about-hero'
        src={('/picture/header-pics/hero-sec-3.png')}
        width={599}
        height={566}
        className='w-[599px] h-[566px]'
             />
        {/* box */}    
        <div className=' max-w-[411px] max-h-[321px] bg-[#474747] mx-auto absolute grid md:grid-rows-3 md:grid-flow-row gap-5 p-6  rounded-2xl 
        sm:min-w[50px] sm:min-h[50px] md:top-80 md:left-72 sm:top-80 sm:left-32 sm:grid-cols-1 sm:grid-flow-col hover:animate-bounce'>
       {/* <div className=' text-center'> */}
       <h1 className='ml-5 mt-3 text-[#ffffff] text-[24px]  font-bold'>Come and visit us</h1>
       {/* </div> */}
    {/* <div> */}
    <p className='ml-3  flex md:text-[16px] sm:text-[10px] text-[#F9F9F7] '>
        <HiOutlinePhone className=' md:w-7 sm:w-3 md:h-7 sm:h-3'/>
            <span className='ml-4'>(414) 857-0107</span>
        </p>
    {/* </div> */}
      {/* <div> */}
      <p className='ml-3  flex md:text-[16px] text-[#F9F9F7]  sm:text-[10px]'>
       
       <MdOutlineMail className='md:w-8 md:h-8  sm:w-3 sm:h-3'/>
       <span className='ml-4'>happytummy@restaurent.com</span>
   </p>
      {/* </div> */}
     {/* <div> */}
     <p className='ml-3  flex md:text-[16px] text-[#F9F9F7]  sm:text-[10px]'>
       
       <HiOutlineMapPin className='md:w-8 md:h-8 '/>
       <span className='ml-4'>837W. Marshall Lane Marshalltown,<br/>
       IA 50158, Los Angeles</span>
   </p>
     {/* </div> */}
    </div>
         {/* box end */}
        {/* sec right */}
        <div className='basis-[55%] px-20 py-10 '>
        <h1 className="playfair-display-sc-black-italic text-5xl my-4  text-gray-900 hover:animate-bounce hover:text-[#AD343E]">
       We provide healthy
        <br  />
        food for your family.
      </h1>
     
      <p className="my-4 leading-relaxed text-[18px] text-[#2C2F24] font-semibold text-balance">
      Our story began with a vision to create a unique dining experience that merges find dining, exceptional service, and a vibrant ambiance. Rooted in city's rich culinary cultre, we aim to honor our local roots while infucing a global palate.
      </p>
      <p className="my-4 leading-relaxed text-[16px] text-[#414536] text-balance">
      At place, we belive that dining is not just about food, but also about the overall experience. Our staff, renowned for their warmth and dedication, strives to make every visit an unforgettable event.
      </p>

      <button className="max-w-[179px] max-h-[64px] animate-bounce font-bold  items-center text-[16px] text-[#182226] border-1 border-[#2C2F24] py-4 px-5 focus:outline hover:bg-gray-200 rounded-full outline outline-1 text-base mt-10">
            More About Us
          </button>
        </div>
    </div>





   </>
  )
}
