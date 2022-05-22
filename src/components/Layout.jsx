import React from "react";

import Insights from "./Insights";
import Sidebar from "./Sidebar";

const Layout = ({ children }) => {
  return (
    <div className="grid grid-cols-12 justify-items-stretch">
      <Sidebar />
      <div className="col-span-8 flex flex-col min-h-full">
        <div className="p-6 flex items-center border-b-2 border-slate-300/20">
          <div className="text-xl font-medium">👋 Hi Phillip!</div>
          <div className="relative text-gray-400 focus-within:text-gray-600 ml-12">
            <span className="absolute inset-y-0 left-0 flex items-center pl-2">
              <div className="p-1 focus:outline-none focus:shadow-outline">
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  className="w-6 h-6"
                >
                  <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
                </svg>
              </div>
            </span>
            <input
              type="search"
              name="q"
              className="py-2 px-3 text-sm text-white bg-white rounded-3xl pl-10 focus:outline-none focus:bg-gray 
              -900 focus:text-gray-900"
              placeholder="Search..."
              autoComplete="off"
            />
          </div>
        </div>
        {children}
      </div>
      <div className="col-span-3">
        <Insights />
      </div>
    </div>
  );
};

export default Layout;
