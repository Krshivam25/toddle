import React from 'react';

import './style.css';
import { ReactComponent as Search } from "../../assets/Search.svg";


const SearchBar = ({ onChange, onClick }) => {
  return (
      <div className="search-bar">
        <div className="searchIcon">
          <Search />
        </div>
        <input
          placeholder="Search..."
          className="search-text "
          onChange={onChange}
        />
      </div>
  
  );
};
export default SearchBar;
