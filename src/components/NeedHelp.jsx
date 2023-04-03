import React from "react";
import { BiHelpCircle } from "react-icons/bi";
import { BiFootball } from "react-icons/bi";
import { MdSecurity } from "react-icons/md";
import { AiOutlineWechat } from "react-icons/ai";

function NeedHelp() {
  return (
    <div className="bg-white py-8" id="Help">
      <h1 className="text-center text-2xl font-bold  py-8">Need Help</h1>
      <div className="grid sm:grid-cols-1 md:grid-cols-4 xl:grid-cols-4 xl:grid-cols-4 gap-4 w-11/12 m-auto ">
        {/*  */}
        <div className="text-center ">
          <div className=" items-center make_them_center py-4 ">
            <BiHelpCircle size={50} className="text-green-400 " />
          </div>
          <h1 className="text-2xl font-bold  py-4">FAQ</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi
            sapiente veritatis voluptate?
          </p>
          <button className="py-2 px-4 rounded-[25px] bg-green-400 text-white text-xl my-4">
            Read More
          </button>
        </div>
        {/*  */}
        <div className="text-center">
          <div className="make_them_center py-4">
            <BiFootball size={50} className="text-green-400" />
          </div>
          <h1 className="text-2xl font-bold py-4">In Dificult Situation</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi
            sapiente veritatis voluptate?
          </p>
          <button className="py-2 px-4 rounded-[25px] bg-green-400 text-white text-xl my-4">
            Read More
          </button>
        </div>
        <div className="text-center">
          <div className="make_them_center py-4">
            <MdSecurity size={50} className="text-green-400" />
          </div>
          <h1 className="text-2xl font-bold py-4">Security Policy</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi
            sapiente veritatis voluptate?
          </p>
          <button className="py-2 px-4 rounded-[25px] bg-green-400 text-white text-xl my-4">
            Read More
          </button>
        </div>
        <div className="text-center items-center m-auto">
          <div className="make_them_center py-4">
            <AiOutlineWechat className="text-green-400 " size={50} />
          </div>
          <h1 className="text-2xl font-bold py-4">Call Center</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor animi
            sapiente veritatis voluptate?
          </p>
          <button className="py-2 px-4 rounded-[25px] bg-green-400 text-white text-xl my-4">
            Read More
          </button>
        </div>
      </div>
    </div>
  );
}

export default NeedHelp;
