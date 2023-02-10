import React, { useState, useEffect } from "react";
import "./Book.css";
import axios from "axios";
import Banner from "../banner/Banner";

export default function Book() {
  console.log("running");
  const [data, setData] = useState([]);
  const [filterVal, setFilterVal] = useState("");
  const [searchApiData, setSearchApiData] = useState("");

  useEffect(() => {
    const getData = () => {
      axios.get("https://jsonplaceholder.typicode.com/users").then((res) => {
        setData(res.data);
        console.log(res.data);
        setSearchApiData(res.data);
      });
    };
    getData();
  }, []);

  const handleFilter = (e) => {
    if (e.target.value === "") {
      setData(searchApiData);
    } else {
      const filterResult = searchApiData.filter((item) =>
        item.name.toLowerCase().includes(e.target.value.toLowerCase())
      );
      setData(filterResult);
    }
    setFilterVal(e.target.value);
  };
  return (
    <React.Fragment>
      <Banner />
      <div className="research-container">
        <div class="d-flex justify-content-center h-25">
          <div class="searchbar">
            <input
              class="search_input"
              type="text"
              name=""
              placeholder="Search..."
              value={filterVal}
              onInput={(e) => {
                handleFilter(e);
              }}
            />
            <a href="#" class="search_icon">
              <i class="fas fa-search"></i>
            </a>
          </div>
        </div>

        <div className="table-contact">
          <div
            className="shadow-lg p-3 mb-5 bg-body rounded table-section"
            data-aos="fade-in"
          >
            <h1>Published Books</h1>
            <div class="table-responsive-md">
              <table class="table table-hover table-striped">
                <tbody>
                  <tr>
                    <th>Author</th>
                    <th>Publication</th>
                    <th>Year</th>
                  </tr>
                  {data &&
                    data
                      .sort((a, b) => a.username > b.username)
                      .map((item) => {
                        return (
                          <tr>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.username}</td>
                          </tr>
                        );
                      })}
                </tbody>
              </table>
            </div>
          </div>
          <div className="contact-section" data-aos="slide-left">
            <h1>contact us</h1>
            <hr></hr>
            <span>
              <p><span class='material-icons'>place</span>mokarram bhaban,university of dhaka</p>
              <p><i class="material-icons">&#xe158;</i> chemistry@gmail.com</p>
              <p><span class="material-icons">local_phone</span>0123456789</p>
              
            </span>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

{
  /* <div className="justify-content-center main-div">
        <div className="shadow-sm p-3 mb-5 bg-body rounded book-container ">
          <div className="input-box">
            <form class="search" onSubmit={(e) => e.preventDefault()}>
              <div class="search__wrapper">
                <input
                  type="text"
                  name=""
                  placeholder="Search for..."
                  class="form-control fa fa-search search__icon"
                  value={filterVal}
                  onInput={(e) => {
                    handleFilter(e);
                  }}
                />
                <button
                  type="submit"
                  class="fa fa-search search__icon"
                ></button>
              </div>
            </form>
          </div>
          <h1>Published Books</h1>
          <div class="table-responsive-md">
            <table class="table table-hover table-striped">
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Email</th>
                  <th>usename</th>
                </tr>
                {data &&
                  data.map((item) => {
                    return (
                      <tr>
                        <td>{item.name}</td>
                        <td>{item.email}</td>
                        <td>{item.username}</td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </div>
      </div> */
}
