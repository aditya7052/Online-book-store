import React, { useState } from "react";
import { authors } from "../../data/authors";
import Author from "./author";
import "./authors.css";
import { FaSearch } from "react-icons/fa";

const Authors = () => {
  const [searchValue, setSearchValue] = useState("");
  const authorsList = authors.filter((e) => 
    e.name.toLowerCase().includes(searchValue.toLowerCase())
  );

  return (
    <div className="authors">
      <div className="search-box">
        <input
          type="search"
          placeholder="Search in Bookyy..."
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
        < FaSearch className="bi bi-search"/>
      </div>
      <div className="authors-section">
        {authorsList.map((author) => (
          <Author key={author.id} author={author} />
        ))}
      </div>
    </div>
  );
};

export default Authors;
