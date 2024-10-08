"use client"
import React from 'react'
import Image from 'next/image'
export default function Hero() {
  return (
    <section>
        <div 
         style={{zIndex: -1,position:"fixed", width:"100vw", height:"100vh" }}>
        <Image 
        alt='bg-pic'
        src={require('../../public/picture/header-pics/hero-bg.png')}
        layout='fill'
        objectFit='cover'
        // className='bg-local'
        />
        </div>

        <div className='p-[30vh]'>
        <h1 className='playfair-display-sc-black-italic text-7xl text-center  text-[#2C2F24]'>Best food for <br />your taste</h1>
        <p className='text-center mt-4 text-[#2C2F24]'>Discover delectable cuisine and unforgettable <br/> moments in our welcoming culinary haven.</p>
       
      
      <div className='flex justify-center items-center gap-3 mt-5'>
      <button className=" bg-[#AD343E] hover:bg-[#e58d96] rounded-full  text-white px-4 py-2">
            Book A Table
          </button>
          <button className= " text-[#182226] border-1 border-[#2C2F24] py-2 px-4 focus:outline hover:bg-gray-200 rounded-full outline outline-1">
            Explore Menu
          </button>
      </div>
      </div>
    </section>
  ) 
}
