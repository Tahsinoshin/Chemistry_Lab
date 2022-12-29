import { Search } from "@mui/icons-material";
import React from "react";
import './Book.css';
import Searchbar from "../searchBar/Searchbar";
import Topbar from "../../../components/topbar/Topbar";

const list = [
  {
    key: "1",
    year: "2016",
    author: "John",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "2",
    year: "2017",
    author: "david",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "3",
    year: "2018",
    author: "david",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "4",
    year: "2019",
    author: "deniel",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "5",
    year: "2020",
    author: "smith",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
  {
    key: "6",
    year: "2021",
    author: "koel",
    publication: "https://www.nature.com/articles/s41467-021-21459-y",
  },
];

export default function Book() {
  return (
    <>
      <Topbar />
      <Searchbar />
      <section className="main">
        <div className="container">
          <h1>Published Books</h1>
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
