import React, { useEffect, useState } from "react";
import ChatMessage from "./ChatMessage";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "../utils/chatSlice";
import { YOUTUBE_LIVECHAT_API } from "../utils/constants";
import { generateRandomName, makeRandomMessage } from "../utils/helper";

const LiveChat = () => {
  const [liveMessage, setLiveMessage] = useState("");
  const dispatch = useDispatch();

  const ChatMessages = useSelector((store) => store.chat.messages);

  useEffect(() => {
    const i = setInterval(() => {
      // console.log("API Polling");

      dispatch(
        addMessage({
          name: generateRandomName(),
          message: makeRandomMessage(20) + "🚀",
        })
      );
    }, 1500);

    // Garbage collection
    return () => clearInterval(i);
  }, []);

  return (
    <>
      <div>
        <div className="flex">
          <img
            className="w-10 h-10 px-1 ml-3 mb-1"
            alt="chat-icon"
            src="https://www.svgrepo.com/show/529481/chat-round-dots.svg"
          />
          <h1 className="font-bold py-1.5 text-xl">Live Chat</h1>
        </div>
        <div className="ml-2 p-2 border border-slate-300 h-[408px] w-full bg-slate-100 rounded-lg overflow-y-scroll flex flex-col-reverse">
          {
            // Disclaimer: Don't use indexes as keys
            ChatMessages.map((c, i) => (
              <ChatMessage key={i} name={c.name} message={c.message} />
            ))
          }
        </div>
      </div>

      <form
        className="w-full p-2 ml-2 rounded-lg"
        onSubmit={(e) => {
          e.preventDefault();
          dispatch(
            addMessage({
              name: "Nikhil Gugwad",
              message: liveMessage,
            })
          );
          setLiveMessage("")
        }}
      >
        <input
          className="w-96 p-2 rounded-lg border border-slate-300"
          type="text"
          placeholder="type your message here..."
          value={liveMessage}
          onChange={(e) => setLiveMessage(e.target.value)}
        />
        <button className="px-2 ml-4 bg-red-600 text-white rounded-lg">
          Send
        </button>
      </form>
    </>
  );
};

export default LiveChat;
