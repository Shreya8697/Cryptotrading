import React from "react";
import "./styles.css";
import SearchIcon from "@mui/icons-material/Search";

function Search({ search, onSearchChange }) {
  return (
    <div className="search-flex">
      <SearchIcon sx={{ color: "var(--grey)", fontSize: "1.2rem" }} />
      <input
        className="search-input"
        placeholder="Search"
        value={search}
        onChange={(e) => onSearchChange(e)}
      />
    </div>
  );
}

export default Search;