import React from "react";

const ChatComment = ({body , username}) => {
  return (
    <div className="flex pt-2">
      <img
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/3686/3686930.png"
        className="h-6 mr-1"
      />
      <h1 className=" text-shadow-amber-100 font-mono">{username}</h1>
      <div className="ml-2  font-light">{body}</div>
    </div>
  );
};

export default ChatComment;
