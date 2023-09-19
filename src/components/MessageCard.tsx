import React from "react";
import Image from "next/image";
interface PageProps {
  date: Date;
  message: string;
  name: string;
  PhotoURL: string;
  id: string;
}
function MessageCard({ item }: { item: PageProps }) {
  const { date, message, name, PhotoURL } = item;
  function formatUnixTimestamp(timestamp: Date): string {
    const date = new Date(timestamp);
    const options: Intl.DateTimeFormatOptions = {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",

    };
    return date.toLocaleDateString("en-US", options);
  }

  return (
    <div className="bg-white dark:bg-[#333333]  dark:shadow-[0_2px_1px_3px_rgb(255,255,255,0.01)] rounded-[20px] mt-6 p-8  flex flex-col gap-5 shadow-[0_3px_8px_rgb(0,0,0,0.01)] ">
      <div className="flex justify-between items-center">
        <Image
          src={PhotoURL}
          width={100}
          height={100}
          alt="profile pic"
          className="rounded-full w-[30px] h-[30px]"
        />
        <div className="text-[#bdbdbd] text-xs font-medium">
          {formatUnixTimestamp(date)}
        </div>
      </div>

      <div className="flex justify-between items-center">
        <div className="flex flex-col items-start ">
          <h1 className="font-semibold  text-sm">{name}</h1>
          <h1 className="text-[#bdbdbd] text-xs ">{message}</h1>
        </div>
        {/* <Image
          src="/assets/arrowright.svg"
          width={10}
          height={5}
          alt="arrow right"
          className=""
        /> */}
        <svg
          width="10"
          height="12"
          viewBox="0 0 8 12"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.5 11L6.5 6L1.5 1"
            stroke="#333333"
            stroke-width="2"
            className="dark:stroke-white cursor-pointer"
          />
        </svg>
      </div>
    </div>
  );
}

export default MessageCard;
