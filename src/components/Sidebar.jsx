import React from "react";
import { MdDashboard, MdSettings } from "react-icons/md";
import { FaClipboard, FaUser } from "react-icons/fa";
import {
  BsFillGrid3X3GapFill,
  BsBasket3Fill,
  BsFillBarChartLineFill,
  BsArrowBarLeft,
} from "react-icons/bs";

const SidebarItem = ({ Icon, isActive}) => {
  return (
    <div className={isActive ? "cursor-pointer transition duration-200 rounded-full p-3 bg-white text-purple-600  my-4 " : "cursor-pointer transition duration-200 text-slate-600 rounded-full p-3 hover:bg-white hover:text-purple-600  my-4 "}>
      <Icon size="1.25rem" />
    </div>
  );
};

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center justify-start p-6 border-r-2 border-slate-300/20 col-span-1 min-h-screen">
      <div
        className="rounded-full w-14 h-14 overflow-hidden bg-center bg-cover mb-12"
        style={{ backgroundImage: "url(/images/profile.jpg)" }}
      ></div>
      <div className="grow">
        <SidebarItem Icon={MdDashboard} label="Dashboard" isActive />
        <SidebarItem Icon={FaClipboard} label="Dashboard" />
        <SidebarItem Icon={BsFillGrid3X3GapFill} label="Dashboard" />
        <SidebarItem Icon={BsBasket3Fill} label="Dashboard" />
        <SidebarItem Icon={FaUser} label="Dashboard" />
        <SidebarItem Icon={BsFillBarChartLineFill} label="Dashboard" />
        <SidebarItem Icon={MdSettings} label="Dashboard" />
      </div>
      <div>
        <span className="cursor-pointer transition duration-200 text-slate-600 rounded-full p-3 hover:text-purple-600">
          <BsArrowBarLeft size="1.5rem" />
        </span>
      </div>
    </div>
  );
};

export default Sidebar;
