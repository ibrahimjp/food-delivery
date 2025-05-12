import React from "react";

const SearchBox = () => {
  return (
    <div>
      <div className="search-container" data-search-container>
        <div className="search-box">
          <input
            type="search"
            name="search"
            aria-label="Search here"
            placeholder="Type keywords here..."
            className="search-input"
          />

          <button className="search-submit" aria-label="Submit search" data-search-submit-btn>
            <ion-icon name="search-outline"></ion-icon>
          </button>
        </div>

        <button className="search-close-btn" aria-label="Cancel search" data-search-close-btn>
          ✖
        </button>
      </div>
    </div>
  );
};

export default SearchBox;
