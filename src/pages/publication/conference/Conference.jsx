import React, { useState, useEffect } from "react";
import "./Conference.css"; 
import axios from "axios";

export default function Conference() {
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
    <div className="justify-content-center">
      <div className="shadow-sm p-3 mb-5 bg-body rounded book-container ">
        <div className="input-box">
          <input
            class="glyphicon glyphicon-search"
            type="text"
            placeholder="search"
            value={filterVal}
            onInput={(e) => {
              handleFilter(e);
            }}
          />
        </div>
        <h1>Conference Papers</h1>
        <div class="table-responsive-md">
          <table class="table table-hover">
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
    </div>
  );
}

// {/* <Topbar /> */}
// <Searchbar data={list} />
// <section className="book-main">
//   <div className="book-container">
//     <h1>Published Books</h1>
//     <div class="d-flex justify-content-center">
//       <table class="table table-striped table-hover">
//         <thead>
//           <tr>
//             <th scope="col">id</th>
//             <th scope="col">Author</th>
//             <th scope="col">Publication</th>
//             <th scope="col">Year</th>
//           </tr>
//         </thead>

//         <tbody>
//           {list.map((li) => {
//             return (
//               <tr>
//                 {/* <th scope="row">1</th> */}
//                 <td>{li.key}</td>
//                 <td>{li.author}</td>
//                 <td><a href={li.publication}>{li.publication}</a></td>
//                 <td>{li.year}</td>
//               </tr>
//             );
//           })}
//         </tbody>
//       </table>
//     </div>
//   </div>
// </section>
