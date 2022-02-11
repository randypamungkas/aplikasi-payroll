import './App.css'
import RouteList from './routes/MainRoutes'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import '@material-tailwind/react/tailwind.css'
import Navbar from './components/molecules/Navbar'

const isAuth = localStorage.getItem('isAuth')
function App() {
  return (
    <Router>
      <div>
        <Routes>
          {RouteList.map((el, index) => (
            <Route
              path={el.path}
              exact={el.exact}
              element={
                el.permission ? (
                  isAuth ? (
                    <div
                      className={`${
                        el.path === '/login' && 'pt-14'
                      } min-h-screen`}
                    >
                      {el.path !== '/login' && <Navbar />}
                      {el.component}
                      {console.log(el.permission)}
                    </div>
                  ) : (
                    <Navigate to="/login" />
                  )
                ) : (
                  <div
                    className={`${
                      el.path === '/login' && 'pt-14'
                    } min-h-screen`}
                  >
                    {el.path !== '/login' && <Navbar />}
                    {el.component}
                  </div>
                )
              }
              key={index}
            />
          ))}
        </Routes>
      </div>
    </Router>
  )
}

export default App
