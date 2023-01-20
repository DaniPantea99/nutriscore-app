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
    <div className="flex">
      <div
        className={`h-screen bg-gray-200 text-black transition-all duration-300 px-2 ${
          isOpen && "w-fit"
        }`}
      >
        <div className="flex py-5 px-4 justify-between items-center h-32">
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

        <div className="flex flex-col gap-6">
          {menuItem.map((item, index) => (
            <NavLink
              to={item.path}
              key={index}
              className={({ isActive }) => {
                return (
                  `flex py-3 px-4 rounded-lg transition-all duration-300 hover:bg-blue-500 hover:text-white hover:rounded-lg items-center h-16 
                  ${(isActive
                    ? ' bg-blue-800 text-white hover:bg-blue-800'
                    : undefined)}
                `);
              }}
            >
              <div className="text-2xl">{item.icon}</div>
              <div
                className="capitalize text-xl ml-3"
                style={{ display: isOpen ? "block" : "none" }}
              >
                {item.name}
              </div>
            </NavLink>
          ))}
        </div>
      </div>
      <main className="w-full">{children}</main>
    </div>
  );
}

export default Navbar;
