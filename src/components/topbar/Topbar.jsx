import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Topbar.css";
import { navItems } from "../../components/NavItems";
import Dropdown from "../../components/dropdown/Dropdown";

let track = 0;

function Topbar() {
  const [dropdown, setDropdown] = useState("");
  console.log(`RERENDER ${track++}`);

  return (
    <>
      <nav className="navbar">
        <Link to="/" className="navbar-logo">
          <img id="logo" src="assets/logo.png" alt="logo" />
          CHEMISTRY
        </Link>
        <div className="title"><p>Natural Product Research Group</p></div>
        <ul className="nav-items">
          {navItems.map((item) => {
            if (item.title === "People") {
              return (
                <li
                  key={item.id}
                  className={item.cName}
                  onMouseEnter={() => setDropdown("People")}
                  onMouseLeave={() => setDropdown("")}
                >
                  <Link to={item.path}>{item.title}</Link>
                  {dropdown === "People" && <Dropdown type="People" />}
                </li>
           
              );
            
            }

            if(item.title==="Publication"){
              return(
              <li
                key= {item.id}
                className={item.cName}
                onMouseEnter={() => setDropdown("Publication")}
                onMouseLeave={() => setDropdown("")}
                >
                <Link to={item.path}>{item.title}</Link>
                  {dropdown === "Publication" && <Dropdown type="Publication" />}
              </li>
              ); 
            }
            return (
              <li key={item.id} className={item.cName}>
                <Link to={item.path}>{item.title}</Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </>
  );
}

export default Topbar;