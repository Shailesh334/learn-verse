import React, { useRef, useState } from "react";
import CommentList from "./CommentList";
import { useDispatch } from "react-redux";
import { addReply } from "../utils/commentSlice";

const CommentCard = ({ data }) => {
  const [showReply, setShowReply] = useState(false);
  const replyInput = useRef();

  const dispatch = useDispatch();

  const handleReplyClick = () => {
    setShowReply(!showReply);
  };

  const handleSubmitReply = () => {
    function generateId() {
      return `${Date.now()}-${Math.floor(Math.random() * 1000)}`;
    }
    const newReply = {
      id: generateId(),
      user: "You",
      text: replyInput?.current?.value ,
      replies: [],
    };
    dispatch(addReply({ id: data.id, newReply: newReply }));
    setShowReply(!showReply);
  };
  return (
    <div className="flex">
      <div>
        <img
          src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
          alt="user-profile"
          className="h-6 mt-2"
        />
      </div>
      <div className="pt-1 mt-1">
        <div className=" pl-2 rounded-md">
          <h1 className="font-bold"> {data.user}</h1>
          <p className="pl-2">{data.text}</p>
          <p
            className="font-medium text-sm ml-12  cursor-pointer "
            onClick={handleReplyClick}
          >
            Reply
          </p>
          {showReply && (
            <div>
              <input
                type="text"
                className="mt-1 border ml-3"
                ref={replyInput}
              />
              <button
                className="px-1 cursor-pointer hover:bg-gray-300 rounded-lg"
                onClick={handleSubmitReply}
              >
                submit
              </button>
            </div>
          )}
        </div>
        {data.replies.length > 0 && (
          <div className="pl-7 pt-1 border border-l-black border-r-0 border-t-0 border-b-0 ">
            <CommentList comments={data.replies} />
          </div>
        )}
      </div>
    </div>
  );
};

export default CommentCard;
