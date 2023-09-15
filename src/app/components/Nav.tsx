import React from "react";
import Image from "next/image";
function Nav() {
  return (
    <div className="grid grid-cols-12 my-5 items-center pr-4">
      <div className="col-span-2">
        <Image
          src="/assets/Payd.svg"
          alt="icon"
          width={100}
          height={100}
          className="w-[70px]"
        />
      </div>
      <div className="col-span-8 flex items-center justify-start gap-9">
        <div className="relative">
          <input
            type="text"
            className="w-[490px] bg-[#FAFAFA] fas rounded-3xl outline-none py-[12px] px-6 placeholder:font-thin placeholder:text-sm
             placeholder:text-[#BBBBBB] text-[#020202d5] text-sm  relative"
            placeholder="🔍   Search"
            style={{
              fontFamily: "Arial, FontAwesome ",
            }}
          />
        </div>
        <div>
          <label className="switch">
            <input type="checkbox" />
            <span className="slider round"></span>
          </label>
        </div>
        <div className="flex border-[1px] py-3 px-8 rounded-[50px] border-[rgba(189, 189, 189, 0.2)] font-medium text-[grey] text-xs cursor-pointer">
          <span>English</span>
          <Image
            src="/assets/arrowdown.svg"
            alt="down"
            width={100}
            height={100}
            className="ml-2 stroke-[2px] w-[14px] "
          />
        </div>

        <div className="bg-[#FAFAFA] py-3 px-4 rounded-[10px]">
          <Image
            height={100}
            width={100}
            src="/assets/bell.svg"
            alt="bell"
            className="w-[17px]"
          />
        </div>
      </div>
      <div className="col-span-2">
        <div className=" flex gap-3 w-full rounded-xl border-[1px] border-[rgba(189, 189, 189, 0.2)] text-[#BBBBBB] text-[12px] items-center justify-start cursor-pointer">
          <Image
            height={100}
            width={100}
            src="/assets/user.png"
            alt="user "
            className="w-[56px] h-full object-contain "
          />
          <div>
            <h1 className="font-medium ">Anddy’s Makeover</h1>
            <h1 className="font-[300]">ID: 1234567</h1>
          </div>
          <Image
            height={100}
            width={100}
            src="/assets/arrowdown.svg"
            alt="down"
            className="ml-2 stroke-[2px] w-[14px] "
          />
        </div>
      </div>
    </div>
  );
}

export default Nav;
