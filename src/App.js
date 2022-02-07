import "./App.css";
import RouteList from "./routes/MainRoutes";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import "@material-tailwind/react/tailwind.css";
import Navbar from "./components/molecules/Navbar";

const isAuth = true;

function App() {
  return (
    <Router>
      <Navbar />
      <div className="pt-14 min-h-screen">
        <Routes>
          {RouteList.map((el, index) => (
            <Route
              path={el.path}
              exact={el.exact}
              element={
                el.permission ? (
                  isAuth ? (
                    el.component
                  ) : (
                    <Navigate to="/login" />
                  )
                ) : (
                  el.component
                )
              }
              key={index}
            />
          ))}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
