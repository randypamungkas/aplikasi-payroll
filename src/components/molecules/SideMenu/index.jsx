import React from 'react'
import { staticConst } from '../../../static/staticConst'
import { useNavigate } from 'react-router'

const SideMenu = () => {
  const navigate = useNavigate()

  return (
    <div className="rounded-lg __montserat-text shadow border border-gray-200 bg-white py-5">
      <div className="mt-2">
        {staticConst.profile_menu.user.user_menu.map((el, index) => (
          <div key={index}>
            <div
              className={`${
                el.menu.path === window.location.pathname
                  ? 'bg-gray-800 text-white'
                  : ''
              } text-sm py-1 hover:bg-gray-100 text-gray-600 hover:text-gray-600 cursor-pointer flex items-center px-4`}
            >
              <span>{el.menu.icon}</span>
              <div
                className="px-4 py-2"
                onClick={() => navigate(el.menu.path, { replace: true })}
              >
                {el.menu.title}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default SideMenu
