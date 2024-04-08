import axios from "axios";
import React, { FC, MutableRefObject } from "react";

type MessageWriterProps = {
  ref: any;
};

const MessageWriter:FC<MessageWriterProps> = (
    { ref }
) => {
  const handleSubmit =  async () => {
    const msg = ref.current.value;
    const res = await axios.post("http://localhost:8080/message", { message: msg })
    console.log(res.data);
  }

  return (
    <article className="bg-blue-200 flex flex-col items-center mx-auto p-4 rounded-lg">
      <h3>Message</h3>
      <div className="flex justify-between gap-4">
        <form>
          <input
            type="text"
            placeholder="Type your message here"
            className="p-2 text-black rounded-md w-52"
            ref={ref}
          />
        </form>
        <button className="bg-blue-500 text-white p-2 rounded-xl" onClick={handleSubmit}>Send</button>
      </div>
    </article>
  );
};

export default MessageWriter;
