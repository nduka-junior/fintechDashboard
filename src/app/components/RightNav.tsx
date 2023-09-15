import React from "react";
import MessageCard from "./MessageCard";

function RightNav() {
  const messageCard = [
    {
      name: "Lupita Jonah",
      message: "Thank you so much for ....",
      initialName: "L",
      color: "#FFBB4F",
      date: "Feb 13, 06:15pm",
    },
    {
      name: "Nduka Sochi",
      message: "Playing codm...",
      initialName: "N",
      color: "#FF7576",
      date: "Sept 15, 19:16pm",
    },
    {
      name: "Eseosa Igbinobaro",
      message: "I got your email ad and ...",
      initialName: "E",
      color: "#8E4B6E",
      date: "Wed, 06:00pm",
    },

    {
      name: "James Robinson",
      message: "I need some maintenac...",
      initialName: "J",
      color: "#7FE0E5",
      date: "Jan 2 , 12:31pm",
    },
    {
      name: "Nduka Junior",
      message: "Always coding...",
      initialName: "N",
      color: "#ECCCFF",
      date: "Sept 15, 18:49pm",
    },
    {
      name: "Nduka Junior",
      message: "Always coding...",
      initialName: "N",
      color: "#ECCCFF",
      date: "Sept 15, 18:49pm",
    },
    {
      name: "Nduka Junior",
      message: "Always coding...",
      initialName: "N",
      color: "#ECCCFF",
      date: "Sept 15, 18:49pm",
    },
    {
      name: "Nduka Junior",
      message: "Always coding...",
      initialName: "N",
      color: "#ECCCFF",
      date: "Sept 15, 18:49pm",
    },
  ];

  return (
    <div className="col-span-3 bg-[#F9F9F9] px-7  pt-[50px] rounded-tl-[65px] overflow-y-auto h-[85vh]">
      <div className="flex justify-between items-center border-b-[1px] border-[#ededed] pb-3  text-[15px] ">
        <h1 className="text-[#bdbdbd]  font-medium">Stats</h1>

        <h1>
          <strong>Messages</strong>
        </h1>
      </div>
      {messageCard.map((item, index) => {
        return <MessageCard key={index} item={item} />;
      })}
    </div>
  );
}

export default RightNav;
