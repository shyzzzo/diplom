import React from "react";
import { Link } from "react-router-dom";

export const PopularPosts = ({ post }) => {
  return (
    <div className="bg-gray-600 my-1">
      <Link
        to={`/${post._id}`}
        className="flex max-w-[100px] text-clip overflow-hidden ... text-sx p-2 text-gray-300 hover: bg-gray-600 hover:text-white cursor-pointer"
      >
        {post.title}
      </Link>
    </div>
  );
};
