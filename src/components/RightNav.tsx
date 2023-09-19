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
  useEffect(() => {
    const messagesRef = ref(database, "messages");
    const queryRef = query(messagesRef, orderByValue());
    // Create a real-time listener for changes in the "messages" node
    const unsubscribe = onValue(queryRef, (snapshot) => {
      if (snapshot.exists()) {
        const data = snapshot.val();
        const messagesArray: Message[] = Object.values(data);
        setMessages(messagesArray.reverse());
      } else {
        setMessages([]);
      }
    });

    // Cleanup the listener when the component unmounts
    return () => {
      unsubscribe();
    };
  }, [auth]);

  // useEffect(() => {
  //   const messagesRef = ref(database, "messages");

  //   // Example 1: Query all messages
  //   const allMessagesQuery = query(messagesRef);

  //   // Example 2: Query messages with a specific condition (e.g., orderByChild and equalTo)
  //   const specificMessagesQuery = query(
  //     messagesRef,
  //     orderByChild("date") // Order the results by the "timestamp" child
  //   );

  //   // Example 3: Fetch data from the database based on the query
  //   get(allMessagesQuery)
  //     .then((snapshot) => {
  //       if (snapshot.exists()) {
  //         const data = snapshot.val();
  //         const messagesArray: Message[] = Object.values(data);
  //         setMessages(messagesArray);
  //         console.log("All messages:", data);
  //       } else {
  //         console.log("No data available");
  //       }
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching data:", error);
  //     });
  // }, [auth, messages]);

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
      {messages.map((item, index) => {
        return <MessageCard key={index} item={item} />;
      })}
    </div>
  );
}

export default RightNav;
