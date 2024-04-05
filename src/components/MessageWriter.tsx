import React, { FC, MutableRefObject } from "react";

type MessageWriterProps = {
  ref: any;
};

const MessageWriter:FC<MessageWriterProps> = (
    { ref }
) => {
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
        <button className="bg-blue-500 text-white p-2 rounded-xl">Send</button>
      </div>
    </article>
  );
};

export default MessageWriter;
