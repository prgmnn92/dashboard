import React, { useEffect, useState } from "react";
import { MdDashboard } from "react-icons/md";
import { AiOutlinePlus, AiFillEye } from "react-icons/ai";

import { BsThreeDotsVertical } from "react-icons/bs";
import { BiDollar, BiTrendingUp, BiTrendingDown } from "react-icons/bi";

import { Widget, RankList } from "../components";

const productCategoryRanks = [
  {
    name: "Mobile Phone",
    revenue: 12500,
    trend: "up",
  },
  {
    name: "Smart Watch",
    revenue: 11000,
    trend: "down",
  },
  {
    name: "Laptops",
    revenue: 10000,
  },
  {
    name: "Speakers",
    revenue: 9500,
  },
  {
    name: "Camcoders",
    revenue: 5500,
  },
];

const Dashboard = () => {

    const [products, setProducts] = useState([])
    const [loading, setLoading] = useState(true)
  useEffect(() => {
      console.log("mounted")
      setLoading(true)
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) =>{
           setProducts(json)
           setLoading(false)
           console.log(json)
        });
  }, []);

  return (
    <div>
      <div className="top-bar flex p-6">
        <div className="text-slate-400 flex items-center">
          <MdDashboard size="1.25rem" />
          <span className="ml-2.5 text-slate-600 font-medium text-lg">
            Dashboard
          </span>
        </div>
        <div className="grow flex justify-center">
          <div className="text-sm border-2 rounded-3xl overflow-hidden flex font-semibold text-slate-600 cursor-pointer">
            <div className="px-4 border-r-2 py-2 pt-2.5 ">Overview</div>
            <div className="px-4 py-2 bg-white pt-2.5">Products</div>
          </div>
        </div>
        <div>
          <div className="cursor-pointer flex items-center bg-purple-600 text-white rounded-3xl px-4 py-2.5 font-semibold">
            <span className="rounded-full bg-slate-300/25 p-0.5">
              <AiOutlinePlus />
            </span>
            <span className="ml-3">Add Widget</span>
          </div>
        </div>
      </div>
      <div className="p-6 flex gap-6">
        <div className="grow">
          <Widget loading={loading}>
            <div className="flex justify-between items-center mb-6 font-semibold">
              <div>Best Selling Product</div>
              <div className="cursor-pointer">
                <BsThreeDotsVertical />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <img className="max-w-[6rem] max-h-[6rem]" src={products[Math.floor(Math.random() * 19)]?.image}  alt="placeholder" />
              </div>
              <div>
                <div className="flex items-center text-lg font-medium text-slate-500">
                  <span className="mr-2">
                    <BiDollar size="1.25rem" />
                  </span>
                  <span className="text-slate-600 font-bold">12.255</span>
                </div>
                <div className="flex items-center text-lg font-medium text-slate-400 mt-3 text-green-500 font-bold">
                  <span className="mr-3 pt-1 text-green-500  ">
                    <BiTrendingUp size="1rem" />
                  </span>
                  <span className="text-sm text-green-500 ">3.4%</span>
                </div>
              </div>
            </div>
          </Widget>

          <Widget loading={loading}>
            <div className="flex justify-between items-center mb-6 font-semibold">
              <div>Most Viewed Product</div>
              <div className="cursor-pointer">
                <BsThreeDotsVertical />
              </div>
            </div>

            <div className="flex justify-between">
              <div>
                <img className="max-w-[6rem] max-h-[6rem]" src={products[Math.floor(Math.random() * 19)]?.image} alt="placeholder" />
              </div>
              <div>
                <div className="flex items-center text-lg font-medium text-slate-500">
                  <span className="mr-2">
                    <AiFillEye size="1.25rem" />
                  </span>
                  <span className="text-slate-600 font-bold">1.432</span>
                </div>
                <div className="flex items-center text-lg font-medium text-slate-400 mt-3 text-red-500 font-bold">
                  <span className="mr-3 pt-1 text-red-500 ">
                    <BiTrendingDown size="1rem" />
                  </span>
                  <span className="text-sm text-red-500 ">2.4%</span>
                </div>
              </div>
            </div>
          </Widget>
        </div>
        <div className="grow">
          <Widget loading={loading}>
            <div className="flex justify-between items-center mb-6 font-semibold">
              <div>Most Profitable Category</div>
              <div className="cursor-pointer">
                <BsThreeDotsVertical />
              </div>
            </div>

            <div className="flex justify-between">
              <RankList items={productCategoryRanks} />
            </div>
          </Widget>
          <Widget loading={loading}>
            <div className="flex justify-between items-center mb-6 font-semibold">
              <div>Top Selling Products</div>
              <div className="cursor-pointer">
                <BsThreeDotsVertical />
              </div>
            </div>

            <RankList items={products} />
          </Widget>
        </div>
        <div className="grow">
          <Widget loading={loading}>
          <div className="flex justify-between items-center mb-6 font-semibold">
              <div>Most Viewed Products</div>
              <div className="cursor-pointer">
                <BsThreeDotsVertical />
              </div>
            </div>

            <div className="flex justify-between">
              <RankList items={products} />
            </div>
          </Widget>
          <Widget loading={loading}>
            <div className="flex justify-between items-center mb-6 font-semibold">
              <div>General Statistics</div>
              <div className="cursor-pointer">
                <BsThreeDotsVertical />
              </div>
            </div>

            <div className="flex justify-center flex-col items-center">
            <p className="text-2xl font-bold">3466</p>
            <p className="mb-6">Items On Sale</p>
            <p className="text-2xl font-bold">432</p>
            <p>Sales This Month</p>
            </div>
          </Widget>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
