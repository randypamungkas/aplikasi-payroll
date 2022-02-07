import { CgProfile } from "react-icons/cg";
import { useNavigate } from "react-router";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <div className="w-screen shadow-md bg-white fixed z-20 py-2">
      <div className="mycontainer flex justify-between items-center py-0.5">
        <div onClick={() => navigate("/")} className="text-lg">
          PayrollApp
        </div>
        <div className="flex justify-between items-center gap-8">
          <div onClick={() => navigate("/login")}>
            <CgProfile className="text-3xl" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
