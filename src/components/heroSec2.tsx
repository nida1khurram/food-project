"use client";
import { motion } from "framer-motion";
import { BsCupHot } from "react-icons/bs";
import { BiBowlRice } from "react-icons/bi";
import { RiDrinks2Line } from "react-icons/ri";
import { LuCakeSlice } from "react-icons/lu";
export default function HeroSec2() {
  return (
    <section  className='max-w-[1320px] mx-auto mb-20 '>
      <motion.div
        initial={{ opacity: 0, translateY: "100%" }}
        whileInView={{ opacity: 1, translateY: 0 }}
        transition={{ duration: 3 }}
      >
        {/* <div className="max-w-[1320] px-2 py-24 mx-auto "> */}
          
          <div className="text-center my-20 ">
            <h1
              className="sm:text-5xl text-gray-900 
              transition-all duration-800 ease-in-out  hover:scale-125 hover:text-[#AD343E]">
              Browse Our Menu
            </h1>
          </div>

          {/* <div className="max-w-[1200] flex flex-wrap sm:-m-4 "> */}

          <div className='max-w-[1200] mx-auto grid lg:grid-cols-4 md:grid-cols-2  gap-6 px-[20px]'>
            {/* 1 md:w-1/4 flex flex-col*/}

            <div className="  text-center items-center  border-2 rounded-xl py-5  
            transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-95">
              {/* icon */}
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#DBDFD0] text-[#474747] mb-5 flex-shrink-0">
                <BsCupHot className="w-10 h-10 hover:animate-spin" />
              </div>

                <h2 className="text-[#2C2F24] text-[24px] mb-4">
                  Breakfast </h2>
                <p className="text-[16px]">
                  In the new era of technology we
                  <br /> look in the future with certainty
                  <br /> and pride for our life.
                </p>
             
            </div>

            {/* 2 */}
           <div className="  text-center items-center  border-2 rounded-xl py-5  
            transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-95">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#DBDFD0] text-[#474747] mb-5 flex-shrink-0">
                <BiBowlRice className="w-10 h-10 hover:animate-spin" />
              </div>
              <div className="flex-grow">
              <h2 className="text-[#2C2F24] text-[24px] mb-4">
                  Main Dishes
                </h2>
                <p className="text-[16px]">
                  In the new era of technology we <br /> look in the future with
                  certainty <br /> and pride for our life.
                </p>
              </div>
            </div>
            {/* 3 */}
            <div className="  text-center items-center  border-2 rounded-xl py-5  
            transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-95">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#DBDFD0] text-[#474747] mb-5 flex-shrink-0">
                <LuCakeSlice className="w-10 h-10 hover:animate-spin" />
              </div>
              <div className="flex-grow">
              <h2 className="text-[#2C2F24] text-[24px] mb-4">
                  Drinks
                </h2>
                <p className="text-[16px]">
                  In the new era of technology we <br /> look in the future with
                  certainty <br />
                  and pride for our life.
                </p>
              </div>
            </div>
            {/* 4 */}
            <div className="  text-center items-center  border-2 rounded-xl py-5  
            transition-all duration-1000 ease-in-out hover:shadow-[0_0_8px_6px_rgb(173,52,62)] hover:scale-95">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-[#DBDFD0] text-[#474747] mb-5 flex-shrink-0">
                <RiDrinks2Line className="w-10 h-10 hover:animate-spin" />
              </div>
              <div className="flex-grow">
              <h2 className="text-[#2C2F24] text-[24px] mb-4">
                  Desserts
                </h2>
                <p className="text-[16px]">
                  In the new era of technology we <br /> look in the future with
                  certainty <br /> and pride for our life.
                </p>
              </div>
            </div>
          </div>
        {/* </div> */}
      </motion.div>
    </section>
  );
}
