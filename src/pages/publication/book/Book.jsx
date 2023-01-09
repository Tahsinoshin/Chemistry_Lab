import React from "react";
import './Book.css';
import Searchbar from "../searchBar/Searchbar";
import Topbar from "../../../components/topbar/Topbar";
import {list} from "../List"



export default function Book() {
  return (
    <>
      {/* <Topbar /> */}
      <Searchbar data={list} />
      <section className="book-main">
        <div className="book-container">
          <h1>Published Books</h1>
          <div class="d-flex justify-content-center">
            <table class="table table-striped table-hover">
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
