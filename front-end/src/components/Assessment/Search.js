import React from "react";
import './Search.css'
const Search = ({onChange, search}) => {

  return (
    <>
      <div class="wrap">
        <div class="search">
          <input
            onChange={onChange}
            value={search}
            type="text"
            class="searchTerm"
            placeholder="검색"
          />
          <button class="searchButton">
            <i class="fa fa-search"></i>
          </button>
        </div>
      </div>
    </>
  );
};

export default Search;
