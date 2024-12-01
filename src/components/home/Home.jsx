import { useState } from "react";
import Lower from "../lowersection/Lower";
import Message from "../message/Message";
import Top from "../top/Top";

function Home() {
  const [messageArray, setMessageArray] = useState([]);

  return (
    <div className="bg-slate-600 sm:w-[50%] my-10 mx-auto text-2xl text-slate-100 p-3">
      <h1>Chat app</h1>
      <Top />
      <Message messageArray={messageArray} setMessageArray={setMessageArray} />
      <Lower messageArray={messageArray} setMessageArray={setMessageArray} />
    </div>
  );
}

export default Home;
