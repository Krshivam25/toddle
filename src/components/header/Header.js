import React, { useContext, useEffect, useState } from "react";

import { modalContext } from "../../Context/modalContext";
import { ReactComponent as Add } from "../../assets/Add.svg";
import { ReactComponent as Cross } from "../../assets/Cross.svg";
import { ReactComponent as ToddleTitleLogo } from "../../assets/ToddleTitleLogo.svg";
import Modal from "../modal/Modal";
import "./style.css";
import SearchBar from "../searchBar/SearchBar";

const Header = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [state, setState] = useState("");
  const [boardName, setBoardName] = useState("");
  const [themeColor, setThemeColor] = useState(state);
  const [query, setQuery] = useState("");
  const { setBoardData, boardData } = useContext(modalContext);
  const handleClose = () => setShowAddModal(false);
  const handleShow = () => setShowAddModal(true);

  const DummyColor = [
    {
      id: 1,
      color: "#A7F0F9",
    },
    {
      id: 2,
      color: "#C5C5FC",
    },
    {
      id: 3,
      color: "#FFAEC0",
    },
    {
      id: 4,
      color: "#FFCC66",
    },
  ];

  const getData = (ID) => {
    let Data = DummyColor.filter((item) => {
      return item.id == ID;
    });
    setState(
      Data.map((item) => {
        return item.id;
      })
    );
  };
  useEffect(() => {
    let ColorName = DummyColor.filter((item) => item.id == state).map(
      (item) => item.color
    );
    setThemeColor(ColorName);
    search();
  }, [state, query]);

  const addData = () => {
    setBoardData([...boardData, { folderName: boardName, color: themeColor }]);
    handleClose();
  };

  let search = () => {
    setBoardData(
      boardData.filter((item) =>
        item.folderName.toLocaleLowerCase().includes(query)
      )
    );
  };

  const modalChild = () => {
    return (
      <div className="modal-container">
        <div className="modal-header">
          <span className="modal-header-text">Add a name for your board </span>
          <Cross onClick={handleClose} className="cross-icon" />
        </div>
        <div className="input-title-container">
          <input
            type="text"
            placeholder="Places around the world"
            onChange={(e) => setBoardName(e.target.value)}
          />
        </div>
        <div className="select-color-container">
          <span className="select-color-header">Select post colour</span>
          <span className="select-color-description">
            Here are some template to help you get started
          </span>

          <div className="color-container">
            {DummyColor.map((item) => {
              return (
                <div key={item.id}>
                  <div
                    style={{
                      backgroundColor: `${item.color}`,

                      border: `${
                        state == item.id ? "1.5px solid #23856D" : ""
                      }`,
                    }}
                    className="color"
                    onClick={() => {
                      getData(item.id);
                    }}
                  ></div>
                </div>
              );
            })}
          </div>
          <div className="footer">
            <button
              onClick={() => {
                addData();
              }}
              className="create-board-btn"
            >
              Create board
            </button>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="nav-bar">
      <ToddleTitleLogo />
      <div className="nav-bar-search">
        <SearchBar
          onChange={(e) => setQuery(e.target.value.toLocaleLowerCase())}
        />
        <button className="header-btn" onClick={handleShow}>
          <Add />
          <span className="header-btn-text">Create new board</span>
        </button>
      </div>

      <Modal
        onClick={handleClose}
        open={showAddModal}
        children={modalChild()}
      />
    </div>
  );
};
export default Header;
