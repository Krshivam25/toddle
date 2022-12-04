import React, { useContext } from 'react';

import { modalContext } from '../../Context/modalContext';
import {ReactComponent as NoPost} from '../../assets/NoPost.svg'
import "./style.css";


const NopostPage = () => {
  const {toggleModal } = useContext(modalContext);
  return (
      <div className="blank-container">
        <NoPost />
        <div className="text-container" onClick={() => toggleModal()}>
          <span className="nothing-text">Nothing here yet</span>
          <span className="desc-text">
            Create your first post by clicking on the '+' button above
          </span>
        </div>
      </div>
  );
}

export default NopostPage;
