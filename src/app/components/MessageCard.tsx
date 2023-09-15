import React from "react";
import Image from "next/image";
interface PageProps {
  date: string;
  message: string;
  name: string;
  initialName: string;
  color: string;
}
function MessageCard({ item }: { item: PageProps }) {
  const { date, message, name, initialName, color } = item;

  return (
    <div className="bg-white  rounded-[20px] mt-6 p-8  flex flex-col gap-5 shadow-[0_3px_8px_rgb(0,0,0,0.1)] ">
      <div className="flex justify-between items-center">
        <div
          className={` w-[30px] h-[30px] rounded-[10.7px] flex items-center justify-center text-white font-bold `}
          style={{ backgroundColor: `${color}` }}
        >
          {initialName}
        </div>
        <div className="text-[#bdbdbd] text-xs">{date}</div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start ">
          <h1 className="font-semibold  text-sm">{name}</h1>
          <h1 className="text-[#bdbdbd] text-xs ">{message}</h1>
        </div>
        <Image
          src="/assets/arrowright.svg"
          width={10}
          height={5}
          alt="arrow right"
          className="cursor-pointer"
        />
      </div>
    </div>
  );
}

export default MessageCard;
