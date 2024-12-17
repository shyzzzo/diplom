import React from "react";
import { VscClose } from "react-icons/vsc";

export const CommentItem = ({ cmt }) => {
  const avatar = cmt.comment.trim().toUpperCase().split("").slice(0, 2);

  return (
    <div className="flex items-center gap-3">
      <div className="flex items-center justify-center shrink-0 rounded-full w-10 h-10 bg-blue-300 text-sm">
        {avatar}
      </div>
      <div className="flex text-gray-300 text-[15px]">{cmt.comment}</div>
      <button className="justify-end  items-end text-xl text-red-600 opacity-50"></button>
    </div>
  );
};
