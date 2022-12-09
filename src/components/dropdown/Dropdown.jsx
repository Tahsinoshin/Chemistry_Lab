import React, { useState } from "react";
import { peopleDropdown, publicationDropdown } from "../../components/NavItems";
import { Link } from "react-router-dom";
import "./Dropdown.css";

function Dropdown() {
  const [dropdown, setDropdown] = useState(false);

  return (
    <>
      <ul
        className={dropdown ? "people-submenu clicked" : "people-submenu"}
        onClick={() => setDropdown(!dropdown)}
      >
        {peopleDropdown.map((item) => {
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
        {publicationDropdown.map((item) => {
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

    </>
  );
}

export default Dropdown;