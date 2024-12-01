import CheckBoxIcon from "@mui/icons-material/CheckBox";

import { useEffect, useRef, useState } from "react";

function Message({ messageArray }) {
  const [randomText, setRandomText] = useState([]);
  const messagesEndRef = useRef(null);

  console.log(randomText);

  async function fetchData() {
    const res = await fetch("https://catfact.ninja/fact");
    const data = await res.json();

    setTimeout(() => {
      setRandomText((item) => [...item, data.fact]);
    }, 1000);
  }

  useEffect(
    function () {
      if (messageArray.length > 0) {
        fetchData();
      }
    },
    [messageArray]
  );
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messageArray, randomText]);

  return (
    <div className="w-[100%] bg-slate-200 mt-2 h-96 overflow-y-scroll overflow-x-hidden rounded-md">
      <div className="text-right text-black ">
        {messageArray.map((msg, i) => (
          <div key={i} className="flex flex-col items-end my-5 text-justify">
            <h2 className="text-xl text-slate-50 px-3 py-2 bg-blue-700 inline-block my-1 rounded-md mx-3  ">
              {msg}
            </h2>
            <p className=" text-xl mr-3">
              sent <CheckBoxIcon />
            </p>
            <div className="text-left w-[100%]">
              <h2 className="text-xl text-slate-100 my-3 px-3 w-[60%] sm:w-96 bg-purple-500 sm:ml-5  mx-4 rounded-lg p-3 ">
                {randomText[i]}
              </h2>
            </div>
          </div>
        ))}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
}

export default Message;
