"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Navbar() {
  return (
    <div>
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* logo */}
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <Link href={'/'} className="flex  font-medium items-center text-gray-900 mb-4 md:mb-0">
            
            <Image
              alt="logo"
              width={56}
              height={55}
              src={require("../../public/picture/header-pics/food-logo.png")}
            />
            <span>
              {/* <Image
                alt="name"
                width={200}
                height={100}
                src={require("../../public/picture/header-pics/Cuisine.png")}
              /> */}
            <h1 className="playfair-display-sc-black-italic ml-3 text-4xl text-[#474747] ">Bistro Bliss</h1>
            </span>
          </Link>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
           <Link href={'/'}> <button className="  text-[#2C2F24]  p-1 w-20 rounded-full   focus:bg-[#DBDFD0] ">Home</button></Link>
           <Link href={'/about'}><button className=" text-[#2C2F24]  p-1 w-20 rounded-full   focus:bg-[#DBDFD0] ">About</button></Link>
           <Link href={'/menu'}><button className="  text-[#2C2F24]  p-1 w-20 rounded-full   focus:bg-[#DBDFD0] ">Menu</button></Link>
           <Link href={'/'}><button className=" text-[#2C2F24]  p-1 w-20 rounded-full   focus:bg-[#DBDFD0] ">Pages</button></Link>
            <Link href={'/contact'}> <button className=" text-[#2C2F24]  p-1 w-20 rounded-full   focus:bg-[#DBDFD0] ">Contact</button></Link>
          </nav>
          <button className="inline-flex items-center text-[#182226] border-1 border-[#2C2F24] py-1 px-3 focus:outline hover:bg-gray-200 rounded-full outline outline-1 text-base mt-4 md:mt-0">
            Book A Table
          </button>
        </div>
      </nav>
    </div>
  );
}
