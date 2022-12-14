import React, { useState } from "react";
import { peopleDropdown, publicationDropdown } from "../../components/NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown({type}) {
  const [dropdown, setDropdown] = useState(false);

  return (
    <div className="dropdown">
      <ul
        className={dropdown ? "people-submenu clicked" : "people-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {type === "People" || peopleDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>

          );
        })}
      </ul>

      <ul
        className={dropdown ? "publication-submenu clicked" : "publication-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        { type === "Publication" ||  publicationDropdown.map((item) => {
          return (
            <li key={item.id}>
              <Link
                to={item.path}
                className={item.cName}
                onClick={() => setDropdown(false)}
              >
                {item.title}
              </Link>
            </li>
          );
        })}
      </ul>

    </div>
  );
}

export default Dropdown;