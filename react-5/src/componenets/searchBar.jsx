import React, { useState } from "react";
import { FaSearch } from "react-icons/fa";
import "./searchBar.css";

export const SearchComponent = ({ updateResults }) => {
  const [searchQuery, setSearchQuery] = useState("");

  const retrieveData = async (inputValue) => {
    try {
      const response = await fetch("http://jsonplaceholder.typicode.com/users");
      const data = await response.json();

      const filteredResults = [];
      for (let user of data) {
        if (
          inputValue &&
          user &&
          user.name &&
          user.name.toLowerCase().includes(inputValue.toLowerCase())
        ) {
          filteredResults.push(user);
        }
      }

      updateResults(filteredResults);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const onInputChange = (newValue) => {
    setSearchQuery(newValue);
    retrieveData(newValue);
  };

  return (
    <div className="search-container">
      <FaSearch className="icon-search" />
      <input
        type="text"
        placeholder="Search something..."
        value={searchQuery}
        onChange={(e) => onInputChange(e.target.value)}
      />
      <button className="btn-search">Go</button>
    </div>
  );
};
