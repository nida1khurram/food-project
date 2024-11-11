import Image from "next/image"

export default function heroSec4() {
  return (
    <section className=" body-font">
        <h1 className="playfair-display-sc-regular text-[#2C2F24] text-[55px] my-10 pl-10 leading-none ">
            We also offer unique <br />services for your events</h1>
  <div className="container grid sm:grid-cols-1 md:grid-cols-4 gap-10 py-5 ml-9">
   
{/* 1   lg:h-48 md:h-36          */}
    <div className="w-[306px] h-[443px] ">
    <Image
    width={306}
    height={320}
            className=" w-[306px] h-[320px] object-cover object-center  rounded-lg 
            transition-all duration-800 ease-in-out  hover:scale-90  hover:shadow-2xl "
            src="/picture/header-pics/sec3-1.png"
            alt="blog"
          />
        <h1 className="title-font text-[24px] font-medium text-[#2C2F24] my-3">
            Caterings
            </h1>
            <p className=" text-[16px] text-[#414536] h-[48px] w-[280px] ">
            In the new era of technology we look<br />
             in the future with certainty for life.
            </p>
    </div>

      {/*2  */}
 
      <div className="w-[306px] h-[443px] ">
    <Image
    width={306}
    height={320}
            className=" w-[306px] h-[320px] object-cover object-center rounded-lg
             transition-all duration-800 ease-in-out  hover:scale-90  hover:shadow-2xl"
            src="/picture/header-pics/sec3-2.jpg"
            alt="blog"
          />
        <h1 className="title-font text-[24px] font-medium text-[#2C2F24] my-3">
        Birthdays
            </h1>
            <p className=" text-[16px] text-[#414536] h-[48px] w-[280px] ">
            In the new era of technology we look<br />
             in the future with certainty for life.
            </p>
    </div>
    
      {/* 3 */}
      <div className="w-[306px] h-[443px] ">
    <Image
    width={306}
    height={320}
            className=" w-[306px] h-[320px] object-cover object-center rounded-lg
             transition-all duration-800 ease-in-out  hover:scale-90  hover:shadow-2xl"
            src="/picture/header-pics/sec3-3.jpg"
            alt="blog"
          />
        <h1 className="title-font text-[24px] font-medium text-[#2C2F24] my-3">
        Weddings
            </h1>
            <p className=" text-[16px] text-[#414536] h-[48px] w-[280px] ">
            In the new era of technology we look<br />
             in the future with certainty for life.
            </p>
    </div>  
{/* 4 */}
<div className="w-[306px] h-[443px] ">
    <Image
    width={306}
    height={320}
            className=" w-[306px] h-[320px] object-cover object-center rounded-lg
             transition-all duration-800 ease-in-out  hover:scale-90  hover:shadow-2xl"
            src="/picture/header-pics/sec3-4.png"
            alt="blog"
          />
        <h1 className="title-font text-[24px] font-medium text-[#2C2F24] my-3">
        Events
            </h1>
            <p className=" text-[16px] text-[#414536] h-[48px] w-[280px] ">
            In the new era of technology we look<br />
             in the future with certainty for life.
            </p>
    </div>

    </div>


  
</section>

  )
}
