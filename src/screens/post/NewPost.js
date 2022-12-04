import React, { useContext, useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { ReactComponent as Add } from "../../assets/Add.svg";
import NewPostHeader from "../../components/newPostHeader/NewPostHeader";
import NopostPage from "../../components/noPost/NopostPage";
import ShowPost from "../../components/showPost/ShowPost";
import { modalContext } from "../../Context/modalContext";
import "./style.css";

const NewPost = () => {
  const location = useLocation();
  const [isData, setIsData] = useState("");

  const { boardData, toggleModal } = useContext(modalContext);
  let Data = location.state.item;

  let check1 = Data?.data;
  let check2 = check1?.map((item) => item?.title);

  useEffect(() => {
    if (check2 == undefined) {
      setIsData(true);
    } else {
      setIsData(false);
    }
  }, []);

  const hasData = Boolean(Data?.data?.length);

  return (
    <>
      <NewPostHeader data={Data} />
      <div className="post-container">
        <div className="create-button-container">
          <button
            className="new-post-btn"
            onClick={() => {
              toggleModal();
            }}
          >
            <Add />
            <span className="create-new-btn-text">Create New Post</span>
          </button>
        </div>
        {hasData && (
          <div className="card-container">
            {Data?.data?.map((postData) => (
              <ShowPost data={postData} />
            ))}
          </div>
        )}
        {!hasData && <NopostPage />}
      </div>
    </>
  );
};

export default NewPost;
