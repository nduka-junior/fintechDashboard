"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { database, auth } from "@/lib/firebase";
import { ref, push, set, serverTimestamp } from "firebase/database";
import { useAuthState, AuthStateHook } from "react-firebase-hooks/auth";

function AddMessage() {
  const [message, setMessage] = useState("");
  const [user, loading, error]: AuthStateHook = useAuthState(auth);
  const [open, setOpen] = useState<boolean>(false);
  const { toast } = useToast();
  const submitMessage = async () => {
    if (message.length == 0) {
      toast({
        variant: "destructive",
        description: "Message cannot be empty",
      });
    }
    if (message.trim() !== "") {
      const messagesRef = ref(database, "messages"); // "messages" is the name of the node where you want to store messages
      const newMessageRef = push(messagesRef); // Create a new message reference
      await set(newMessageRef, {
        message: message,
        PhotoURL: user?.photoURL,
        name: user?.displayName,
        date: serverTimestamp(), // You can use ServerValue.TIMESTAMP to set the timestamp
        id: newMessageRef.key,
      });
      toast({
        description: "Message sent",
      });
      setMessage("");
      setOpen(false)
    }
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger>
        <div className="cursor-pointer">
          <svg
            width="35"
            height="35"
            viewBox="0 0 45 45"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g id="Group 59">
              <line
                id="Line 10"
                x1="22.8242"
                y1="12.8913"
                x2="22.8242"
                y2="32.543"
                stroke="white"
                strokeWidth="2.8"
                className="stroke-black dark:stroke-white"
              />
              <line
                id="Line 11"
                x1="32.543"
                y1="22.5261"
                x2="12.8913"
                y2="22.5261"
                stroke="white"
                strokeWidth="2.8"
                className="stroke-black dark:stroke-white"
              />
              <circle
                id="Ellipse 3"
                cx="22.5"
                cy="22.5"
                r="20.9476"
                stroke="white"
                strokeWidth="3.089528"
                className="stroke-black dark:stroke-white"
              />
            </g>
          </svg>
        </div>
      </DialogTrigger>
      <DialogContent className="p-10  dark:!bg-[#262626]">
        <DialogHeader>
          <DialogTitle className="text-2xl">Type in your message </DialogTitle>
          <DialogDescription>
            <div className="grid w-full max-w-sm items-center gap-1.5 mt-10 space-y-2 ">
              <Label
                htmlFor="email"
                className="text-lg font-medium dark:text-white"
              >
                Message
              </Label>
              <Textarea
                placeholder="Type your message here."
                id="message"
                value={message}
                onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => {
                  setMessage(e.target.value);
                }}
                className="dark:bg-[#333333] dark:text-white"
              />
              <Button onClick={submitMessage}>Send message</Button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
}

export default AddMessage;
