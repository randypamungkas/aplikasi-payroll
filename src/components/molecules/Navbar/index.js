import { CgProfile } from 'react-icons/cg'
import { useNavigate } from 'react-router'

const Navbar = () => {
  const navigate = useNavigate()
  return (
    <div className="w-screen shadow-md bg-white fixed z-20 py-2">
      <div className="mycontainer flex justify-between items-center py-0.5">
        <div onClick={() => navigate('/')} className="text-lg">
          PayrollApp
        </div>
        <div className="flex justify-between items-center gap-8">
          <div className="dropdown dropdown-left">
            <div tabIndex="0" className="m-1">
              <CgProfile className="text-3xl" />
            </div>
            <ul
              tabIndex="0"
              className="p-2 shadow menu dropdown-content bg-base-100 rounded-box w-52"
            >
              <li>
                <button
                  onClick={() => {
                    localStorage.removeItem('isAuth')

                    window.location.href = '/login'
                  }}
                >
                  Logout
                </button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar
