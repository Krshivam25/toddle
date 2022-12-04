import React, { useState } from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import {
  BsBookmark,
  BsBookmarkFill,
  BsThreeDotsVertical,
} from "react-icons/bs";
import "./style.css";

const ShowPost = ({ data }) => {
  const { title, date, description, ...otherProps } = data;
  console.log({ title, date, description, otherProps });
  const [isBookMarked, setIsBookMarked] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [isCount, setIsCount] = useState(0);

  const toggleBookMarked = () => {
    setIsBookMarked((prev) => !prev);
  };
  const toggleLike = () => {
    setIsLiked((prev) => !prev);
    setIsCount((prev) => prev + 1);
  };

  return (
    <div className="card-child-container" key={title}>
      <div className="title-container">
        <span className="card-header-text">{title}</span>

        <div className="bookmark_container" onClick={() => toggleBookMarked()}>
          {isBookMarked ? (
            <BsBookmarkFill size={"20px"} color={"orange"} />
          ) : (
            <BsBookmark size={"20px"} />
          )}
          <BsThreeDotsVertical size={"20px"} />
        </div>
      </div>
      <span className="date">{"2nd July"}</span>
      <img
        src="https://www.w3schools.com/css/img_lights.jpg"
        alt="post-image"
        className="img-container"
      />

      <span className="post-description">{description}</span>

      <div className="post-footer">
        <div onClick={() => toggleLike()}>
          {isLiked ? (
            <AiFillHeart size={"20px"} color={"red"} />
          ) : (
            <AiOutlineHeart size={"20px"} />
          )}
        </div>
        {isLiked ? (
          <span style={{ marginLeft: "10px" }}>{1}</span>
        ) : (
          <span style={{ marginLeft: "10px" }}>0</span>
        )}
      </div>
    </div>
  );
};

export default ShowPost;
