// "use client";
// import { FaRegClock } from "react-icons/fa";
// import { BiSolidOffer } from "react-icons/bi";
// import { FaShoppingCart } from "react-icons/fa";
// import Image from "next/image";
// export default function HeroSection5() {
//      return (
//        <div className="max-w-[1600px] max-h-[867px] mx-auto p-4 bg-[#F9F9F7] sm:mb-96 md:mb-10">
//          <div className="grid grid-cols-1 md:grid-cols-3 gap-4" >
//            <div className="md:row-span-2">
//                <Image
//            src={('/picture/header-pics/sec5-1.png')}
//            alt="chef holding plate"
//              width={431}
//             height={600}
//             className="w-[431px] h-[600px] "
//          /> 
//            </div>
   
//            <div className="md:row-span-2">
//                 <Image
//            src={('/picture/header-pics/sec5-2.png')}
//            alt="curry"
//              width={290}
//             height={333}
//             className="w-[290px] h-[333px] mt-8"
//          />
//            <Image
//            src={('/picture/header-pics/sec5-3.png')}
//            alt="food plate"
//              width={290}
//             height={240}
//                className="w-[290px] h-[240px] my-5"
//          />
//            </div>
//          <div className="sm:mt-5 md:mt-48 mr-20 ">
//            <h1 className="playfair-display-sc-regular text-[#2C2F24] text-5xl ">
//              Fastest Food Delivery in City
//            </h1>
//            <p className="text-[#414536] text-[16px] line-clamp-2 leading-relaxed">
//              Our visual designer lets you quickly and of drag a down your way to
//              customapps for both keep desktop.
//            </p>
//            <div className="flex mt-5">
//              <div className="w-[30px] h-[30px]  flex items-center justify-center rounded-full bg-[#AD343E] text-[#fff] mb-5 flex-shrink-0 ">
              
//                <FaRegClock className="text-center" />
//              </div>
//              <p className="text-[20px] ml-4">Delivery within 30 minutes</p>
//            </div>
   
//            <div className="flex ">
//              <div className="w-[30px] h-[30px]  flex items-center justify-center rounded-full bg-[#AD343E] text-[#fff] mb-5 flex-shrink-0 ">
//                <BiSolidOffer className="text-center" />
//              </div>
//              <p className="text-[20px] ml-4">Best Offer & Prices</p>
//            </div>
   
//            <div className="flex">
//              <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#AD343E] text-[#fff] mb-5 flex-shrink-0 ">
//                <FaShoppingCart className="text-center" />
//              </div>
//              <p className="text-[20px] ml-4">Online Services Available</p>
//            </div>
//          </div>
   
//          </div>
//        </div>
//      )
//    }








// //   return (
// //     <section
// //       className="max-w-[] max-h-[627] bg-[#F9F9F7] mx-auto grid md:grid-cols-3 
// //       gap-3
// //       border-2"
// //     >
// //       {/* 1 */}
// //       <div className="ml-28 py-5 text-center border-2">
// //         <Image
// //           src={"/picture/header-pics/sec5-1.png"}
// //           alt="chef holding plate"
// //           width={431}
// //           height={600}
// //           className="w-[431px] h-[600px] "
// //         />
// //       </div>
// //       {/* 2 */}
// //       <div className="mt-8 border-2">
// //         <Image
// //           src={"/picture/header-pics/sec5-2.png"}
// //           alt="curry"
// //           width={290}
// //           height={333}
// //           className="w-[290px] h-[333px] mt-8"
// //         />
// //         <Image
// //           src={"/picture/header-pics/sec5-3.png"}
// //           alt="food plate"
// //           width={290}
// //           height={240}
// //           className="w-[290px] h-[240px] my-5"
// //         />
// //       </div>
// //       {/* 3 */}
// //       <div className="mt-48 mr-20 border-2">
// //         <h1 className="playfair-display-sc-regular text-[#2C2F24] text-[55px] ">
// //           Fastest Food Delivery in City
// //         </h1>
// //         <p className="text-[#414536] text-[16px]">
// //           Our visual designer lets you quickly and of drag a down your way to
// //           customapps for both keep desktop.{" "}
// //         </p>
// //         <div className="flex mt-5">
// //           <div className="w-[30px] h-[30px]  flex items-center justify-center rounded-full bg-[#AD343E] text-[#fff] mb-5 flex-shrink-0 ">
// //             {" "}
// //             <FaRegClock className="text-center" />
// //           </div>
// //           <p className="text-[20px] ml-4">Delivery within 30 minutes</p>
// //         </div>

// //         <div className="flex ">
// //           <div className="w-[30px] h-[30px]  flex items-center justify-center rounded-full bg-[#AD343E] text-[#fff] mb-5 flex-shrink-0 ">
// //             <BiSolidOffer className="text-center" />
// //           </div>
// //           <p className="text-[20px] ml-4">Best Offer & Prices</p>
// //         </div>

// //         <div className="flex">
// //           <div className="w-[30px] h-[30px] flex items-center justify-center rounded-full bg-[#AD343E] text-[#fff] mb-5 flex-shrink-0 ">
// //             <FaShoppingCart className="text-center" />
// //           </div>
// //           <p className="text-[20px] ml-4">Online Services Available</p>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }
"use client";
import { FaRegClock } from "react-icons/fa";
import { BiSolidOffer } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import Image from "next/image";

export default function HeroSection5() {
    return (
        <div className="max-w-screen-xl mx-auto p-4 bg-[#F9F9F7]">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="md:row-span-2">
                    <Image
                        src={'/picture/header-pics/sec5-1.png'}
                        alt="chef holding plate"
                        width={431}
                        height={600}
                        className="w-full h-auto"
                    />
                </div>

                <div className="md:row-span-2 flex flex-col items-center mt-20 md:mr-32">
                    <Image
                        src={'/picture/header-pics/sec5-2.png'}
                        alt="curry"
                        width={290}
                        height={333}
                        className="w-64 h-auto mt-8 md:mt-0"
                    />
                    <Image
                        src={'/picture/header-pics/sec5-3.png'}
                        alt="food plate"
                        width={290}
                        height={240}
                        className="w-64 h-auto my-5"
                    />
                </div>

                <div className="mt-5 md:mt-48 md:mr-20 text-center md:text-left">
                    <h1 className="playfair-display-sc-regular text-[#2C2F24] text-4xl md:text-5xl">
                        Fastest Food Delivery in City
                    </h1>
                    <p className="text-[#414536] text-base md:text-lg leading-relaxed mt-2">
                        Our visual designer lets you quickly and easily drag and drop your way to custom apps for both desktop and mobile.
                    </p>
                    <div className="flex md:items-center justify-center  md:justify-start mt-5">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#AD343E] text-white">
                            <FaRegClock />
                        </div>
                        <p className="text-lg ml-4">Delivery within 30 minutes</p>
                    </div>

                    <div className="flex items-center justify-center md:justify-start mt-4">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#AD343E] text-white">
                            <BiSolidOffer />
                        </div>
                        <p className="text-lg ml-4">Best Offer & Prices</p>
                    </div>

                    <div className="flex items-center justify-center md:justify-start mt-4">
                        <div className="w-8 h-8 flex items-center justify-center rounded-full bg-[#AD343E] text-white">
                            <FaShoppingCart />
                        </div>
                        <p className="text-lg ml-4">Online Services Available</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
