'use client';

import MessageWriter from "@/components/MessageWriter";
import { Message } from "@/types/message";
import { getMessage } from "@/utils/actions";
import { useEffect, useRef, useState } from "react";

const Home = () => {

  const messageArr = [
    {
      id: 111,
      body: "Hello World",
      createdAt: "2021-08-01",
      updatedAt: "2021-08-01"
    },
    {
      id: 222,
      body: "Hello World",
      createdAt: "2021-08-01",
      updatedAt: "2021-08-01"
    }
  ];
  const [message, setMessage] = useState(messageArr);

  let offset = 0;
  let limit = 10;

  const updateMessages = async () => {
    const msg = await getMessage(offset, limit);
    const messageCount = message.length;
    offset += messageCount;
    const newMessageArray = [...message, ...msg];
    setMessage(newMessageArray);
    console.log(newMessageArray);
  }

  const updateUI = (newMessage: Message) => {
    const newMsg = {
      id: 333,
      body: newMessage.body,
      createdAt: "2021-08-01",
      updatedAt: "2021-08-01"
    }
    const newMessageArray = [...message, newMsg];
    setMessage(newMessageArray);
  }

  useEffect(() => {
    updateMessages();
  }, [])
  return (
    <main className="">
      <div className="flex flex-col">
        {message.map((message, index) => (
          <article key={index} className="flex flex-col justify-center h-24 border border-white">
            <p key={index} className="text-2xl font-bold text-center">{message.body}</p>
          </article>
        ))}
        <MessageWriter updateFunc={updateUI}/>
      </div>
    </main>
  );
}

export default Home;