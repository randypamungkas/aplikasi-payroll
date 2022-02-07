import { CgProfile } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className="w-screen shadow-md bg-white fixed z-20 py-2">
      <div className="mycontainer flex justify-between items-center py-0.5">
        <a href="/">Payroll</a>
        <div className="flex justify-between items-center gap-8">
          <div onClick={() => null}>
            <CgProfile className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
