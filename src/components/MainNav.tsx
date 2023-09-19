import React from "react";
import Image from "next/image";
import Chart from "./Chart";
import PieChart from "./PieChart";
import BarrChart from "./BarrChart";
function MainNav() {
  return (
    <div className="col-span-7">
      <div className="space-y-2">
        <div className="text-lg font-bold text-[orange]">👋 Hey Anddy!</div>
        <div className="text-[20px] font-semibold">
          You earned NGN 3 ,000,000 this month.
        </div>

        <div className="flex items-center !mt-4">
          <h1 className="font-[600] text-[#828282] dark:text-white">
            Last 30 days
          </h1>

          <div className="bg-[#FAF2FF] w-[30px] h-[30px] flex items-center justify-center rounded-[6px] ml-5">
            <Image
              src="/assets/downPurple.svg"
              alt="down"
              width={17}
              height={17}
              className="w-[11px] h-[7px]"
            />
          </div>
        </div>

        <Chart />
        <div className="flex gap-6 justify-between  w-[85%] ">
          <div className="border-[1px] border-[#F2F2F2] rounded-2xl px-9 pb-7 pt-2 mt-6 w-full items-center justify-center">
            <h1 className="font-bold text-lg text-black  mb-5 mt-4 dark:text-white">
              Success rate
            </h1>

            <PieChart />
            <div className="flex gap-20 items-center mt-4">
              <div>
                <div className="flex gap-3 mb-1 items-center">
                  <div className="bg-[#DFEEDB] w-[22px] h-[22px] rounded-[8px] py-0 "></div>
                  <h1 className="font-semibold text-xl ml-1 ">1</h1>
                </div>
                <div>
                  <h1 className="text-[#828282]">Unsucessful</h1>
                </div>
              </div>
              <div>
                <div className="flex gap-3 mb-1 items-center">
                  <div className="bg-[#A6D997] w-[22px] h-[22px] rounded-[8px] py-0 "></div>
                  <h1 className="font-semibold text-xl  ml-1">150</h1>
                </div>
                <div>
                  <h1 className="text-[#828282]">Sucessful</h1>
                </div>
              </div>
            </div>
          </div>

          <div className="border-[1px] border-[#F2F2F2] rounded-2xl px-9 pb-7 pt-2 mt-6 w-full">
            <h1 className="font-bold text-lg text-black  mb-5 mt-4 dark:text-white">
              Payment issues
            </h1>
            <BarrChart />

            <div className="text-[orange]">
              Total number of errors: <strong>19</strong>
            </div>
            <div className=" flex flex-col gap-3 mt-4 ">
              <div
                className="
              flex gap-3"
              >
                <div className="bg-[#FFBB4F] text-white  w-[22px] flex items-center justify-center h-[22px] rounded-[8px] py-0 ">
                  a
                </div>
                <h1 className="text-[#828282] dark:!text-white  dark:!text-white text-sm font-semibold">
                  Customer errors
                </h1>
              </div>
              <div
                className="
              flex gap-3"
              >
                <div className="bg-[#FFDA93] text-white w-[22px] flex items-center justify-center h-[22px] rounded-[8px] py-0 ">
                  x
                </div>
                <h1 className="text-[#828282] dark:!text-white  text-sm font-semibold">
                  Fraud blocks
                </h1>
              </div>

              <div
                className="
              flex gap-3"
              >
                <div className="bg-[#FF7576] text-white w-[22px] flex items-center justify-center h-[22px] rounded-[8px] py-0 ">
                  o
                </div>
                <h1 className="text-[#828282] dark:!text-white  text-sm font-semibold">
                  Bank errors
                </h1>
              </div>
              <div
                className="
              flex gap-3"
              >
                <div className="bg-[#80E0E5] text-white w-[22px] flex items-center justify-center h-[22px] rounded-[8px] py-0 ">
                  n
                </div>
                <h1 className="text-[#828282] dark:!text-white  text-sm font-semibold">
                  System errors
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default MainNav;
