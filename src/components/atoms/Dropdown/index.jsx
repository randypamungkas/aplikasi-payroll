import React from "react";

const Dropdown = () => {
  return (
    <div class="dropdown">
      <div tabindex="0" class="m-1 btn" />
      <ul
        tabindex="0"
        class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
      >
        <li>
          <a>Logout</a>
        </li>
      </ul>
    </div>
  );
};

export default Dropdown;
