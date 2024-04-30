// SearchBar.tsx
import React from "react";

const SearchBar = () => {
  return (
    <div className="search-bar">
      <input type="text" placeholder="都市を入力してください" />
      <button>検索</button>
    </div>
  );
};

export default SearchBar;
