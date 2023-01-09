import { Search } from "@mui/icons-material";
import React from "react";
import './Journal.css';
import Searchbar from "../searchBar/Searchbar";
import Topbar from "../../../components/topbar/Topbar";
import {list} from "../List"



export default function Journal() {
  return (
    <>
      <Topbar />
      <Searchbar />
      <section className="main">
        <div className="journal-container">
          <h1>Published Journal Paper</h1>
          <div className="element">
            <table class="table table-hover">
              <thead>
                <tr>
                  <th scope="col">id</th>
                  <th scope="col">Author</th>
                  <th scope="col">Publication</th>
                  <th scope="col">Year</th>
                </tr>
              </thead>

              <tbody>
                {list.map((li) => {
                  return (
                    <tr>
                      {/* <th scope="row">1</th> */}
                      <td>{li.key}</td>
                      <td>{li.author}</td>
                      <td><a href={li.publication}>{li.publication}</a></td>
                      <td>{li.year}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </>
  );
}
