"use client";
import React, { useState, useEffect } from "react";
import AddMessage from "./AddMessage";
import MessageCard from "./MessageCard";
import { database } from "@/lib/firebase";

import {
  ref,
  query,
  orderByChild,
  get,
  orderByValue,
  onValue,
} from "firebase/database";
import { auth } from "@/lib/firebase";
interface Message {
  id: string;
  message: string;
  PhotoURL: string;
  name: string;
  date: Date;
}
function RightNav() {
  const [messages, setMessages] = useState<Message[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    setLoading(true);
    const messagesRef = ref(database, "messages");
    const queryRef = query(messagesRef, orderByValue());
    // Create a real-time listener for changes in the "messages" node
    const unsubscribe = onValue(queryRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const messagesArray: Message[] = Object.values(data);
        setMessages(messagesArray.reverse());


        setLoading(false);
      } else {
        setLoading(false);
        setMessages([]);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [auth]);

  return (
    <div className="col-span-3 sticky bg-[#F9F9F9] dark:bg-[#525252] px-7 pb-5  pt-[50px] rounded-tl-[65px] rounded-bl-[30px] overflow-y-auto h-[87.5vh]">
      <div className="flex justify-between items-center border-b-[1px] border-[#ededed] pb-3  text-[15px] ">
        <div>
          <h1 className="text-[#bdbdbd]  font-medium">Stats</h1>
        </div>
        <AddMessage />
        <div>
          <h1>
            <strong>Messages</strong>
          </h1>
        </div>
      </div>
      {loading && (
        <div className="flex items-center justify-center h-full">
          <div className="w-14 h-14 border-t-2 border-white border-dashed rounded-full animate-spin"></div>
        </div>
      )}
      {loading == false &&
        messages.length > 0 &&
        messages.map((item, index) => {
          return <MessageCard key={index} item={item} />;
        })}
      {loading == false && messages.length == 0 && (
        <div className="text-lg font-medium flex  items-center  h-full justify-center tracking-widest  text-center w-full">
          <div>
            Message box empty,
            <br />
            type in a message 👆🏽
          </div>
        </div>
      )}
    </div>
  );
}

export default RightNav;
