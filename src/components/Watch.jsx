import React, { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeMenuList } from "../utils/appSlice";
import { useSearchParams } from "react-router-dom";
import CommentList from "./CommentList";
import ChatList from "./ChatList";
import { addChatComment } from "../utils/chatSlice";

const Watch = () => {
  const { commentsData } = useSelector((store) => store.comment);

  const chatInp = useRef("");
  const dispatch = useDispatch();

  dispatch(closeMenuList());

  const handleChatPost = () => {
    const comment = {
      id: 2611,
      body: chatInp.current.value,
      postId: 1233,
      likes: 9,
      user: {
        fullName: "You",
        id: 38,
        username: "You",
      },
    };
  
    chatInp.current.value && dispatch(addChatComment(comment));
    chatInp.current.value = ""
  };

  let [searchParams] = useSearchParams();
  const id = searchParams.get("v");
  return (
    <div className="p-2 m-2 flex w-full ">
      <div>
        <iframe
          className="rounded-lg"
          width="900"
          height="500"
          src={"https://www.youtube.com/embed/" + id}
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>

        <div className="p-2 my-2">
          <h1 className="text-2xl font-bold">Comments :</h1>
          <CommentList comments={commentsData} />
        </div>
      </div>

      <div className="px-2 mx-2 bg-slate-100 w-full border rounded-lg h-1/4 relative">
        <div className="h-full p-2 text-black font-medium overflow-y-scroll ">
          <h1>Live Chat</h1>
          <ChatList />
        </div>

        <div className="py-2">
          <input
            type="text"
            className="w-2/3 p-2 rounded-lg bg-slate-100"
            placeholder="chat.."
            ref={chatInp}
          />
          <button
            className="bg-green-200 py-2 px-4 rounded-lg mx-2 cursor-pointer"
            onClick={handleChatPost}
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Watch;
