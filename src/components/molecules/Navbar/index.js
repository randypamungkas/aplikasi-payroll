import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="w-screen shadow-md bg-white fixed z-20 py-2">
      <div className="mycontainer flex justify-between items-center py-0.5">
        <a href="/">Payroll</a>
        <div className="flex justify-between items-center gap-8">
          <div className="dropdown dropdown-left">
            <div tabindex="0" className="m-1">
              <CgProfile className="text-3xl" />
            </div>
            <ul
              tabindex="0"
              class="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <a href="/login">Logout</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
