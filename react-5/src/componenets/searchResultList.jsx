import React from "react";
import "./searchResultList.css";
import { SearchResult } from "./searchResult";


export const SearchResultList = ({results}) => {
    return <div className="result-list">
          {
            results.map((result, id) => {
                return <SearchResult results={result} key={id}/>
            })
          } 

        </div>
    
}