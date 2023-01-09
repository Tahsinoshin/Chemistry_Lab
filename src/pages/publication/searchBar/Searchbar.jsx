import React, { useState } from "react";
import "./Searchbar.css";
// import { list } from "../List";


export default function Searchbar({data}) {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <div className="container">
      <form class="search" onSubmit={(e) => e.preventDefault()}>
        <div class="search__wrapper">
          <input
            type="text"
            name=""
            placeholder="Search here..."
            class="search__field"
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          {data
            .filter((val) => {
              if (searchTerm == "") {
                return val;
              } else if (
                val.author.toLowerCase().includes(searchTerm.toLowerCase())) {
                  return val;
              }
            })
            .map((val, key) => {
              return (
                <div classname="user" key={key}>
                  <p>{val.author}</p>
                </div>
              );
            })}

          {/* <button type="submit" class="fa fa-search search__icon"></button> */}
        </div>
      </form>
    </div>
  );
}
