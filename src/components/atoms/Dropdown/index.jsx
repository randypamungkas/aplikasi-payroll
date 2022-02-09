import React from "react";

const Dropdown = () => {
  return (
    <div className="dropdown">
      <div tabIndex="0" className="m-1 btn" />
      <ul
        tabIndex="0"
        className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
