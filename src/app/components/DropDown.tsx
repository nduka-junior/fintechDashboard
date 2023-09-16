"use client";
import React, { useState } from "react";
import Image from "next/image";

interface PageProps {
  name: string;
  path: string;
  alt: string;
}

function DropDown({ data, name }: { data: PageProps[]; name: string }) {
  const [toggle, setToggle] = useState<boolean>(true);
  const open = toggle
    ? "transition-all duration-[200]  ease-in  h-0 opacity-0 "
    : "transition-all duration-500  ease-out  h-auto opacity-100 my-6";
  return (
    <div className="pr-5 ">
      <div
        className="flex justify-between items-center !text-[#828282]   dark:!text-white 
        hover:text-[#323232] cursor-pointer mr-7"
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        <h1 className="font-semibold text-[16px] ">{name}</h1>

        {toggle ? (
          <Image
            src="assets/down.svg"
            width={100}
            height={100}
            alt="down"
            className="ml-2 stroke-[2px] w-[12px] "
          />
        ) : (
          <Image
            src="assets/up.svg"
            width={100}
            height={100}
            alt="down"
            className="ml-2 stroke-[2px] w-[12px]  "
          />
        )}
      </div>

      <div className={`${open} border-b-[1px] border-[#DDE7F1] `}>
        <ul className="last:mb-5">
          {data.map((item, index) => {
            return (
              <li
                key={index}
                className="flex  items-center gap-5  justify-start mt-5 cursor-pointer 
                 "
              >
                <Image
                  src={item.path}
                  alt={item.alt}
                  width={30}
                  height={30}
                  className=" stroke-[2px] w-[17px]  "
                />
                <span
                  className="text-[#828282]  dark:text-[white]
                hover:text-[#101010] font-[400] text-[14px]"
                >
                  {item.name}
                </span>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default DropDown;
