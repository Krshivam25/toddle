import { useState } from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import "./style.css";

export const Folder = ({ folderData, boardData, setBoardData }) => {
  const { color, data, folderName } = folderData;
  const [isShown, setIsShown] = useState(false);

  const Navigate = useNavigate();

  const toggleFunc = (folderName) => {
    setIsShown((prev) => !prev);
  };

  const delet = (item) => {
    setBoardData(boardData.filter((a) => item !== a.folderName));
  };

  return (
    <div className="item-container" key={folderName}>
      <div
        className="item-color-container"
        style={{ backgroundColor: `${color}` || "wheat" }}
      ></div>
      <div
        className="item-inner-container-2"
        onClick={() => {
          Navigate("/newpost", {
            state: { item: folderData },
            replace: false,
          });
        }}
      >
        <div>
          <span className="file-name">{folderName}</span>
        </div>
      </div>
      <div className="item-inner-container-3">
        <div
          onClick={() => {
            toggleFunc(folderName);
          }}
        >
          <BsThreeDotsVertical />
          {isShown && (
            <div className="float-box">
              <div className="edit-section">
                {/* <CiEdit size={"15px"} /> */}
                <span className="action-text">Edit</span>
              </div>
              <div className="delete-section" onClick={() => delet(folderName)}>
                {/* <RiDeleteBin6Line size={"15px"} color="red" /> */}
                <span className="action-text-delete">Delete</span>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Folder;
