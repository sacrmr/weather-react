import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import "./Search.css";

export default function Search() {
  return (
    <div className="Search">
      <form id="search-bar">
        <input
          id="search-input"
          type="search"
          placeholder="Search City..."
          autoFocus
          autoComplete="off"
        />
        <button className="search-button" type="submit">
          <i className="fa-solid fa-magnifying-glass"></i>
        </button>
      </form>
    </div>
  );
}
