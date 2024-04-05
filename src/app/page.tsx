'use client';

import { useEffect, useState } from "react";

const Home = () => {

  const messageArr = ['Hello', 'World', 'from', 'React', 'App!'];
  const [message, setMessage] = useState(messageArr)
  useEffect(() => {

  }, [])
  return (
    <main className="">
      <div className="flex flex-col">
        {messageArr.map((message, index) => (
          <article className="flex flex-col justify-center h-24 border border-white">
            <p key={index} className="text-2xl font-bold text-center">{message}</p>
          </article>
        ))}
      </div>
    </main>
  );
}

export default Home;