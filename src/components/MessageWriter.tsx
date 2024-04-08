import axios from "axios";
import React, { FC, useRef } from "react";


type MessageWriterProps = {
  updateFunc: (newMessage: any) => void;
}

const MessageWriter:FC<MessageWriterProps> = (
  {updateFunc}
) => {
  const messageWriterRef = useRef<HTMLInputElement>(null);

  const handleSubmit =  async () => {
    if (messageWriterRef.current === null || messageWriterRef.current.value === "") {
      alert("Please type a message");
    }
    console.log("postMessage");
    const data = {
        body: messageWriterRef.current!.value
    }
    const res = await axios.post("http://localhost:8080/messages", data)
    console.log(res);
    messageWriterRef.current!.value = "";
    updateFunc(data);
  }

  return (
    <article className="bg-blue-200 flex flex-col items-center mx-auto p-4 rounded-lg">
      <h3>Message</h3>
      <div className="flex justify-between gap-4">
        <form>
          <input
            ref={messageWriterRef}
            type="text"
            placeholder="Type your message here"
            className="p-2 text-black rounded-md w-52"
          />
        </form>
        <button className="bg-blue-500 text-white p-2 rounded-xl" onClick={handleSubmit}>Send</button>
      </div>
    </article>
  );
};

export default MessageWriter;
