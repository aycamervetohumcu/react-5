import React from "react";
import "./searchResultList.css";
import { SearchResult } from "./searchResult";


export const ResultList = ({items}) => {
  return (
      <div className="list-container">
          {items.map((item, index) => (
              <SearchItem data={item} key={index} />
          ))}
      </div>
  );
};