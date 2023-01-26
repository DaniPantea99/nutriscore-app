import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  BsFillArrowLeftCircleFill,
  BsFillGrid1X2Fill,
  BsPersonCircle,
  BsGearFill,
} from "react-icons/bs";

function Navbar({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const toggleOpen = () => setIsOpen(!isOpen);

  const menuItem = [
    {
      path: "/",
      name: "dashboard",
      icon: <BsFillGrid1X2Fill />,
    },
    {
      path: "/user",
      name: "user",
      icon: <BsPersonCircle />,
    },
    {
      path: "/settings",
      name: "settings",
      icon: <BsGearFill />,
    },
    
    
  ];

  return (
    <div className="flex h-full grow">
      <div
        className={`flex flex-col bg-gray-200 text-black transition-all duration-300 w-20 ${
          isOpen && "w-60"
        }`}
      >
        <div className="flex items-center justify-between px-4 py-5">
          <div
            className={`text-3xl cursor-default ${isOpen ? "block" : "hidden"}`}
          >
            Logo
          </div>
          <div className="flex text-3xl cursor-pointer">
            <BsFillArrowLeftCircleFill
              onClick={toggleOpen}
              className={`transition-all duration-500 ${
                !isOpen && "rotate-180"
              }`}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2 px-2 overflow-y-auto no-scrollbar">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) => {
                return (
                  `flex p-2 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:rounded-lg h-16 items-center
                  ${(isActive
                    ? ' bg-blue-800 text-white hover:bg-blue-800'
                    : undefined)} 
                  ${isOpen ? "justify-left" : "justify-center"}
                `);
              }}
            >
              <div className="text-2xl">{item.icon}</div>
              <div
                className="ml-3 text-xl capitalize"
                style={{ display: isOpen ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main className="grow">{children}</main>
    </div>
  );
}

export default Navbar;
