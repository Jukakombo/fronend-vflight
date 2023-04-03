import React, { useState } from "react";
import { GiAirplaneDeparture } from "react-icons/gi";
import { Link } from "react-router-dom";
import { AiOutlineMenu } from "react-icons/ai";
import { AiOutlineCloseCircle } from "react-icons/ai";
function Navbar() {
  const [open, setOpen] = useState(false);
  const openTheMenu = () => {
    setOpen(true);
  };
  const closeTheMenu = () => {
    setOpen(false);
  };
  let navigations = [
    { name: "Home", id: "jkfeofd2839" },
    { name: "Trip", id: "jkfeofd283DD39" },
    { name: "Destination", id: "jkdfe34ofd2839" },
    { name: "Hotel", id: "jkfeofd2ds82339" },
    { name: "Help", id: "jkfeofd2d24s83d9" },
    { name: "Sign-Up", id: "jkfeodfdfd2d24s839" },
    { name: "Sign-In", id: "jkfeofd2d24s839" },
  ];
  return (
    <div className="bg-green-400">
      <div className="py-2 w-11/12 m-auto md:flex justify-between items-center ">
        <div className="logo">
          <GiAirplaneDeparture
            size={60}
            color="white"
            className="cursor-pointer"
          />
          <div className="menu_function md:hidden">
            {open ? (
              <AiOutlineCloseCircle
                className="text-white"
                size={50}
                onClick={closeTheMenu}
              />
            ) : (
              <AiOutlineMenu
                className="text-white"
                size={50}
                onClick={openTheMenu}
              />
            )}
          </div>
        </div>
        <div className="navigation ">
          <ul className="md:flex mobile__view  ">
            {navigations.map((x) => (
              <a key={x.id} href={`#${x.name}`}>
                <li className="m-2 xl:m-4  xl:text-xl text-white cursor-pointer md:font-semibold">
                  {x.name}
                </li>
              </a>
            ))}
          </ul>
          {/* mobile  view */}
          {open && (
            <ul className="mobile_visiblity">
              {navigations.map((x) => (
                <a key={x.id} href={`#${x.name}`} onClick={closeTheMenu}>
                  <li className="text-white font-bold my-4 bg-green-600 rounded p-4 hover:bg-green-300">
                    {x.name}
                  </li>
                </a>
              ))}
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
