import React, { useContext, useState } from "react";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

import { ReactComponent as Search } from "../../assets/Search.svg";
import { ReactComponent as BackButton } from "../../assets/BackButton.svg";
import { ReactComponent as ToddleLogo } from "../../assets/ToddleLogo.svg";
import { modalContext } from "../../Context/modalContext";
import GetPost from "../createPost/CreatePost";
import "./style.css";
import SearchBar from "../searchBar/SearchBar";

const NewPostHeader = ({ data }) => {
  const { first, toggleModal } = useContext(modalContext);
  const navigation = useNavigate();
  const [isBookMarked, setIsBookMarked] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleBookMarked = () => {
    setIsBookMarked((prev) => !prev);
  };

  return (
    <>
      {first && <GetPost modal={toggleModal} oldData={data} />}
      <div className="header-container">
        <div className="logo-container">
          <BackButton onClick={() => navigation("/")} className="back-button" />
          <ToddleLogo />
          <span className="header-title">{data?.folderName}</span>
        </div>

        <div className="right-container">
         <Search />
          <div className="right-border"></div>
          <div onClick={() => toggleBookMarked()}>
            {isBookMarked ? (
              <BsBookmarkFill size={"1.3rem"} />
            ) : (
              <BsBookmark size={"1.3rem"} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default NewPostHeader;
