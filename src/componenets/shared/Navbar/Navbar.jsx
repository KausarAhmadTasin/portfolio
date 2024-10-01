"use client";
import React, { useState } from "react";
import { RxExternalLink } from "react-icons/rx";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // For drawer icons

const Navbar = () => {
  const [path, setPath] = useState("/");
  const [isDrawerOpen, setIsDrawerOpen] = useState(false); // State to control drawer

  const navItems = [
    {
      itemName: "About",
      itemPath: "/#about",
    },
    {
      itemName: "Skills",
      itemPath: "/#skills",
    },
    {
      itemName: "Projects",
      itemPath: "/#projects",
    },
    {
      itemName: "Education",
      itemPath: "/#education",
    },
    {
      itemName: "Contact",
      itemPath: "/#contact",
    },
  ];

  // Function to toggle drawer
  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  return (
    <nav className="w-full fixed shadow-sm z-50 bg-[#030712] shadow-[#66ec97]">
      <div className="lg:container mx-5 my-4 lg:mx-auto flex justify-between items-center">
        <div>
          <p className="cursor-pointer text-2xl">
            Kausar<span className="text-xs">Ahmad Tasin</span>
          </p>
        </div>

        {/* Large screen nav links */}
        <div className="hidden lg:flex justify-end">
          <ul className="flex items-center gap-x-6">
            {navItems.map((item) => (
              <a
                onClick={() => setPath(item.itemPath)}
                className={`hover:text-[#66ec97]  duration-200 ${
                  path === item.itemPath
                    ? "text-[#66ec97] underline-offset-2 underline"
                    : "text-gray-300"
                }`}
                href={item.itemPath}
                key={item.itemName}
              >
                {item.itemName}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1sr7vEQUZsPsup_Caz5tNvZWaAvnYRZnr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex button border-[#66ec97] hover:bg-black shadow-md  shadow-[#66ec97] hover:border-[#66ec97] bg-[#66ec97] text-black hover:text-[#66ec97] px-3 py-2 rounded-lg font-medium duration-200 ml-10 items-center gap-x-2">
                Resume <RxExternalLink className="text-lg" />
              </button>
            </a>
          </ul>
        </div>

        {/* Drawer for smaller screens */}
        <div className="lg:hidden flex items-center">
          <button onClick={toggleDrawer} className="text-gray-300 text-3xl">
            {isDrawerOpen ? <AiOutlineClose /> : <AiOutlineMenu />}
          </button>
        </div>
      </div>

      {/* Drawer content (for smaller screens) */}
      {isDrawerOpen && (
        <div className="lg:hidden duration-200 bg-[#030712] w-full p-5 shadow-md shadow-[#66ec97]">
          <ul className="flex flex-col items-start gap-y-4">
            {navItems.map((item) => (
              <a
                onClick={() => {
                  setPath(item.itemPath);
                  setIsDrawerOpen(false); // Close drawer after selection
                }}
                className={`hover:text-[#66ec97] duration-200 ${
                  path === item.itemPath
                    ? "text-[#66ec97] underline-offset-2 underline"
                    : "text-gray-300"
                }`}
                href={item.itemPath}
                key={item.itemName}
              >
                {item.itemName}
              </a>
            ))}

            <a
              href="https://drive.google.com/file/d/1sr7vEQUZsPsup_Caz5tNvZWaAvnYRZnr/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex button border-[#66ec97] hover:bg-black shadow-md  shadow-[#66ec97] hover:border-[#66ec97] bg-[#66ec97] text-black hover:text-[#66ec97] px-3 py-2 rounded-lg font-medium duration-200 mt-4 items-center gap-x-2">
                Resume <RxExternalLink className="text-lg" />
              </button>
            </a>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
