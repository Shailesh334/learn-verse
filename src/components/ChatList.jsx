import React, { useEffect } from "react";
import ChatComment from "./ChatComment";
import { useDispatch, useSelector } from "react-redux";
import { addChatComment } from "../utils/chatSlice";

const ChatList = () => {
  const dispatch = useDispatch();
  const info = useSelector((store) => store.chat);

  useEffect(() => {
    setInterval(() => {
      getData();
    }, 3000);
  }, []);

  const getData = async () => {
    const data = await fetch(
      "https://dummyjson.com/comments/" + Math.floor(Math.random() * 30) + 1
    );
    const json = await data.json();
   
    dispatch(addChatComment(json));
  };

  return (
    <div className=" h-full flex flex-col-reverse">
      {info.map((c) => (
        <ChatComment body={c.body} username={c.user?.username} />
      ))}
    </div>
  );
};

export default ChatList;
