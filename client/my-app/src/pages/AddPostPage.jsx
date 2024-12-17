import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../redux/features/post/postSlice";

export const AddPostPage = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [image, setImage] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const submitHandler = () => {
    try {
      const data = new FormData();
      data.append("title", title);
      data.append("text", text);
      data.append("image", image);
      dispatch(createPost(data));
      navigate("/");
    } catch (error) {
      console.log(error);
    }
  };
  const clearFormHandler = () => {
    setText("");
    setTitle("");
  };

  return (
    <form className="w-1/3 mx-auto py-10" onSubmit={(e) => e.preventDefault()}>
      <label className="text-gray-300 py-2 bg-gray-600 text-sx mt-2 flex items-center justify-center border-2 border-dotted cursor-pointer">
        Прикрепить изображение
        <input
          type="file"
          className="hidden"
          onChange={(e) => setImage(e.target.files[0])}
        />
      </label>
      <div className="flex object-cover py-2">
        {image && <img src={URL.createObjectURL(image)} alt={image.name} />}
      </div>

      <label className="text-sx text-white opacity-80">
        Заголовок поста:
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Заголовок"
          className="mb-2 mt-1 text-black w-full rounded-lg bg-gray-50 border py-1 px-2 text-sx outline-none placeholder:text-gray-400"
        />
      </label>

      <label className="text-sx text-white opacity-80">
        Текст поста:
        <textarea
          value={text}
          placeholder="Текст поста"
          onChange={(e) => setText(e.target.value)}
          className="mt-1 text-black w-full rounded-lg bg-gray-50 border py-1 px-2 text-sx outline-none resize-none h-40 placeholder:text-gray-400"
        />
      </label>

      <div className="flex gap-8 items-center justify-center mt-4">
        <button
          onClick={submitHandler}
          disabled={title.length > 35}
          className={`flex justify-center items-center bg-gray-600 text-sx text-white rounded-sm py-2 px-4 ${
            title.length > 35 ? "opacity-30" : "opacity-100"
          }`}
        >
          Добавить
        </button>
        <button
          onClick={clearFormHandler}
          className="flex justify-center items-center bg-red-800 text-sx text-white rounded-sm py-2 px-4"
        >
          Отменить
        </button>
      </div>
    </form>
  );
};