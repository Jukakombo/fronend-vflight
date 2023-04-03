import React from "react";
import plage from "../assets/plage.jpg";
import plage1 from "../assets/maldives-island.jpg";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineSkype } from "react-icons/ai";
import { SlEnvolope } from "react-icons/sl";
import { CiFacebook } from "react-icons/ci";
import { FaGooglePlusG } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";
import { FaPinterestP } from "react-icons/fa";
import { AiFillLinkedin } from "react-icons/ai";
import { TfiYoutube } from "react-icons/tfi";
import { FaVimeo } from "react-icons/fa";
function Footer() {
  return (
    <div className="bg-black">
      <div className="grid grid-cols-1 sm:grid-cols-sm-4  md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-4 w-11/12 m-auto py-8 text-white ">
        <div className="small_screen">
          <h2 className="text-2xl font-semi-bold">Menu</h2>
          <ul>
            <li className="cursor-pointer">About Us</li>
            <li className="cursor-pointer">Press Center</li>
            <li className="cursor-pointer">News</li>
            <li className="cursor-pointer">Jobs</li>
            <li className="text-green-400 cursor-pointer  ">Terms of Use</li>
            <li className="cursor-pointer">Privacy Policy</li>
          </ul>
        </div>

        <div className="small_screen">
          <h2 className="text-2xl font-semi-bold">Our Blog</h2>
          <div className="md:flex items-center small_screen">
            <img className="md:w-[80px]" src={plage} alt="plage" />
            <ul className="ml-4">
              <h3 className="text-green-300 cursor-pointer">
                Beautiful places
              </h3>
              <ul>
                <li className="cursor-pointer">Lorem, ipsum dolor</li>
                <li className="cursor-pointer">Lorem, ipsum dolor</li>
              </ul>
            </ul>
          </div>
          <div className="md:flex items-center small_screen">
            <img className="md:w-[80px]" src={plage1} alt="plage" />
            <ul className="ml-4">
              <h3 className="text-green-300 cursor-pointer">
                Fantastic places
              </h3>
              <ul>
                <li className="cursor-pointer">Lorem, ipsum dolor</li>
                <li className="cursor-pointer">Lorem, ipsum dolor</li>
              </ul>
            </ul>
          </div>
        </div>
        {/* center */}
        <div className="small_screen">
          <h2 className="text-2xl font-semi-bold">Call Center</h2>
          <div className="flex items-center cursor-pointer small_screen">
            <FiPhoneCall className="mr-4" /> 0698487054
          </div>
          <div className="flex items-center cursor-pointer small_screen">
            <AiOutlineSkype className="mr-4" /> Skype
          </div>
          <div className="flex items-center cursor-pointer small_screen">
            <SlEnvolope className="mr-4" /> Message us
          </div>
        </div>
        {/* follow us */}
        <div className="small_screen">
          <h2 className="text-2xl font-semi-bold">Follow Us</h2>
          <div className="flex   footer_social_media">
            <CiFacebook
              size={30}
              className="mr-2 cursor-pointer hover:text-green-400"
            />
            <FaGooglePlusG
              size={30}
              className="mr-2 cursor-pointer hover:text-green-400"
            />
            <FiTwitter
              size={30}
              className="mr-2 cursor-pointer hover:text-green-400"
            />
            <FaPinterestP
              size={30}
              className="mr-2 cursor-pointer hover:text-green-400"
            />
            <AiFillLinkedin
              size={30}
              className="mr-2 cursor-pointer hover:text-green-400"
            />
            <TfiYoutube
              size={30}
              className="mr-2 cursor-pointer hover:text-green-400"
            />
            <FaVimeo
              size={30}
              className="mr-2 cursor-pointer hover:text-green-400"
            />
          </div>
          <h2 className="text-2xl font-semi-bold">
            Subcribe to our news letter!
          </h2>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe quos
            deleniti eum numquam.
          </p>
          <div className="small_screen">
            <input
              type="text"
              placeholder="Enter your email..."
              className="p-2 rounded-[25px] mr-2 outline-0 text-gray-500"
            />
            <button className="bg-green-300 py-2 px-2.5 rounded-[25px] text-xl font-semi-bold text-[#FFF]">
              Send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
