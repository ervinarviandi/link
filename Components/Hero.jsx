import React from "react";
import Image from "next/image";
import Gambar from "../public/avatar-ervin.png";
import { BsGlobe } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  return (
    <div>
      <div className="mt-[96px] mx-auto w-full px-4  ">
        <div className=" mx-auto bg-hero text-center items-center bg-backgrounddark  max-w-4xl   ">
          <Image src={Gambar} alt="profile" width={110} height={110} className=" mx-auto bg-amber-500 rounded-full " />

          <h2 className="font-poppins font-bold text-white text-4xl mt-7 ">Naufaldi Rafif </h2>
          <div className="flex justify-center space-x-3 items-center text-center mx-auto mt-7">
            <BsGlobe className="text-primary animate animate-bounce" />
            <p className="text-lg text-primary font-poppins">Lombok</p>
          </div>

          <div className="py-10 mx-auto">
            <p className="text-lg font-poppins text-primary md:w-5/12 w-4/12 mx-auto">Frontend Developer at eFishery | Mentor Frontend Dev | Personal Blog at Blog Faldi | Portofolio at Web Porto</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
