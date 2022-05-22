import React from "react";

import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

const data = [
  {
    name: "Sales",
    uv: 1000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Sales",
    uv: 2000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Sales",
    uv: 2200,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Sales",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "Sales",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "Sales",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "Sales",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

const Insights = () => {
  return (
    <div className="border-l-2  p-6 border-slate-300/20 min-h-full">
      <div className="border-2 border-slate-300/20 rounded-xl">
        <div className="flex items-center p-6">
          <div className="mr-6 min-w-[7rem]">
            <p className="text-slate-500  mb-1 text-sm">Total Sales</p>
            <p className="font-bold text-slate-600 text-2xl">$281.90</p>
          </div>
          <div className="grow">
            <AreaChart
              width={200}
              height={75}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#8884d8"
                fill="#8884d8"
                strokeWidth={2}
              />
            </AreaChart>
          </div>
        </div>
        <div className="border-t-2 border-slate-300/20 p-6 flex items-center justify-between text-slate-600 font-medium">
          <span>6 total orders</span>
          <span>View report</span>
        </div>
      </div>

      <div className="border-2 border-slate-300/20 rounded-xl my-6">
        <div className="flex items-center p-6">
          <div className="mr-6 min-w-[7rem]">
            <p className="text-slate-500  mb-1 text-sm">Total Sessions</p>
            <p className="font-bold text-slate-600 text-2xl">582</p>
          </div>
          <div className="grow">
            <AreaChart
              width={200}
              height={75}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <Tooltip />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#FCAD98"
                fill="#FCAD98"
                strokeWidth={2}
              />
            </AreaChart>
          </div>
        </div>
        <div className="border-t-2 border-slate-300/20 p-6 flex items-center justify-between text-slate-600 font-medium">
          <span className="rounded-md bg-purple-500/25 p-2 px-3 font-bold text-purple-500">
            Live
          </span>
          <span>4 Visitors</span>
          <span>See Live View</span>
        </div>
      </div>

      <div className="border-2 border-slate-300/20 rounded-xl my-6">
        <div className="flex items-center p-6">
          <div className="mr-6 min-w-[7rem]">
            <p className="text-slate-500  mb-1 text-sm">Customer Rate</p>
            <p className="font-bold text-slate-600 text-2xl">5.43%</p>
          </div>
          <div className="grow">
            <AreaChart
              width={200}
              height={75}
              data={data}
              margin={{
                top: 10,
                right: 30,
                left: 0,
                bottom: 0,
              }}
            >
              <Tooltip />
              <Area
                type="monotone"
                dataKey="pv"
                stroke="#8884d8"
                fill="#8884d8"
                strokeWidth={2}
              />
              <Area
                type="monotone"
                dataKey="uv"
                stroke="#FCAD98"
                fill="#FCAD98"
                strokeWidth={2}
              />
            </AreaChart>
          </div>
        </div>
        <div className="border-t-2 border-slate-300/20 p-6 flex items-center justify-between text-slate-600 font-medium">
          <div className="flex items-center">
            <div
              className="bg-purple-500/50 rounded-full mr-2"
              style={{ width: "10px", height: "10px" }}
            ></div>
            <span>First Time</span>
          </div>
          <div className="flex items-center">
            <div
              className="bg-orange-500/50 rounded-full mr-2"
              style={{ width: "10px", height: "10px" }}
            ></div>
            <span>Returning Time</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Insights;
