import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
const Navbar = () => {
  const [navbar, setNavbar] = useState(false);

  const handleNavbar = () => {
    setNavbar(!navbar);
  };
  return (
    <div className="flex justify-between items-center px-4 h-24 max-w-[1240px] mx-auto text-white">
      <h1 className="w-full text-3xl font-bold text-p">jG</h1>

      <ul className="hidden md:flex">
        <li className="p-4">Home</li>
        <li className="p-4">Projects</li>
        <li className="p-4">About</li>
        <li className="p-4">Countact</li>
      </ul>
      <div onClick={handleNavbar} className="block md:hidden">
        {!navbar ? <AiOutlineClose /> : <AiOutlineMenu size={20} />}
      </div>
      <div
        className={
          navbar
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-gray-800 ease-in-out duration-500 md:hidden"
            : "fixed left-[-100%] "
        }
      >
        <h1 className="w-full text-3xl font-bold text-p p-4">jG</h1>
        <ul className="uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Projects</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Countact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
