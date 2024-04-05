import React from "react";

const MessageWriter = () => {
  return (
    <article className="bg-blue-200 flex flex-col items-center mx-auto p-4 rounded-lg">
      <h3>Message</h3>
      <div className="flex justify-between gap-4">
        <form>
          <input
            type="text"
            placeholder="Type your message here"
            className="p-2 text-black rounded-md w-52"
          />
        </form>
        <button className="bg-blue-500 text-white p-2 rounded-xl">Send</button>
      </div>
    </article>
  );
};

export default MessageWriter;
