import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa";
import "./searchBar.css";


export const SearchBar = ({setResults}) => {
  const [input, setInput] = useState("")

  const retrieveData = (query) => {
    fetch("http://jsonplaceholder.typicode.com/users")
    .then((res) => res.json())
    .then(data => {
      const filteredResults = data.filter((person) => {
        return (
          query && 
          person && 
          person.name && 
          person.name.toLowerCase().includes(query)
        );
      });
      setResults(filteredResults);
    });
  };

  const handleChange =(value) => {
    setInput(value);
    fetchData(value);
  };

  return  <div className="input-wrapper">
      <FaSearch id="search-icon"/>      
       <input placeholder="Type to Search..." value={input} onChange={(e) => handleChange(e.target.value)}/>
       <button className='search-btn'>Search</button>
    </div>  
  
};