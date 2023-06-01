import React from "react";
import Image from "next/image";
import Instagram from "../public/Instagram.svg.png";
import Github from "../public/github-mark-white.png";
import { AiFillStar } from "react-icons/ai";
import Link from "next/link";

const Content = () => {
  return (
    <section>
      <div className=" lg:max-w-4xl mt-10 px-4 mx-auto">
        <h2 className="text-2xl font-poppins text-white mb-10">#Social Media</h2>
        <div className="grid md:grid-cols-2 gap-10">
          <div className="flex flex-col ">
            <div className="bg-backgrounddark py-6 px-16 w-full relative cursor-pointer">
              <Image src={Instagram} alt="Instagram-logo" width={50} height={50} className="absolute top-7 -left-4" />
              <h2 className="font-poppins text-2xl text-white">Instagram</h2>
              <Link href="https://instagram.com/ervinarviandi/" className="font-poppins text-lg text-primary">
                instagram.com/ervinarviandi/
              </Link>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="bg-backgrounddark py-6 px-16 w-full relative cursor-pointer">
              <Image src={Github} alt="github-logo" width={50} height={50} className="absolute top-7 -left-4" />
              <h2 className="font-poppins text-2xl text-white">Github</h2>
              <Link href="https://github.com/ervinarviandi" className="font-poppins text-lg text-primary">
                https://github.com/ervinarviandi
              </Link>
            </div>
          </div>
          <div className="flex flex-col ">
            <div className="bg-backgrounddark py-6 px-16 w-full relative cursor-pointer">
              <Image src={Github} alt="github-logo" width={50} height={50} className="absolute top-7 -left-4" />
              <h2 className="font-poppins text-2xl text-white">Github</h2>
              <Link href="https://github.com/ervinarviandi" className="font-poppins text-lg text-primary">
                https://github.com/ervinarviandi
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Content;
