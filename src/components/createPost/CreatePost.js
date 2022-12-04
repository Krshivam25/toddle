import React, { useContext, useState, useEffect } from "react";
import { BsImage } from "react-icons/bs";
import { ReactComponent as Cross } from "../../assets/Cross.svg";
import { ReactComponent as AddImageIcon } from "../../assets/AddImageIcon.svg";
import { ReactComponent as Border } from "../../assets/Border.svg";

import { modalContext } from "../../Context/modalContext";
import "./style.css";

const CreatePost = ({ modal, oldData }) => {
  const { boardData, setBoardData } = useContext(modalContext);
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

const handleSubmit = () => {
  if (oldData.data) {
    oldData.data.push({ date: new Date(), title: title, description: desc });
  } else {
    let data = [{ date: new Date(), title: title, description: desc }];
    oldData["data"] = data;
  }
  let allData = boardData;
  const index = boardData?.findIndex((data) => {
    return data.folderName === oldData.folderName;
  });
  allData[index] = oldData;
  setBoardData(allData);
  modal();
};

  return (
    <div className="parent-container">
      <div className="child-container">
        <div className="header-element">
          <div className="text-element">
            <span className="header-text">Create a post</span>
            <span className="header-desc-text">
              Write something for your post
            </span>
          </div>
          <div className="close-btn" onClick={() => modal()}>
            <Cross />
          </div>
        </div>

        <div className="subject-container">
          <span className="subject-text">Subject</span>
          <input
            type="text"
            placeholder="Galápagos Islands, Ecuador"
            onChange={(e) => setTitle(e.target.value)}
          />
        </div>
        <label>
          <div className="image-container">
            <AddImageIcon />
            <span className="add-image-text">Add your image</span>
            <input type="file" style={{ display: "none" }} />
          </div>
        </label>
        <div className="divider-line">
          <Border />
        </div>
        <div className="input-para-container">
          <span className="input-header-text">What's on your mind ?</span>
          <textarea
            placeholder="Type here"
            onChange={(e) => setDesc(e.target.value)}
          />
        </div>
        <div className="footer">
          <button
            className="publish-btn"
            onClick={() => {
              handleSubmit();
            }}
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}

export default CreatePost;
