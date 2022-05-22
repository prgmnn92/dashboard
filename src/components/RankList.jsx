import React from "react";

import { AiOutlineArrowUp, AiOutlineArrowDown } from "react-icons/ai";

const formatNumber = (number) => {
  return Intl.NumberFormat("en-US", {
    notation: "compact",
    maximumFractionDigits: 1,
  }).format(number);
};

const RankListItem = ({ item, id, rank }) => {
  const { trend, name, revenue, title, price } = item;
  let rankClass = "";
  let trending = <></>;
  if (rank === 1) {
    rankClass = "bg-yellow-500/25 text-yellow-500";
  }
  if (rank === 2) {
    rankClass = "bg-zinc-400/25 text-zinc-400";
  }
  if (rank === 3) {
    rankClass = "bg-orange-400/25 text-orange-400";
  }
  if (rankClass === "") {
    rankClass = "bg-zinc-200/25 rounded-full p-1.5";
  }
  if (trend === "up") {
    trending = (
      <div className="text-green-500">
        <AiOutlineArrowUp />
      </div>
    );
  }
  if (trend === "down") {
    trending = (
      <div className="text-red-500">
        <AiOutlineArrowDown />
      </div>
    );
  }

  return (
    <div className="flex justify-start items-center text-slate-500 font-medium my-1">
      {item?.image ? (
        <div className="w-12 h-12 p-2 rounded-full flex items-center justify-center overflow-hidden bg-center bg-contain">
          <img className="bg-cover" src={item.image} alt={item.title} />
        </div>
      ) : (
        <div
          className={`rounded-full p-2 font-bold w-10 h-10 flex items-center justify-center ${rankClass}`}
        >
          {rank}
        </div>
      )}
      <div className="mx-3 grow">{name || title.split(" ")[0]}</div>
      <span>{trending}</span>
      <div className="font-bold ml-1 text-xs bg-zinc-200/25 rounded-full p-1.5">
        <span>$ {revenue ? formatNumber(revenue) : price}</span>
      </div>
    </div>
  );
};

const RankList = ({ items }) => {
  items = items.slice(0, 5);
  return (
    <div className="flex flex-col w-full">
      {items
        .sort((a, b) => b.revenue - a.revenue)
        .map((item, id) => (
          <RankListItem key={id} rank={id + 1} item={item} />
        ))}
    </div>
  );
};

export default RankList;
