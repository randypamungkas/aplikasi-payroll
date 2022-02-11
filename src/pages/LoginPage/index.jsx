import { useState } from 'react'

const LoginPage = () => {
  const [errorAuth, setErrorAuth] = useState('')
  const [isAuth, setAuth] = useState({
    email: '',
    password: '',
  })

  const handleSubmit = () => {
    if (isAuth.email === 'admin@gmail.com' && isAuth.password === 'admin123') {
      localStorage.setItem('isAuth', true)

      window.location.href = '/'
    } else {
      setErrorAuth('Email atau password salah!')

      setTimeout(() => {
        setErrorAuth('')
      }, 3000)
    }
  }

  const handleChangeAuth = (key, val) => {
    setAuth({
      ...isAuth,
      [key]: val,
    })
  }

  return (
    <div className="block sm:my-8 sm:align-middle sm:max-w-md sm:w-full p-3 m-auto shadow-lg rounded-md">
      <div className="px-0 py-6 bg-white m-auto max-w-max rounded-md __montserat-text">
        <h1 className="font-bold pt-4 text-2xl text-center">Login</h1>
        <div className="mb-7 mt-4">
          <div className="mb-3 pt-0 flex flex-col">
            <label className="text-sm font-medium text-subtitle">Email</label>
            <input
              type="text"
              value={isAuth.email}
              onChange={(e) => handleChangeAuth('email', e.target.value)}
              className="px-3 mt-2 py-3 placeholder-blueGray-300 text-blueGray-600 bg-white rounded text-sm outline-none focus:border-gray-400 focus:outline-none focus:ring-0 border border-gray-200"
              style={{ width: 330 }}
            />
            <p className="text-xs text-gray-400 mt-1">
              Contoh: email@payrollapp.com
            </p>
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-medium text-subtitle">
              Password
            </label>
            <div>
              <input
                type="text"
                value={isAuth.password}
                onChange={(e) => handleChangeAuth('password', e.target.value)}
                className="px-3 py-3 mt-2 placeholder-blueGray-300 text-blueGray-600 relative bg-white rounded text-sm border border-gray-200 outline-none focus:outline-none focus:ring-0 pl-20 focus:border-gray-400"
                style={{ width: 330 }}
              />
            </div>
          </div>
          <div className=" flex justify-between items-center mt-3">
            <span
              className={`${
                errorAuth === '' ? 'opacity-0' : 'opacity-100'
              } transition-all text-xs mt-1 text-danger cursor-pointer`}
            >
              {errorAuth}
            </span>
            <span className="text-xs mt-1 text-warning cursor-pointer">
              Lupa Kata Sandi ?
            </span>
          </div>

          <div className="flex flex-col justify-center mt-9 items-center">
            <button
              onClick={handleSubmit}
              className="ml-2 w-full flex justify-center bg-gray-800 hover:text-gray-100 transition hover:border-textDefault items-center text-sm font-medium text-white py-2.5 px-3 border rounded"
            >
              Masuk
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default LoginPage
