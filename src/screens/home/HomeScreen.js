import React, { useContext } from "react";
import { modalContext } from "../../Context/modalContext";
import Folder from "./Folder";
import "./style.css";

const HomeScreen = () => {
  const { boardData, setBoardData } = useContext(modalContext);

  console.log({ boardData });

  return (
    <div className="home-screen">
      <div className="home-screen-container">
        <div className="top_text">
          <h1 className="header">My boards</h1>
        </div>
        <div className="All_Data">
          {boardData?.map((folderData) => (
            <>
              {console.log({ folderData })}
              <Folder
                folderData={folderData}
                boardData={boardData}
                setBoardData={setBoardData}
              />
            </>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomeScreen;
